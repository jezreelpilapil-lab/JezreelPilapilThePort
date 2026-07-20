// ─── Icon SVG map ────────────────────────────────────────────────────────────
const ICONS = {
  code:    `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  wrench:  `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  cpu:     `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H7a2 2 0 00-2 2v2M9 3h6M9 3v18m6-18h2a2 2 0 012 2v2m0 0v10a2 2 0 01-2 2h-2m0 0H9m6 0v-3M9 21v-3m0 0H7a2 2 0 01-2-2v-2m0 0V9"/></svg>`,
  chart:   `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  phone:   `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
  queue:   `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>`,
  wallet:  `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>`,
  support: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
  web:     `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
  mail:    `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  linkedin:`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github:  `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
};

// ─── Cookie Helper Functions ───────────────────────────────────────────────────
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// ─── Supabase credentials are stored in portfolio.json → loaded in init()
let supabaseClient = null;

// ─── Utility ─────────────────────────────────────────────────────────────────
const icon = (name, extra = '') =>
  `<span class="text-brand ${extra}">${ICONS[name] ?? ''}</span>`;

const section = (id, content) => `
  <section id="${id}" class="py-20 px-4 bg-light dark:bg-dark transition-colors duration-300">
    <div class="max-w-5xl mx-auto">${content}</div>
  </section>`;

const sectionTitle = (text) =>
  `<h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">${text}</h2>
   <div class="w-16 h-1 bg-brand rounded mb-10"></div>`;

// ─── Navbar builder ──────────────────────────────────────────────────────────
function buildNav(meta) {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Awards', 'Certifications', 'Contact'];
  document.getElementById('navbar').innerHTML = `
    <header class="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-dark/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="logo.png" alt="JAP Logo" class="w-8 h-8 rounded-full object-cover">
          <button id="darkModeToggle" class="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand transition-colors">
            <svg id="sunIcon" class="w-5 h-5 text-yellow-500 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg id="moonIcon" class="w-5 h-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex gap-6 text-sm font-medium">
          ${links.map(l => `<a href="#${l.toLowerCase()}" class="text-slate-700 dark:text-slate-300 hover:text-brand transition-colors">${l}</a>`).join('')}
        </nav>
        <div class="flex gap-2">
          <a href="${meta.resume}" download
             class="text-xs bg-brand text-dark font-semibold px-3 py-2 rounded-full hover:brightness-110 transition">
            Full Resume
          </a>
          <a href="${meta.resume_short}" download
             class="text-xs border border-brand text-brand font-semibold px-3 py-2 rounded-full hover:bg-brand hover:text-dark transition">
            Short Resume
          </a>
          <a href="${meta.resume_compact}" download
             class="text-xs border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold px-3 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition">
            Compact Resume
          </a>
        </div>
      </div>
    </header>`;

  // Dark mode toggle logic
  const darkModeToggle = document.getElementById('darkModeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const html = document.documentElement;

  // Check for saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }

  darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
  });
}

// ─── Hero builder ────────────────────────────────────────────────────────────
function buildHero(meta) {
  return `
    <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-16 bg-light dark:bg-dark transition-colors duration-300">
      <div class="max-w-3xl text-center">
        <img src="logo.png" alt="JAP Logo" class="w-32 h-32 mx-auto mb-6 rounded-full object-cover">
        <p class="text-brand text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</p>
        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">${meta.name}</h1>
        <p class="text-xl text-lightMuted dark:text-muted mb-8">${meta.tagline}</p>
        <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm text-slate-600 dark:text-slate-400">
          <span>${meta.location}</span>
          <span class="text-slate-400 dark:text-slate-600">|</span>
          <a href="mailto:${meta.email}" class="hover:text-brand transition-colors">${meta.email}</a>
          <span class="text-slate-400 dark:text-slate-600">|</span>
          <span>${meta.phone}</span>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="#contact"
             class="bg-brand text-dark font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">
            Hire Me
          </a>
          <a href="#projects"
             class="border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-dark transition">
            View Projects
          </a>
          <a href="${meta.resume}" download
             class="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition">
            Download Full Resume
          </a>
          <a href="${meta.resume_short}" download
             class="border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition">
            Download Short Resume
          </a>
          <a href="${meta.resume_compact}" download
             class="border border-slate-600 dark:border-slate-500 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition">
            Download Compact Resume
          </a>
        </div>
        <div class="flex justify-center gap-5 mt-8">
          <a href="${meta.linkedin}" target="_blank" rel="noopener" class="text-lightMuted dark:text-muted hover:text-brand transition-colors">${ICONS.linkedin}</a>
          <a href="${meta.github}" target="_blank" rel="noopener" class="text-lightMuted dark:text-muted hover:text-brand transition-colors">${ICONS.github}</a>
          <a href="mailto:${meta.email}" class="text-lightMuted dark:text-muted hover:text-brand transition-colors">${ICONS.mail}</a>
        </div>
      </div>
    </section>`;
}

// ─── About builder ───────────────────────────────────────────────────────────
function buildAbout(about) {
  const paras = about.paragraphs.map(p => `<p class="text-lightMuted dark:text-slate-400 leading-relaxed mb-4">${p}</p>`).join('');
  return section('about', `
    ${sectionTitle(about.headline)}
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>${paras}</div>
      <div class="grid grid-cols-2 gap-4">
        ${[
          ['20+', 'Years Experience'],
          ['3', 'BPO Enterprises'],
          ['6+', 'Android & Web Apps'],
          ['∞', 'Problems Solved']
        ].map(([n, l]) => `
          <div class="bg-card dark:bg-card bg-lightCard rounded-xl p-5 text-center border border-slate-700 dark:border-slate-700 border-slate-200 transition-colors duration-300">
            <div class="text-3xl font-bold text-brand">${n}</div>
            <div class="text-xs text-muted dark:text-muted text-lightMuted mt-1">${l}</div>
          </div>`).join('')}
      </div>
    </div>`);
}

// ─── Skills builder ──────────────────────────────────────────────────────────
function buildSkills(skills) {
  const cards = skills.map(s => `
    <div class="bg-lightCard dark:bg-card border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-colors duration-300">
      <div class="flex items-center gap-3 mb-4">
        ${icon(s.icon)}
        <h3 class="text-slate-900 dark:text-white font-semibold">${s.category}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${s.items.map(i => `<span class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 transition-colors duration-300">${i}</span>`).join('')}
      </div>
    </div>`).join('');
  return section('skills', `${sectionTitle('Core Skills')}<div class="grid sm:grid-cols-2 gap-6">${cards}</div>`);
}

// ─── Experience builder ──────────────────────────────────────────────────────
function buildExperience(experience) {
  const items = experience.map(job => {
    const roles = job.roles.map(r => `
      <div class="mb-6 last:mb-0">
        <div class="flex flex-wrap justify-between items-baseline gap-2 mb-2">
          <h4 class="text-slate-900 dark:text-white font-medium">${r.title}</h4>
          <span class="text-xs text-brand whitespace-nowrap">${r.period}</span>
        </div>
        <ul class="space-y-1">
          ${r.bullets.map(b => `<li class="text-lightMuted dark:text-slate-400 text-sm pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand before:rounded-full">${b}</li>`).join('')}
        </ul>
      </div>`).join('');
    return `
      <div class="bg-lightCard dark:bg-card border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 last:mb-0 transition-colors duration-300">
        <div class="flex flex-wrap justify-between items-start gap-2 mb-1">
          <h3 class="text-slate-900 dark:text-white font-bold text-lg">${job.company}</h3>
          <span class="text-xs text-lightMuted dark:text-muted whitespace-nowrap">${job.period}</span>
        </div>
        ${job.formerly ? `<p class="text-xs text-slate-400 dark:text-slate-500 mb-1">${job.formerly}</p>` : ''}
        <p class="text-xs text-lightMuted dark:text-muted mb-5">${job.location}</p>
        ${roles}
      </div>`;
  }).join('');
  return section('experience', `${sectionTitle('Work Experience')}${items}`);
}

// ─── Projects builder ────────────────────────────────────────────────────────
function buildProjects(projects) {
  const apps  = projects.filter(p => p.type === 'app');
  const cases = projects.filter(p => p.type === 'casestudy');

  const card = (p) => `
    <div class="bg-lightCard dark:bg-card border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:border-brand transition-colors duration-300">
      <div class="flex items-center gap-3 mb-3">
        ${icon(p.icon, 'flex-shrink-0')}
        <h3 class="text-slate-900 dark:text-white font-semibold">${p.name}</h3>
      </div>
      <p class="text-lightMuted dark:text-slate-400 text-sm flex-1 mb-4">${p.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${p.tech.map(t => `<span class="text-xs bg-slate-100 dark:bg-slate-800 text-brand px-2 py-0.5 rounded border border-brand/30 transition-colors duration-300">${t}</span>`).join('')}
      </div>
      ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="text-xs text-brand hover:underline">View on GitHub →</a>` : ''}
    </div>`;

  return section('projects', `
    ${sectionTitle('Projects & Case Studies')}
    <h3 class="text-slate-900 dark:text-white font-semibold mb-4 text-lg">📱 Android Applications</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      ${apps.map(card).join('')}
    </div>
    <h3 class="text-slate-900 dark:text-white font-semibold mb-4 text-lg">📋 Technical Case Studies</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cases.map(card).join('')}
    </div>`);
}

// ─── Certifications builder ──────────────────────────────────────────────────
function buildCertifications(certs) {
  const items = certs.map(c => `
    <div class="bg-lightCard dark:bg-card border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex gap-4 items-start transition-colors duration-300">
      <div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 text-brand font-bold text-lg">${c.year.slice(-2)}</div>
      <div>
        <p class="text-slate-900 dark:text-white font-medium">${c.name}</p>
        <p class="text-xs text-lightMuted dark:text-muted">${c.school} · ${c.location} · ${c.year}</p>
      </div>
    </div>`).join('');
  return section('certifications', `${sectionTitle('Certifications & Training')}<div class="grid sm:grid-cols-2 gap-4">${items}</div>`);
}

// ─── Contact builder ─────────────────────────────────────────────────────────
function buildContact(contact, meta) {
  return section('contact', `
    ${sectionTitle('Contact Me')}
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <p class="text-lightMuted dark:text-slate-400 mb-8 leading-relaxed">${contact.cta}</p>
        <div class="space-y-4">
          <a href="mailto:${meta.email}" class="flex items-center gap-3 text-lightMuted dark:text-slate-400 hover:text-brand transition-colors">
            ${ICONS.mail}<span>${meta.email}</span>
          </a>
          <a href="${meta.linkedin}" target="_blank" rel="noopener" class="flex items-center gap-3 text-lightMuted dark:text-slate-400 hover:text-brand transition-colors">
            ${ICONS.linkedin}<span>LinkedIn Profile</span>
          </a>
          <a href="${meta.github}" target="_blank" rel="noopener" class="flex items-center gap-3 text-lightMuted dark:text-slate-400 hover:text-brand transition-colors">
            ${ICONS.github}<span>GitHub</span>
          </a>
        </div>
      </div>
      <form action="${contact.formspree}" method="POST" class="space-y-4" id="contact-form">
        <input type="text" name="name" placeholder="Your Name" required
          class="w-full bg-lightCard dark:bg-card border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors duration-300" />
        <input type="email" name="email" placeholder="Your Email" required
          class="w-full bg-lightCard dark:bg-card border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors duration-300" />
        <input type="text" name="subject" placeholder="Subject"
          class="w-full bg-lightCard dark:bg-card border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors duration-300" />
        <textarea name="message" rows="4" placeholder="Your message..." required
          class="w-full bg-lightCard dark:bg-card border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors duration-300 resize-none"></textarea>
        <button type="submit"
          class="w-full bg-brand text-dark font-semibold py-3 rounded-lg hover:brightness-110 transition">
          Send Message
        </button>
      </form>
    </div>`);
}

// ─── Awards builder ──────────────────────────────────────────────────────────
function buildAwards(awards) {
  const items = awards.map(a => `
    <div class="bg-lightCard dark:bg-card border border-yellow-300/50 dark:border-yellow-500/30 rounded-xl p-5 flex gap-4 items-start transition-colors duration-300">
      <div class="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xl">🏆</div>
      <div>
        <p class="text-slate-900 dark:text-white font-semibold">${a.name}</p>
        <p class="text-xs text-brand mb-2">${a.issuer} · ${a.date}</p>
        <p class="text-lightMuted dark:text-slate-400 text-sm">${a.description}</p>
      </div>
    </div>`).join('');
  return section('awards', `${sectionTitle('Awards & Recognition')}<div class="grid sm:grid-cols-2 gap-4">${items}</div>`);
}


async function buildFooter(meta) {
  // Initialize reaction counts and visitor count
  const reactionTypes = ['like', 'heart', 'laugh', 'surprise', 'sad', 'angry', 'dislike'];
  const reactionCounts = await fetchReactionCounts();
  const currentReaction = localStorage.getItem('currentReaction');
  const visitorCount = await fetchVisitorCount();

  // Build reaction buttons HTML
  const reactionButtonsHTML = reactionTypes.map(type => {
    const emoji = {
      like: '👍',
      heart: '❤️',
      laugh: '😂',
      surprise: '😮',
      sad: '😢',
      angry: '😠',
      dislike: '👎'
    }[type];
    const color = {
      like: 'text-blue-500 border-blue-500 bg-blue-100 dark:bg-blue-900/30',
      heart: 'text-red-500 border-red-500 bg-red-100 dark:bg-red-900/30',
      laugh: 'text-yellow-500 border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30',
      surprise: 'text-yellow-400 border-yellow-400 bg-yellow-100 dark:bg-yellow-900/30',
      sad: 'text-blue-400 border-blue-400 bg-blue-100 dark:bg-blue-900/30',
      angry: 'text-orange-500 border-orange-500 bg-orange-100 dark:bg-orange-900/30',
      dislike: 'text-red-600 border-red-600 bg-red-100 dark:bg-red-900/30'
    }[type];
    const isActive = currentReaction === type;
    const count = reactionCounts[type];
    
    return `
      <button 
        class="reaction-btn px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand transition-colors text-lg flex items-center gap-1 ${isActive ? color : ''}"
        data-reaction="${type}"
      >
        ${emoji}
        <span class="text-xs font-semibold">${count}</span>
      </button>
    `;
  }).join('');

  // Build total reactions count display
  const totalReactions = reactionTypes.reduce((sum, type) => sum + reactionCounts[type], 0);
  const topReactions = reactionTypes
    .filter(type => reactionCounts[type] > 0)
    .sort((a, b) => reactionCounts[b] - reactionCounts[a])
    .slice(0, 3);
  
  const topReactionsHTML = topReactions.map(type => {
    const emoji = {
      like: '👍',
      heart: '❤️',
      laugh: '😂',
      surprise: '😮',
      sad: '😢',
      angry: '😠',
      dislike: '👎'
    }[type];
    const count = reactionCounts[type];
    return `<span class="text-lg flex items-center gap-0.5">${emoji}<span class="text-xs font-semibold">${count}</span></span>`;
  }).join('');

  document.getElementById('footer').innerHTML = `
    <div class="border-t border-slate-200 dark:border-slate-800 py-8 px-4 bg-light dark:bg-dark transition-colors duration-300">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left text-slate-700 dark:text-slate-300">
          <p>© ${new Date().getFullYear()} ${meta.name} · Built with HTML, Tailwind CSS, Vanilla JS & SQL</p>
          <p class="mt-1 text-lightMuted dark:text-muted">${meta.location}</p>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand transition-colors">
            <span class="text-lg">👁️</span>
            <span class="text-sm font-semibold text-lightMuted dark:text-slate-400">${visitorCount}</span>
          </div>
          <div class="relative">
            <div class="reaction-summary flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand transition-colors cursor-pointer">
              <div class="flex -space-x-1">
                ${topReactionsHTML || '<span class="text-lg">👍</span>'}
              </div>
              <span class="text-sm text-lightMuted dark:text-slate-400">${totalReactions}</span>
            </div>
            <div class="reaction-menu absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden flex flex-wrap gap-1 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg border border-slate-200 dark:border-slate-700">
              ${reactionButtonsHTML}
            </div>
          </div>
        </div>
      </div>
    </div>`;

  // Add event listeners
  const reactionSummary = document.querySelector('.reaction-summary');
  const reactionMenu = document.querySelector('.reaction-menu');
  const reactionBtns = document.querySelectorAll('.reaction-btn');

  // Show menu on click (keep open until click outside or select)
  let menuOpen = false;
  reactionSummary.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (menuOpen) {
      if (currentReaction) {
        await handleReaction(null);
      }
      reactionMenu.classList.add('hidden');
      menuOpen = false;
    } else {
      reactionMenu.classList.remove('hidden');
      menuOpen = true;
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!reactionMenu.contains(e.target) && !reactionSummary.contains(e.target)) {
      reactionMenu.classList.add('hidden');
      menuOpen = false;
    }
  });

  // Handle reaction clicks
  reactionBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      await handleReaction(btn.dataset.reaction);
    });
  });
}

function buildHiddenUI(uiConfig) {
  const container = document.createElement('div');
  
  // Hidden Icon
  const hiddenIcon = document.createElement('div');
  hiddenIcon.id = uiConfig.hidden_icon.id;
  hiddenIcon.className = uiConfig.hidden_icon.class;
  hiddenIcon.textContent = uiConfig.hidden_icon.content;
  container.appendChild(hiddenIcon);
  
  // Help Bubble
  const helpBubble = document.createElement('div');
  helpBubble.id = 'helpBubble';
  helpBubble.className = 'fixed bottom-16 left-4 bg-slate-800 border border-slate-700 rounded-lg p-4 hidden flex-col gap-1 shadow-lg text-slate-300 text-sm max-w-sm';
  
  const helpTitle = document.createElement('div');
  helpTitle.className = 'font-bold text-white mb-2';
  helpTitle.textContent = 'Available Commands:';
  helpBubble.appendChild(helpTitle);

  const commandList = [
    { cmd: 'reset icon', desc: 'Resets reaction counts' },
    { cmd: 'reset visitor', desc: 'Resets visitor stats' },
    { cmd: 'stat full visitor', desc: 'Shows detailed visitor stats' },
    { cmd: 'show me', desc: 'Changes logo to logome.jpg' },
    { cmd: 'show you', desc: 'Changes logo to logo.png' },
    { cmd: 'toss coin', desc: 'Flip a coin — heads or tails!' },
    { cmd: 'help', desc: 'Shows this help' }
  ];

  commandList.forEach((item, index) => {
    const cmdEl = document.createElement('div');
    cmdEl.className = 'cursor-pointer px-2 py-1 rounded hover:bg-slate-700 transition-colors';
    cmdEl.dataset.cmd = item.cmd;
    cmdEl.dataset.index = index;
    cmdEl.innerHTML = `<span class="text-brand font-semibold">${item.cmd}</span>: ${item.desc}`;
    helpBubble.appendChild(cmdEl);
  });
  
  container.appendChild(helpBubble);
  
  // Command Line
  const commandLine = document.createElement('div');
  commandLine.id = uiConfig.command_line.id;
  commandLine.className = uiConfig.command_line.class;
  
  const prompt = document.createElement('span');
  prompt.className = 'text-brand font-semibold';
  prompt.textContent = '$';
  commandLine.appendChild(prompt);
  
  const commandInput = document.createElement('input');
  commandInput.type = 'text';
  commandInput.id = uiConfig.command_line.input_id;
  commandInput.className = uiConfig.command_line.input_class;
  commandInput.placeholder = uiConfig.command_line.input_placeholder;
  commandLine.appendChild(commandInput);
  
  container.appendChild(commandLine);
  
  // Error Bubble
  const errorBubble = document.createElement('div');
  errorBubble.id = uiConfig.error_bubble.id;
  errorBubble.className = uiConfig.error_bubble.class;
  errorBubble.textContent = uiConfig.error_bubble.message;
  container.appendChild(errorBubble);
  
  document.body.appendChild(container);
}

// --- New Command Line Logic ---
// Helper to delete a cookie
function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function tossCoin() {
  // Remove existing modal if any
  const existing = document.getElementById('coinModal');
  if (existing) existing.remove();

  const isHeads = Math.random() < 0.5;
  const result = isHeads ? 'HEADS' : 'TAILS';
  // HEADS = logome.jpg (your face), TAILS = logo.png (JAP logo)
  const resultImg = isHeads ? 'logome.jpg' : 'logo.png';
  const resultColor = isHeads ? 'text-yellow-400' : 'text-brand';
  const resultLabel = isHeads ? '👤 Your face' : '🔷 Logo';
  const borderColor = isHeads ? '#facc15' : '#38bdf8';
  const glowColor = isHeads ? 'rgba(250,204,21,0.3)' : 'rgba(56,189,248,0.3)';

  // Random spin direction and number of rotations
  const extraSpins = (Math.floor(Math.random() * 4) + 4) * 360;
  const flipDir = Math.random() < 0.5 ? 1 : -1;
  // Heads lands on back face (180°), tails lands on front face (360°)
  const finalAngle = flipDir * (extraSpins + (isHeads ? 180 : 360));

  const modal = document.createElement('div');
  modal.id = 'coinModal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm';
  modal.innerHTML = `
    <div class="bg-slate-900 border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6 shadow-2xl max-w-xs w-full mx-4" id="coinCard">
      <p class="text-slate-400 text-sm tracking-widest uppercase" id="coinLabel">Tossing...</p>

      <div style="perspective: 600px;">
        <div id="coinInner" style="
          width: 120px; height: 120px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1.4s cubic-bezier(0.33,1,0.68,1);
          transform: rotateY(0deg);
        ">
          <!-- Front face: logo.png = TAILS -->
          <div style="
            position: absolute; inset: 0;
            backface-visibility: hidden;
            border-radius: 50%; overflow: hidden;
            border: 3px solid #38bdf8;
            box-shadow: 0 0 20px rgba(56,189,248,0.3);
          ">
            <img src="logo.png" alt="Tails" style="width:100%;height:100%;object-fit:cover;" />
          </div>
          <!-- Back face: logome.jpg = HEADS (rotated 180 so it appears on flip) -->
          <div style="
            position: absolute; inset: 0;
            backface-visibility: hidden;
            border-radius: 50%; overflow: hidden;
            border: 3px solid #facc15;
            box-shadow: 0 0 20px rgba(250,204,21,0.3);
            transform: rotateY(180deg);
          ">
            <img src="logome.jpg" alt="Heads" style="width:100%;height:100%;object-fit:cover;" />
          </div>
        </div>
      </div>

      <div id="coinResult" class="text-center opacity-0 transition-opacity duration-500">
        <p class="text-3xl font-bold ${resultColor}">${result}!</p>
        <p class="text-slate-400 text-sm mt-1">${resultLabel}</p>
        <button id="useAsLogo"
          class="mt-3 text-xs px-4 py-1.5 rounded-full border border-slate-600 text-slate-400 hover:border-brand hover:text-brand transition-colors">
          Use this as logo
        </button>
      </div>

      <button id="coinClose" class="text-xs text-slate-500 hover:text-white transition-colors">
        Click anywhere to dismiss
      </button>
      <button id="coinAgain"
        class="text-xs px-5 py-2 rounded-full bg-brand text-dark font-semibold hover:brightness-110 transition">
        Again
      </button>
    </div>`;

  document.body.appendChild(modal);

  // Trigger spin on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById('coinInner').style.transform = `rotateY(${finalAngle}deg)`;
    });
  });

  // Reveal result after animation
  setTimeout(() => {
    const resultEl = document.getElementById('coinResult');
    const labelEl = document.getElementById('coinLabel');
    if (resultEl) resultEl.classList.replace('opacity-0', 'opacity-100');
    if (labelEl) labelEl.innerHTML = '<span class="text-red-500 font-bold">Warning!</span> No gambling<br/>RESULT:';

    // Wire up "Use this as logo" button
    const useBtn = document.getElementById('useAsLogo');
    if (useBtn) {
      useBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('img[src="logo.png"], img[src="logome.jpg"]').forEach(img => {
          img.src = resultImg;
        });
        modal.remove();
      });
    }

    // Wire up "Again" button
    const againBtn = document.getElementById('coinAgain');
    if (againBtn) {
      againBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.remove();
        tossCoin();
      });
    }
  }, 1500);

  // Dismiss on click (but not on the "use as logo" or "again" buttons)
  modal.addEventListener('click', (e) => {
    if (e.target.id !== 'useAsLogo' && e.target.id !== 'coinAgain') modal.remove();
  });
}

function initCommandLine() {
  const hiddenIcon = document.getElementById('hiddenIcon');
  const commandLine = document.getElementById('commandLine');
  const commandInput = document.getElementById('commandInput');
  const errorBubble = document.getElementById('errorBubble');
  const helpBubble = document.getElementById('helpBubble');

  // Command history
  let commandHistory = JSON.parse(localStorage.getItem('commandHistory') || '[]');
  let historyIndex = -1;
  let helpIndex = -1;
  const helpCommandElements = () => helpBubble.querySelectorAll('[data-cmd]');

  // Highlight command in help
  const updateHelpHighlight = () => {
    const elements = helpCommandElements();
    elements.forEach((el, idx) => {
      if (idx === helpIndex) {
        el.classList.add('bg-slate-700');
      } else {
        el.classList.remove('bg-slate-700');
      }
    });
  };

  // Fill command input
  const fillCommand = (cmd) => {
    commandInput.value = cmd;
    commandInput.focus();
  };

  hiddenIcon.addEventListener('click', () => {
    hiddenIcon.classList.add('hidden');
    commandLine.classList.remove('hidden');
    commandInput.focus();
  });

  // Add click listeners to help command items
  helpBubble.addEventListener('click', (e) => {
    const cmdEl = e.target.closest('[data-cmd]');
    if (cmdEl) {
      fillCommand(cmdEl.dataset.cmd);
    }
  });

  commandInput.addEventListener('keydown', async (e) => {
    const elements = helpCommandElements();
    const isHelpVisible = !helpBubble.classList.contains('hidden');

    if (isHelpVisible && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      if (e.key === 'ArrowUp') {
        helpIndex = helpIndex > 0 ? helpIndex - 1 : elements.length - 1;
      } else {
        helpIndex = helpIndex < elements.length - 1 ? helpIndex + 1 : 0;
      }
      updateHelpHighlight();
      return;
    }

    if (isHelpVisible && e.key === 'Enter' && helpIndex >= 0) {
      e.preventDefault();
      fillCommand(elements[helpIndex].dataset.cmd);
      return;
    }

    if (e.key === 'Enter') {
      const command = commandInput.value.trim().toLowerCase();
      
      if (command) {
        // Add to history if not duplicate of last
        if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command) {
          commandHistory.push(command);
          localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
        }
        historyIndex = commandHistory.length;
      }
      
      if (command === 'reset icon') {
        // Reset reaction counters
        if (supabaseClient) {
          try {
            await supabaseClient.from('reactions').delete().neq('id', 0);
          } catch (err) {
            console.error('Error resetting reactions in Supabase:', err);
          }
        }
        // Reset localStorage
        const reactionTypes = ['like', 'heart', 'laugh', 'surprise', 'sad', 'angry', 'dislike'];
        reactionTypes.forEach(type => localStorage.removeItem(`${type}Count`));
        localStorage.removeItem('currentReaction');
        if (globalMeta) {
          await buildFooter(globalMeta);
        }
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'reset visitor') {
        // Reset visitor stats
        if (supabaseClient) {
          try {
            await supabaseClient.from('visitors').delete().neq('id', 0);
          } catch (err) {
            console.error('Error resetting visitors in Supabase:', err);
          }
        }
        localStorage.removeItem('visitorStats');
        deleteCookie('visited');
        console.log('Visitor cookie and stats reset');
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'stat full visitor') {
        // Display visitor stats modal
        await displayVisitorStats();
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'show me') {
        // Change logo to logome.jpg
        const logoElements = document.querySelectorAll('img[src="logo.png"]');
        logoElements.forEach(img => img.src = 'logome.jpg');
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'show you') {
        // Change logo back to logo.png
        const logoElements = document.querySelectorAll('img[src="logome.jpg"]');
        logoElements.forEach(img => img.src = 'logo.png');
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'toss coin') {
        // Show coin toss modal
        tossCoin();
        commandLine.classList.add('hidden');
        helpBubble.classList.add('hidden');
        helpBubble.classList.remove('flex');
        hiddenIcon.classList.remove('hidden');
        commandInput.value = '';
        helpIndex = -1;
      } else if (command === 'help') {
        // Toggle help bubble
        helpBubble.classList.toggle('hidden');
        if (!helpBubble.classList.contains('hidden')) {
          helpBubble.classList.add('flex');
          helpIndex = 0;
          updateHelpHighlight();
        } else {
          helpIndex = -1;
        }
        commandInput.value = '';
      } else {
        // Show error bubble
        errorBubble.classList.remove('hidden');
        setTimeout(() => {
          errorBubble.classList.add('hidden');
        }, 2000);
        commandInput.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        commandInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        commandInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        commandInput.value = '';
      }
    }
  });

  // Close command line/help when clicking outside
  document.addEventListener('click', (e) => {
    if (!commandLine.contains(e.target) && !hiddenIcon.contains(e.target) && !helpBubble.contains(e.target)) {
      commandLine.classList.add('hidden');
      helpBubble.classList.add('hidden');
      helpBubble.classList.remove('flex');
      hiddenIcon.classList.remove('hidden');
      commandInput.value = '';
      helpIndex = -1;
    }
  });
}

async function fetchReactionCounts() {
  if (!supabaseClient) {
    // Fallback to localStorage
    const reactionTypes = ['like', 'heart', 'laugh', 'surprise', 'sad', 'angry', 'dislike'];
    const counts = {};
    reactionTypes.forEach(type => {
      counts[type] = parseInt(localStorage.getItem(`${type}Count`) || '0');
    });
    return counts;
  }
  
  const { data, error } = await supabaseClient
    .from('reactions')
    .select('reaction_type');
  if (error) {
    console.error('Error fetching reactions:', error);
    // Fallback to localStorage if there's an error
    const reactionTypes = ['like', 'heart', 'laugh', 'surprise', 'sad', 'angry', 'dislike'];
    const counts = {};
    reactionTypes.forEach(type => {
      counts[type] = parseInt(localStorage.getItem(`${type}Count`) || '0');
    });
    return counts;
  }
  
  const counts = {};
  const reactionTypes = ['like', 'heart', 'laugh', 'surprise', 'sad', 'angry', 'dislike'];
  reactionTypes.forEach(type => counts[type] = 0);
  
  data.forEach(row => {
    counts[row.reaction_type] = (counts[row.reaction_type] || 0) + 1;
  });
  
  return counts;
}

async function fetchVisitorCount() {
  if (!supabaseClient) {
    // Fallback to localStorage
    const stats = JSON.parse(localStorage.getItem('visitorStats') || '[]');
    return stats.length;
  }
  
  const { data, error, count } = await supabaseClient
    .from('visitors')
    .select('*', { count: 'exact', head: true });
  
  if (error) {
    console.error('Error fetching visitor count:', error);
    // Fallback to localStorage if there's an error
    const stats = JSON.parse(localStorage.getItem('visitorStats') || '[]');
    return stats.length;
  }
  
  return count || 0;
}

async function handleReaction(newReaction) {
  const oldReaction = localStorage.getItem('currentReaction');

  if (!supabaseClient) {
    // Fallback to localStorage
    if (oldReaction === newReaction) {
      const oldCount = parseInt(localStorage.getItem(`${oldReaction}Count`) || '0');
      if (oldCount > 0) localStorage.setItem(`${oldReaction}Count`, oldCount - 1);
      localStorage.removeItem('currentReaction');
    } else {
      if (oldReaction) {
        const oldCount = parseInt(localStorage.getItem(`${oldReaction}Count`) || '0');
        if (oldCount > 0) localStorage.setItem(`${oldReaction}Count`, oldCount - 1);
      }
      if (newReaction) {
        const newCount = parseInt(localStorage.getItem(`${newReaction}Count`) || '0');
        localStorage.setItem(`${newReaction}Count`, newCount + 1);
        localStorage.setItem('currentReaction', newReaction);
      } else {
        localStorage.removeItem('currentReaction');
      }
    }
    if (globalMeta) buildFooter(globalMeta);
    return;
  }

  // If clicking the same reaction, remove it
  if (oldReaction === newReaction) {
    // Get the last reaction of this type to delete
    const { data: reactions } = await supabaseClient
      .from('reactions')
      .select('id')
      .eq('reaction_type', oldReaction)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (reactions && reactions.length > 0) {
      await supabaseClient.from('reactions').delete().eq('id', reactions[0].id);
    }
    
    localStorage.removeItem('currentReaction');
  } else {
    // Remove old reaction if exists
    if (oldReaction) {
      const { data: reactions } = await supabaseClient
        .from('reactions')
        .select('id')
        .eq('reaction_type', oldReaction)
        .order('created_at', { ascending: false })
        .limit(1);
      
      if (reactions && reactions.length > 0) {
        await supabaseClient.from('reactions').delete().eq('id', reactions[0].id);
      }
    }

    // Add new reaction if not null
    if (newReaction) {
      await supabaseClient.from('reactions').insert({ reaction_type: newReaction });
      localStorage.setItem('currentReaction', newReaction);
    } else {
      localStorage.removeItem('currentReaction');
    }
  }

  // Re-render footer to update counts
  if (globalMeta) {
    buildFooter(globalMeta);
  }
}

// --- Visitor Tracking ---
function parseUserAgent() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let deviceType = 'Unknown';
  let os = 'Unknown';

  // Detect Browser (order matters - check specific ones first)
  if (ua.includes('Firefox')) {
    browser = 'Firefox';
  } else if (ua.includes('Edg')) {
    browser = 'Edge';
  } else if (ua.includes('Opera') || ua.includes('OPR')) {
    browser = 'Opera';
  } else if (ua.includes('SamsungBrowser')) {
    browser = 'Samsung Internet';
  } else if (ua.includes('Chrome')) {
    browser = 'Chrome';
  } else if (ua.includes('Safari')) {
    browser = 'Safari';
  } else if (ua.includes('MSIE') || ua.includes('Trident')) {
    browser = 'Internet Explorer';
  }

  // Detect Device Type
  if (ua.includes('Mobile')) {
    deviceType = 'Mobile';
  } else if (ua.includes('Tablet')) {
    deviceType = 'Tablet';
  } else {
    deviceType = 'Desktop';
  }

  // Detect OS (order matters)
  if (ua.includes('Windows')) {
    os = 'Windows';
  } else if (ua.includes('Mac OS')) {
    os = 'macOS';
  } else if (ua.includes('Linux')) {
    os = 'Linux';
  } else if (ua.includes('Android')) {
    os = 'Android';
  } else if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
    os = 'iOS';
  }

  console.log('Parsed UA:', { browser, deviceType, os, ua: ua.substring(0, 100) });
  return { browser, deviceType, os };
}

async function trackVisitor() {
  console.log('trackVisitor() called!');
  const hasVisitedCookie = getCookie('visited');
  console.log('Visited cookie:', hasVisitedCookie);
  if (hasVisitedCookie) {
    console.log('Visitor already counted (cookie exists)');
    return;
  }

  const uaData = parseUserAgent();
  let visitData;

  try {
    // ipwho.is is HTTPS and free, no API key needed
    const ipRes = await fetch('https://ipwho.is/');
    const ipData = await ipRes.json();
    console.log('IP API response:', ipData);

    visitData = {
      timestamp: new Date().toISOString(),
      ip: ipData.ip || 'Unknown',
      isp: ipData.connection?.isp || 'Unknown',
      country: ipData.country || 'Unknown',
      region: ipData.region || 'Unknown',
      city: ipData.city || 'Unknown',
      browser: uaData.browser,
      device_type: uaData.deviceType,
      os: uaData.os
    };
  } catch (err) {
    console.error('Failed to fetch IP info:', err);
    visitData = {
      timestamp: new Date().toISOString(),
      ip: 'Unknown',
      isp: 'Unknown',
      country: 'Unknown',
      region: 'Unknown',
      city: 'Unknown',
      browser: uaData.browser,
      device_type: uaData.deviceType,
      os: uaData.os
    };
  }

  if (supabaseClient) {
    const { error } = await supabaseClient.from('visitors').insert(visitData);
    if (error) {
      console.error('Supabase insert failed:', error.message);
      const existingVisits = JSON.parse(localStorage.getItem('visitorStats') || '[]');
      existingVisits.push(visitData);
      localStorage.setItem('visitorStats', JSON.stringify(existingVisits));
    } else {
      console.log('Visitor tracked in Supabase successfully');
    }
  } else {
    const existingVisits = JSON.parse(localStorage.getItem('visitorStats') || '[]');
    existingVisits.push(visitData);
    localStorage.setItem('visitorStats', JSON.stringify(existingVisits));
  }

  setCookie('visited', 'true', 365);
}

async function displayVisitorStats() {
  let stats;
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('visitors').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching from Supabase, falling back to localStorage:', error);
        // Fallback to localStorage
        stats = JSON.parse(localStorage.getItem('visitorStats') || '[]');
      } else {
        stats = data.map(visit => ({ ...visit, timestamp: visit.created_at }));
      }
    } catch (err) {
      console.error('Error fetching visitors, falling back to localStorage:', err);
      stats = JSON.parse(localStorage.getItem('visitorStats') || '[]');
    }
  } else {
    // Fallback to localStorage
    stats = JSON.parse(localStorage.getItem('visitorStats') || '[]');
  }
  
  // Calculate aggregated stats
  const deviceCounts = {};
  const browserCounts = {};
  const ispCounts = {};
  
  stats.forEach(visit => {
    // Device Type
    deviceCounts[visit.device_type] = (deviceCounts[visit.device_type] || 0) + 1;
    // Browser
    browserCounts[visit.browser] = (browserCounts[visit.browser] || 0) + 1;
    // ISP
    ispCounts[visit.isp] = (ispCounts[visit.isp] || 0) + 1;
  });

  // Build modal HTML
  const modalId = 'visitorStatsModal';
  const modal = document.createElement('div');
  modal.id = modalId;
  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'bg-light dark:bg-dark rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-700';
  
  modalContent.innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-slate-900 dark:text-white text-2xl font-bold">Visitor Statistics</h2>
      <button id="closeStatsModal" class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-2xl">&times;</button>
    </div>
    
    <div class="space-y-4">
      <div>
        <h3 class="text-slate-800 dark:text-slate-200 font-semibold mb-2">Total Visits: ${stats.length}</h3>
      </div>
      
      <div class="bg-lightCard dark:bg-card rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <h4 class="text-slate-800 dark:text-slate-200 font-semibold mb-3">Device Types</h4>
        <ul class="text-slate-700 dark:text-slate-300 space-y-1">
          ${Object.entries(deviceCounts).map(([device, count]) => `<li>${device}: ${count} visit${count !== 1 ? 's' : ''}</li>`).join('')}
        </ul>
      </div>
      
      <div class="bg-lightCard dark:bg-card rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <h4 class="text-slate-800 dark:text-slate-200 font-semibold mb-3">Browsers</h4>
        <ul class="text-slate-700 dark:text-slate-300 space-y-1">
          ${Object.entries(browserCounts).map(([browser, count]) => `<li>${browser}: ${count} visit${count !== 1 ? 's' : ''}</li>`).join('')}
        </ul>
      </div>
      
      <div class="bg-lightCard dark:bg-card rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <h4 class="text-slate-800 dark:text-slate-200 font-semibold mb-3">ISPs</h4>
        <ul class="text-slate-700 dark:text-slate-300 space-y-1">
          ${Object.entries(ispCounts).map(([isp, count]) => `<li>${isp}: ${count} visit${count !== 1 ? 's' : ''}</li>`).join('')}
        </ul>
      </div>
      
      <div class="bg-lightCard dark:bg-card rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <h4 class="text-slate-800 dark:text-slate-200 font-semibold mb-3">All Visits</h4>
        <ul class="text-slate-700 dark:text-slate-300 space-y-2">
          ${stats.slice().reverse().map(visit => `
            <li class="border-b border-slate-200 dark:border-slate-700 pb-2">
              <div class="text-xs text-slate-500 dark:text-slate-400">${new Date(visit.timestamp || visit.created_at).toLocaleString()}</div>
              <div>${visit.device_type} · ${visit.browser} · ${visit.os}</div>
              <div class="text-xs">${visit.ip} · ${visit.isp} · ${visit.city}, ${visit.region}, ${visit.country}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close button
  document.getElementById('closeStatsModal').addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.remove();
  });

  // Close when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.remove();
    }
  });

  // Show modal
  modal.classList.remove('hidden');
}

// ─── Scroll animation (Intersection Observer) ────────────────────────────────
function initScrollReveal() {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }`;
  document.head.appendChild(style);

  document.querySelectorAll('section > div > *').forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Contact form feedback ───────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      btn.textContent = res.ok ? '✓ Message Sent!' : '✗ Try Again';
      if (res.ok) form.reset();
    } catch {
      btn.textContent = '✗ Network Error';
    }
    setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; }, 3000);
  });
}

// ─── Global variable to store meta data ───────────────────────────────────────
let globalMeta = null;

// ─── Main bootstrap ───────────────────────────────────────────────────────────
async function init() {
  try {
    const res  = await fetch('portfolio.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    globalMeta = data.meta;

    // Initialize Supabase if configured
    if (data.supabase && data.supabase.url && data.supabase.url !== "YOUR_SUPABASE_URL" && data.supabase.anon_key && data.supabase.anon_key !== "YOUR_SUPABASE_ANON_KEY") {
      supabaseClient = window.supabase.createClient(data.supabase.url, data.supabase.anon_key);
    } else {
      console.warn("Supabase not configured: falling back to localStorage");
    }
    buildNav(data.meta);

    document.getElementById('app').innerHTML = [
      buildHero(data.meta),
      buildAbout(data.about),
      buildSkills(data.skills),
      buildExperience(data.experience),
      buildProjects(data.projects),
      buildAwards(data.awards),
      buildCertifications(data.certifications),
      buildContact(data.contact, data.meta)
    ].join('');

    await buildFooter(data.meta);
    buildHiddenUI(data.hidden_ui);
    initScrollReveal();
    initContactForm();
    initCommandLine();
    
    // Track current visitor
    trackVisitor();

    document.title = `${data.meta.name} | Portfolio`;

  } catch (err) {
    document.getElementById('app').innerHTML = `
      <div class="min-h-screen flex items-center justify-center text-red-400 text-center">
        <div>
          <p class="text-2xl font-bold mb-2">Failed to load portfolio data</p>
          <p class="text-sm">${err.message}</p>
          <p class="text-xs text-slate-500 mt-2">Make sure portfolio.json is in the same directory.</p>
        </div>
      </div>`;
  }
}

document.addEventListener('DOMContentLoaded', init);
