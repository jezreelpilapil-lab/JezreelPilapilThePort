// ─── 3D Maze Duel — self-contained vanilla JS + Three.js ─────────────────────
// Launched via command: 3dmazeduel
// Requires Three.js CDN (loaded dynamically)

const MazeDuel = (() => {

// ─── Constants ────────────────────────────────────────────────────────────────
const GRID = 15;
const CELL = 2;
const WALL_H = 1.6;
const TURN_MS = 280;
const MOVE_MS = 160;
const DIRS = { N:0, E:1, S:2, W:3 };
const DX = [0,1,0,-1];
const DZ = [-1,0,1,0];

// ─── Maze Generator (recursive backtracker DFS) ───────────────────────────────
function generateMaze(W, H) {
  const walls = Array.from({length:H}, ()=>Array.from({length:W},()=>({n:true,e:true,s:true,w:true})));
  const visited = Array.from({length:H},()=>new Array(W).fill(false));
  function carve(x,y){
    visited[y][x]=true;
    const dirs=[0,1,2,3].sort(()=>Math.random()-0.5);
    for(const d of dirs){
      const nx=x+DX[d], ny=y+DZ[d];
      if(nx<0||ny<0||nx>=W||ny>=H||visited[ny][nx]) continue;
      if(d===0){walls[y][x].n=false;walls[ny][nx].s=false;}
      if(d===1){walls[y][x].e=false;walls[ny][nx].w=false;}
      if(d===2){walls[y][x].s=false;walls[ny][nx].n=false;}
      if(d===3){walls[y][x].w=false;walls[ny][nx].e=false;}
      carve(nx,ny);
    }
  }
  carve(0,0);
  return walls;
}

// ─── State ────────────────────────────────────────────────────────────────────
let state = 'setup'; // setup | playing | won
let maze, players, exitCell, startTime, animFrame, scene, renderer3, cameras;
let p1Name='Player 1', p2Name='Player 2', p1CPU=false, p2CPU=false, p1Smart=true, p2Smart=true;
let showMap = false;
let winner = null;
let container, canvas3d, mapCanvas, hudEl, timerEl, winEl;
let THREE_lib = null;

// ─── Loader ───────────────────────────────────────────────────────────────────
function loadThree(cb){
  if(window.THREE){ THREE_lib=window.THREE; return cb(); }
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.min.js';
  s.onload=()=>{ THREE_lib=window.THREE; cb(); };
  document.head.appendChild(s);
}

// ─── Player State Factory ─────────────────────────────────────────────────────
function makePlayer(gx,gz,facing,color,isCPU,smart){
  return {
    gx,gz,            // grid position
    facing,           // 0=N 1=E 2=S 3=W
    x: gx*CELL, z: gz*CELL,  // world pos (lerped)
    angle: facing*(Math.PI/2),
    moving:false, turning:false,
    moveT:0, turnT:0,
    fromX:0,fromZ:0,toX:0,toZ:0,
    fromAngle:0,toAngle:0,
    color, name:'', won:false,
    isCPU, smart,
    cpuTimer:0,
    cpuLastDir:-1
  };
}

// ─── Init Game ────────────────────────────────────────────────────────────────
function initGame(){
  const T = THREE_lib;
  maze = generateMaze(GRID,GRID);

  // Spawn corners
  const p1 = makePlayer(1,1, DIRS.E, 0x38bdf8, p1CPU, p1Smart);
  p1.name = p1Name;
  const p2 = makePlayer(GRID-2,GRID-2, DIRS.W, 0xfacc15, p2CPU, p2Smart);
  p2.name = p2Name;
  players = [p1,p2];
  exitCell = {x:Math.floor(GRID/2), z:Math.floor(GRID/2)};

  startTime = performance.now();
  winner = null;
  showMap = false;
  state = 'playing';

  buildScene();
  winEl.classList.add('hidden');
  hudEl.classList.remove('hidden');
}

// ─── Build Three.js Scene ─────────────────────────────────────────────────────
function buildScene(){
  const T = THREE_lib;
  scene = new T.Scene();
  scene.background = new T.Color(0x0a0a1a);
  scene.fog = new T.FogExp2(0x0a0a1a, 0.16);

  // Floor
  const floorGeo = new T.PlaneGeometry(GRID*CELL*2, GRID*CELL*2);
  const floorMat = new T.MeshLambertMaterial({color:0x1e293b});
  const floor = new T.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI/2;
  scene.add(floor);

  // Ceiling
  const ceilMat = new T.MeshLambertMaterial({color:0x0f172a});
  const ceil = new T.Mesh(floorGeo.clone(), ceilMat);
  ceil.rotation.x = Math.PI/2;
  ceil.position.y = WALL_H;
  scene.add(ceil);

  // Ambient
  scene.add(new T.AmbientLight(0x223344, 0.8));

  // Walls
  buildWalls();

  // Exit gem
  const gemGeo = new T.OctahedronGeometry(0.25);
  const gemMat = new T.MeshStandardMaterial({color:0x00ff88,emissive:0x00ff88,emissiveIntensity:1});
  const gem = new T.Mesh(gemGeo, gemMat);
  gem.position.set(exitCell.x*CELL, WALL_H/2, exitCell.z*CELL);
  gem.name='gem';
  scene.add(gem);
  const gemLight = new T.PointLight(0x00ff88,2,4);
  gemLight.position.copy(gem.position);
  scene.add(gemLight);

  // Cameras (one per player)
  cameras = players.map(p=>{
    const cam = new T.PerspectiveCamera(75, 1, 0.05, 30);
    updateCamera(cam, p);
    return cam;
  });

  // Player lights
  players.forEach((p,i)=>{
    const pl = new T.PointLight(p.color, 1.5, 9);
    pl.name = `plight${i}`;
    scene.add(pl);
  });
}

// ─── Build Walls ──────────────────────────────────────────────────────────────
function buildWalls(){
  const T = THREE_lib;
  const mat = new T.MeshLambertMaterial({color:0x334155});
  const thick = 0.12;

  for(let z=0;z<GRID;z++){
    for(let x=0;x<GRID;x++){
      const wx=x*CELL, wz=z*CELL;
      const cell=maze[z][x];
      // North wall
      if(cell.n){
        const g=new T.BoxGeometry(CELL+thick,WALL_H,thick);
        const m=new T.Mesh(g,mat);
        m.position.set(wx,WALL_H/2,wz-CELL/2);
        scene.add(m);
      }
      // West wall
      if(cell.w){
        const g=new T.BoxGeometry(thick,WALL_H,CELL+thick);
        const m=new T.Mesh(g,mat);
        m.position.set(wx-CELL/2,WALL_H/2,wz);
        scene.add(m);
      }
      // South border
      if(z===GRID-1&&cell.s){
        const g=new T.BoxGeometry(CELL+thick,WALL_H,thick);
        const m=new T.Mesh(g,mat);
        m.position.set(wx,WALL_H/2,wz+CELL/2);
        scene.add(m);
      }
      // East border
      if(x===GRID-1&&cell.e){
        const g=new T.BoxGeometry(thick,WALL_H,CELL+thick);
        const m=new T.Mesh(g,mat);
        m.position.set(wx+CELL/2,WALL_H/2,wz);
        scene.add(m);
      }
    }
  }
}

// ─── Camera update ────────────────────────────────────────────────────────────
function updateCamera(cam, p){
  cam.position.set(p.x, WALL_H*0.55, p.z);
  cam.rotation.set(0, Math.PI - p.angle, 0, 'YXZ');
}

// ─── Movement helpers ─────────────────────────────────────────────────────────
function canMove(p, dir){
  const cell = maze[p.gz][p.gx];
  if(dir===DIRS.N && cell.n) return false;
  if(dir===DIRS.E && cell.e) return false;
  if(dir===DIRS.S && cell.s) return false;
  if(dir===DIRS.W && cell.w) return false;
  return true;
}

function startMove(p){
  if(p.moving||p.turning) return;
  if(!canMove(p,p.facing)) return;
  p.moving=true; p.moveT=0;
  p.fromX=p.x; p.fromZ=p.z;
  p.gx+=DX[p.facing]; p.gz+=DZ[p.facing];
  p.toX=p.gx*CELL; p.toZ=p.gz*CELL;
}

function startMoveBack(p){
  if(p.moving||p.turning) return;
  const back=(p.facing+2)%4;
  if(!canMove(p,back)) return;
  p.moving=true; p.moveT=0;
  p.fromX=p.x; p.fromZ=p.z;
  p.gx+=DX[back]; p.gz+=DZ[back];
  p.toX=p.gx*CELL; p.toZ=p.gz*CELL;
}

function startStrafe(p, side){
  if(p.moving||p.turning) return;
  const dir=(p.facing+(side===1?1:3))%4;
  if(!canMove(p,dir)) return;
  p.moving=true; p.moveT=0;
  p.fromX=p.x; p.fromZ=p.z;
  p.gx+=DX[dir]; p.gz+=DZ[dir];
  p.toX=p.gx*CELL; p.toZ=p.gz*CELL;
}

function startTurn(p, side){
  if(p.moving||p.turning) return;
  p.turning=true; p.turnT=0;
  p.fromAngle=p.angle;
  p.facing=(p.facing+(side===1?1:3))%4;
  // Always take shortest rotation path
  let target = p.facing*(Math.PI/2);
  let diff = target - p.fromAngle;
  // Normalize diff to [-PI, PI]
  while(diff>Math.PI) diff-=2*Math.PI;
  while(diff<-Math.PI) diff+=2*Math.PI;
  p.toAngle = p.fromAngle + diff;
}

// ─── Smoothstep ───────────────────────────────────────────────────────────────
function smoothstep(t){ return t*t*(3-2*t); }

// ─── CPU AI ───────────────────────────────────────────────────────────────────
function cpuTick(p, dt){
  p.cpuTimer -= dt;
  if(p.cpuTimer>0 || p.moving || p.turning) return;
  p.cpuTimer = p.smart ? 0.18 : 0.22;

  if(p.smart){
    // Right-hand wall follower
    const right=(p.facing+1)%4;
    const fwd=p.facing;
    const left=(p.facing+3)%4;
    const back=(p.facing+2)%4;
    if(canMove(p,right)){ startTurn(p,1); }
    else if(canMove(p,fwd)){ startMove(p); }
    else if(canMove(p,left)){ startTurn(p,-1); }
    else { startTurn(p,1); startTurn(p,1); }
  } else {
    // Random valid move
    const opts=[];
    if(canMove(p,p.facing)) opts.push(()=>startMove(p));
    if(canMove(p,(p.facing+1)%4)) opts.push(()=>startTurn(p,1));
    if(canMove(p,(p.facing+3)%4)) opts.push(()=>startTurn(p,-1));
    if(opts.length) opts[Math.floor(Math.random()*opts.length)]();
    else startTurn(p,1);
  }
}

// ─── Input ────────────────────────────────────────────────────────────────────
const keys={};
function onKey(e){
  keys[e.code]=e.type==='keydown';
  if(e.code==='KeyM' && e.type==='keydown') toggleMap();
}

// ─── Game Loop ────────────────────────────────────────────────────────────────
let lastT = 0;
function gameLoop(ts){
  if(state!=='playing'){ return; }
  animFrame = requestAnimationFrame(gameLoop);
  const dt = Math.min((ts - lastT)/1000, 0.1);
  lastT = ts;

  const p1=players[0], p2=players[1];

  // Player 1 input
  if(!p1.isCPU){
    if(keys['KeyW']) startMove(p1);
    if(keys['KeyS']) startMoveBack(p1);
    if(keys['KeyA']) startTurn(p1,-1);
    if(keys['KeyD']) startTurn(p1,1);
    if(keys['KeyQ']) startStrafe(p1,-1);
    if(keys['KeyE']) startStrafe(p1,1);
  } else { cpuTick(p1,dt); }

  // Player 2 input
  if(!p2.isCPU){
    if(keys['Numpad8']) startMove(p2);
    if(keys['Numpad5']) startMoveBack(p2);
    if(keys['Numpad4']) startTurn(p2,-1);
    if(keys['Numpad6']) startTurn(p2,1);
    if(keys['Numpad7']) startStrafe(p2,-1);
    if(keys['Numpad9']) startStrafe(p2,1);
  } else { cpuTick(p2,dt); }

  // Animate players
  players.forEach((p,i)=>{
    if(p.moving){
      p.moveT += dt*1000/MOVE_MS;
      if(p.moveT>=1){
        p.moveT=1; p.moving=false;
        p.x=p.toX; p.z=p.toZ;
      } else {
        const t=smoothstep(p.moveT);
        p.x=p.fromX+(p.toX-p.fromX)*t;
        p.z=p.fromZ+(p.toZ-p.fromZ)*t;
      }
    }
    if(p.turning){
      p.turnT += dt*1000/TURN_MS;
      if(p.turnT>=1){
        p.turnT=1; p.turning=false;
        p.angle=p.toAngle;
      } else {
        const t=smoothstep(p.turnT);
        p.angle=p.fromAngle+(p.toAngle-p.fromAngle)*t;
      }
    }
    updateCamera(cameras[i],p);
    const pl=scene.getObjectByName(`plight${i}`);
    if(pl) pl.position.set(p.x,WALL_H*0.5,p.z);

    // Check exit
    if(!p.won && p.gx===exitCell.x && p.gz===exitCell.z){
      p.won=true; winner=p;
      state='won';
      showWin(p);
    }
  });

  // Animate gem
  const gem=scene.getObjectByName('gem');
  if(gem){ gem.rotation.y+=dt*2; gem.position.y=WALL_H/2+Math.sin(ts*0.002)*0.1; }

  // Render split screen
  const W=canvas3d.width, H=canvas3d.height;
  renderer3.setScissorTest(true);

  // Left viewport — P1
  renderer3.setViewport(0,0,W/2,H);
  renderer3.setScissor(0,0,W/2,H);
  cameras[0].aspect=(W/2)/H;
  cameras[0].updateProjectionMatrix();
  renderer3.render(scene,cameras[0]);

  // Right viewport — P2
  renderer3.setViewport(W/2,0,W/2,H);
  renderer3.setScissor(W/2,0,W/2,H);
  cameras[1].aspect=(W/2)/H;
  cameras[1].updateProjectionMatrix();
  renderer3.render(scene,cameras[1]);

  renderer3.setScissorTest(false);

  // HUD timer
  const elapsed=((performance.now()-startTime)/1000).toFixed(1);
  timerEl.textContent=`⏱ ${elapsed}s`;

  // Minimap
  if(showMap) drawMap();
}

// ─── Minimap ──────────────────────────────────────────────────────────────────
function toggleMap(){ showMap=!showMap; mapCanvas.style.display=showMap?'block':'none'; }

function drawMap(){
  const ctx=mapCanvas.getContext('2d');
  const S=8, W=GRID*S, H=GRID*S;
  mapCanvas.width=W; mapCanvas.height=H;
  ctx.fillStyle='rgba(10,10,26,0.85)';
  ctx.fillRect(0,0,W,H);

  for(let z=0;z<GRID;z++){
    for(let x=0;x<GRID;x++){
      const cell=maze[z][x];
      const px=x*S, pz=z*S;
      ctx.strokeStyle='#38bdf8';
      ctx.lineWidth=1;
      if(cell.n){ ctx.beginPath();ctx.moveTo(px,pz);ctx.lineTo(px+S,pz);ctx.stroke(); }
      if(cell.e){ ctx.beginPath();ctx.moveTo(px+S,pz);ctx.lineTo(px+S,pz+S);ctx.stroke(); }
      if(cell.s){ ctx.beginPath();ctx.moveTo(px,pz+S);ctx.lineTo(px+S,pz+S);ctx.stroke(); }
      if(cell.w){ ctx.beginPath();ctx.moveTo(px,pz);ctx.lineTo(px,pz+S);ctx.stroke(); }
    }
  }

  // Exit
  ctx.fillStyle='#00ff88';
  ctx.beginPath();
  ctx.arc(exitCell.x*S+S/2,exitCell.z*S+S/2,S/2-1,0,Math.PI*2);
  ctx.fill();

  // Players
  players.forEach(p=>{
    ctx.fillStyle=`#${p.color.toString(16).padStart(6,'0')}`;
    ctx.beginPath();
    ctx.arc(p.gx*S+S/2,p.gz*S+S/2,S/2-1,0,Math.PI*2);
    ctx.fill();
  });
}

// ─── Win Screen ───────────────────────────────────────────────────────────────
function showWin(p){
  cancelAnimationFrame(animFrame);
  winEl.innerHTML=`
    <div class="text-center">
      <div class="text-6xl mb-4">🏆</div>
      <div class="text-3xl font-bold mb-2" style="color:#${p.color.toString(16).padStart(6,'0')}">${p.name} Wins!</div>
      <div class="text-slate-400 mb-6">Reached the exit in ${((performance.now()-startTime)/1000).toFixed(1)}s</div>
      <div class="flex gap-3 justify-center">
        <button onclick="MazeDuel.restart()" class="px-6 py-2 bg-brand text-dark font-bold rounded-full hover:brightness-110">Play Again</button>
        <button onclick="MazeDuel.close()" class="px-6 py-2 border border-slate-600 text-slate-300 rounded-full hover:border-white">Exit</button>
      </div>
    </div>`;
  winEl.classList.remove('hidden');
  hudEl.classList.add('hidden');
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────
function buildSetupScreen(){
  return `
  <div class="flex flex-col items-center gap-6 p-8 max-w-lg w-full mx-auto">
    <div class="text-center">
      <div class="text-4xl mb-1">🧩</div>
      <h1 class="text-2xl font-bold text-white">3D Maze Duel</h1>
      <p class="text-slate-400 text-sm mt-1">Split-screen first-person maze race</p>
    </div>

    <div class="grid grid-cols-2 gap-4 w-full">
      <!-- P1 -->
      <div class="bg-slate-800 border border-sky-500/40 rounded-xl p-4">
        <div class="text-sky-400 font-bold mb-3">Player 1 <span class="text-xs text-slate-500">(WASD+QE)</span></div>
        <input id="p1name" value="Player 1" class="w-full bg-slate-700 text-white text-sm px-3 py-1.5 rounded mb-3 outline-none focus:ring-1 focus:ring-sky-400"/>
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer mb-2">
          <input type="checkbox" id="p1cpu" class="accent-sky-400"/> CPU
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer" id="p1smartrow">
          <input type="checkbox" id="p1smart" checked class="accent-sky-400"/> Smart AI
        </label>
      </div>
      <!-- P2 -->
      <div class="bg-slate-800 border border-yellow-500/40 rounded-xl p-4">
        <div class="text-yellow-400 font-bold mb-3">Player 2 <span class="text-xs text-slate-500">(Numpad)</span></div>
        <input id="p2name" value="Player 2" class="w-full bg-slate-700 text-white text-sm px-3 py-1.5 rounded mb-3 outline-none focus:ring-1 focus:ring-yellow-400"/>
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer mb-2">
          <input type="checkbox" id="p2cpu" class="accent-yellow-400"/> CPU
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer" id="p2smartrow">
          <input type="checkbox" id="p2smart" checked class="accent-yellow-400"/> Smart AI
        </label>
      </div>
    </div>

    <div class="text-xs text-slate-500 text-center">
      🎯 Race to the <span class="text-green-400">green gem</span> in the center · Press <kbd class="bg-slate-700 px-1 rounded">M</kbd> for minimap
    </div>

    <div class="flex gap-3">
      <button id="mazeStart" class="px-8 py-2.5 bg-brand text-dark font-bold rounded-full hover:brightness-110 transition">Start Game</button>
      <button id="mazeClose" class="px-6 py-2.5 border border-slate-600 text-slate-300 rounded-full hover:border-white transition">Exit</button>
    </div>
  </div>`;
}

// ─── Build full modal UI ───────────────────────────────────────────────────────
function buildUI(){
  const modal = document.createElement('div');
  modal.id = 'mazeDuelModal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:#0a0a1a;
    display:flex;flex-direction:column;
    font-family:Inter,ui-sans-serif,system-ui;`;

  // Setup screen
  const setupEl = document.createElement('div');
  setupEl.id = 'mazeSetup';
  setupEl.style.cssText = 'display:flex;align-items:center;justify-content:center;flex:1;';
  setupEl.innerHTML = buildSetupScreen();
  modal.appendChild(setupEl);

  // Game canvas
  canvas3d = document.createElement('canvas');
  canvas3d.id = 'mazeCanvas';
  canvas3d.style.cssText = 'display:none;width:100%;height:100%;position:absolute;inset:0;';
  modal.appendChild(canvas3d);

  // Divider line
  const divider = document.createElement('div');
  divider.style.cssText = `
    position:absolute;left:50%;top:0;bottom:0;width:2px;
    background:rgba(255,255,255,0.15);pointer-events:none;display:none;`;
  divider.id='mazeDivider';
  modal.appendChild(divider);

  // Player name labels
  const p1label = document.createElement('div');
  p1label.id='p1label';
  p1label.style.cssText='position:absolute;top:8px;left:12px;color:#38bdf8;font-size:12px;font-weight:700;display:none;';
  modal.appendChild(p1label);
  const p2label = document.createElement('div');
  p2label.id='p2label';
  p2label.style.cssText='position:absolute;top:8px;left:calc(50% + 12px);color:#facc15;font-size:12px;font-weight:700;display:none;';
  modal.appendChild(p2label);

  // HUD
  hudEl = document.createElement('div');
  hudEl.id = 'mazeHud';
  hudEl.className = 'hidden';
  hudEl.style.cssText = 'position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:10;';
  timerEl = document.createElement('div');
  timerEl.style.cssText = 'background:rgba(0,0,0,0.6);color:white;padding:2px 12px;border-radius:99px;font-size:13px;font-weight:600;';
  hudEl.appendChild(timerEl);

  // Map button
  const mapBtn = document.createElement('button');
  mapBtn.textContent='🗺 Map (M)';
  mapBtn.style.cssText='position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.6);color:white;border:1px solid rgba(255,255,255,0.2);padding:4px 16px;border-radius:99px;font-size:12px;cursor:pointer;z-index:10;display:none;';
  mapBtn.id='mazeMapBtn';
  mapBtn.onclick=()=>toggleMap();
  modal.appendChild(mapBtn);

  modal.appendChild(hudEl);

  // Minimap canvas
  mapCanvas = document.createElement('canvas');
  mapCanvas.style.cssText = 'position:absolute;bottom:48px;left:50%;transform:translateX(-50%);border:1px solid #38bdf8;border-radius:4px;display:none;z-index:20;';
  modal.appendChild(mapCanvas);

  // Win overlay
  winEl = document.createElement('div');
  winEl.className = 'hidden';
  winEl.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);z-index:30;color:white;';
  modal.appendChild(winEl);

  document.body.appendChild(modal);
  container = modal;

  // Setup interactions
  const p1cpu = setupEl.querySelector('#p1cpu');
  const p2cpu = setupEl.querySelector('#p2cpu');
  p1cpu.onchange = ()=>{ setupEl.querySelector('#p1smartrow').style.opacity=p1cpu.checked?'1':'0.3'; };
  p2cpu.onchange = ()=>{ setupEl.querySelector('#p2smartrow').style.opacity=p2cpu.checked?'1':'0.3'; };
  // Init opacity
  setupEl.querySelector('#p1smartrow').style.opacity='0.3';
  setupEl.querySelector('#p2smartrow').style.opacity='0.3';

  setupEl.querySelector('#mazeStart').onclick = startFromSetup;
  setupEl.querySelector('#mazeClose').onclick = close;
}

function startFromSetup(){
  const setupEl = document.getElementById('mazeSetup');
  p1Name = setupEl.querySelector('#p1name').value || 'Player 1';
  p2Name = setupEl.querySelector('#p2name').value || 'Player 2';
  p1CPU  = setupEl.querySelector('#p1cpu').checked;
  p2CPU  = setupEl.querySelector('#p2cpu').checked;
  p1Smart= setupEl.querySelector('#p1smart').checked;
  p2Smart= setupEl.querySelector('#p2smart').checked;

  setupEl.style.display='none';
  canvas3d.style.display='block';
  document.getElementById('mazeDivider').style.display='block';
  document.getElementById('mazeMapBtn').style.display='block';

  const p1l=document.getElementById('p1label');
  const p2l=document.getElementById('p2label');
  p1l.textContent=p1Name; p1l.style.display='block';
  p2l.textContent=p2Name; p2l.style.display='block';

  // Init Three.js renderer
  const T = THREE_lib;
  renderer3 = new T.WebGLRenderer({canvas:canvas3d, antialias:true});
  renderer3.setPixelRatio(Math.min(window.devicePixelRatio,2));

  function resize(){
    const W=container.clientWidth, H=container.clientHeight;
    canvas3d.width=W; canvas3d.height=H;
    renderer3.setSize(W,H,false);
  }
  resize();
  window.addEventListener('resize',resize);

  document.addEventListener('keydown',onKey);
  document.addEventListener('keyup',onKey);

  initGame();
  lastT = performance.now();
  animFrame = requestAnimationFrame(gameLoop);
}

// ─── Public API ───────────────────────────────────────────────────────────────
function launch(){
  if(document.getElementById('mazeDuelModal')) return;
  loadThree(()=>{ buildUI(); });
}

function restart(){
  cancelAnimationFrame(animFrame);
  // Reset renderer
  if(renderer3){ renderer3.dispose(); renderer3=null; }
  const setupEl=document.getElementById('mazeSetup');
  canvas3d.style.display='none';
  document.getElementById('mazeDivider').style.display='none';
  document.getElementById('mazeMapBtn').style.display='none';
  document.getElementById('p1label').style.display='none';
  document.getElementById('p2label').style.display='none';
  setupEl.style.display='flex';
  winEl.classList.add('hidden');
  hudEl.classList.remove('hidden');
  mapCanvas.style.display='none';
  document.removeEventListener('keydown',onKey);
  document.removeEventListener('keyup',onKey);
  state='setup';
}

function close(){
  cancelAnimationFrame(animFrame);
  if(renderer3){ renderer3.dispose(); renderer3=null; }
  document.removeEventListener('keydown',onKey);
  document.removeEventListener('keyup',onKey);
  const m=document.getElementById('mazeDuelModal');
  if(m) m.remove();
  state='setup';
}

return { launch, restart, close };
})();

window.MazeDuel = MazeDuel;
console.log('[3DMazeDuel] loaded and ready');
