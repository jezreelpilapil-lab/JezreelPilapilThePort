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

// ─── Utility ─────────────────────────────────────────────────────────────────
const icon = (name, extra = '') =>
  `<span class="text-brand ${extra}">${ICONS[name] ?? ''}</span>`;

const section = (id, content) => `
  <section id="${id}" class="py-20 px-4">
    <div class="max-w-5xl mx-auto">${content}</div>
  </section>`;

const sectionTitle = (text) =>
  `<h2 class="text-3xl font-bold text-white mb-2">${text}</h2>
   <div class="w-16 h-1 bg-brand rounded mb-10"></div>`;

// ─── Navbar builder ──────────────────────────────────────────────────────────
function buildNav(meta) {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Awards', 'Certifications', 'Contact'];
  document.getElementById('navbar').innerHTML = `
    <header class="fixed top-0 inset-x-0 z-50 bg-dark/90 backdrop-blur border-b border-slate-800">
      <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <img src="logo.png" alt="JAP Logo" class="w-8 h-8 rounded-full object-cover">
        <nav class="hidden md:flex gap-6 text-sm font-medium">
          ${links.map(l => `<a href="#${l.toLowerCase()}" class="hover:text-brand transition-colors">${l}</a>`).join('')}
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
        </div>
      </div>
    </header>`;
}

// ─── Hero builder ────────────────────────────────────────────────────────────
function buildHero(meta) {
  return `
    <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-16">
      <div class="max-w-3xl text-center">
        <img src="logo.png" alt="JAP Logo" class="w-32 h-32 mx-auto mb-6 rounded-full object-cover">
        <p class="text-brand text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</p>
        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">${meta.name}</h1>
        <p class="text-xl text-muted mb-8">${meta.tagline}</p>
        <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm text-slate-400">
          <span>${meta.location}</span>
          <span class="text-slate-600">|</span>
          <a href="mailto:${meta.email}" class="hover:text-brand transition-colors">${meta.email}</a>
          <span class="text-slate-600">|</span>
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
             class="bg-slate-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-600 transition">
            Download Full Resume
          </a>
          <a href="${meta.resume_short}" download
             class="border border-slate-600 text-slate-300 font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition">
            Download Short Resume
          </a>
        </div>
        <div class="flex justify-center gap-5 mt-8">
          <a href="${meta.linkedin}" target="_blank" rel="noopener" class="text-muted hover:text-brand transition-colors">${ICONS.linkedin}</a>
          <a href="${meta.github}"  target="_blank" rel="noopener" class="text-muted hover:text-brand transition-colors">${ICONS.github}</a>
          <a href="mailto:${meta.email}" class="text-muted hover:text-brand transition-colors">${ICONS.mail}</a>
        </div>
      </div>
    </section>`;
}

// ─── About builder ───────────────────────────────────────────────────────────
function buildAbout(about) {
  const paras = about.paragraphs.map(p => `<p class="text-slate-400 leading-relaxed mb-4">${p}</p>`).join('');
  return section('about', `
    ${sectionTitle(about.headline)}
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>${paras}</div>
      <div class="grid grid-cols-2 gap-4">
        ${[
          ['20+', 'Years Experience'],
          ['3',   'BPO Enterprises'],
          ['6+',  'Android & Web Apps'],
          ['∞',   'Problems Solved']
        ].map(([n, l]) => `
          <div class="bg-card rounded-xl p-5 text-center border border-slate-700">
            <div class="text-3xl font-bold text-brand">${n}</div>
            <div class="text-xs text-muted mt-1">${l}</div>
          </div>`).join('')}
      </div>
    </div>`);
}

// ─── Skills builder ──────────────────────────────────────────────────────────
function buildSkills(skills) {
  const cards = skills.map(s => `
    <div class="bg-card border border-slate-700 rounded-xl p-6">
      <div class="flex items-center gap-3 mb-4">
        ${icon(s.icon)}
        <h3 class="text-white font-semibold">${s.category}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${s.items.map(i => `<span class="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">${i}</span>`).join('')}
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
          <h4 class="text-white font-medium">${r.title}</h4>
          <span class="text-xs text-brand whitespace-nowrap">${r.period}</span>
        </div>
        <ul class="space-y-1">
          ${r.bullets.map(b => `<li class="text-slate-400 text-sm pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand before:rounded-full">${b}</li>`).join('')}
        </ul>
      </div>`).join('');
    return `
      <div class="bg-card border border-slate-700 rounded-xl p-6 mb-6 last:mb-0">
        <div class="flex flex-wrap justify-between items-start gap-2 mb-1">
          <h3 class="text-white font-bold text-lg">${job.company}</h3>
          <span class="text-xs text-muted whitespace-nowrap">${job.period}</span>
        </div>
        ${job.formerly ? `<p class="text-xs text-slate-500 mb-1">${job.formerly}</p>` : ''}
        <p class="text-xs text-muted mb-5">${job.location}</p>
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
    <div class="bg-card border border-slate-700 rounded-xl p-6 flex flex-col hover:border-brand transition-colors">
      <div class="flex items-center gap-3 mb-3">
        ${icon(p.icon, 'flex-shrink-0')}
        <h3 class="text-white font-semibold">${p.name}</h3>
      </div>
      <p class="text-slate-400 text-sm flex-1 mb-4">${p.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${p.tech.map(t => `<span class="text-xs bg-slate-800 text-brand px-2 py-0.5 rounded border border-brand/30">${t}</span>`).join('')}
      </div>
      ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="text-xs text-brand hover:underline">View on GitHub →</a>` : ''}
    </div>`;

  return section('projects', `
    ${sectionTitle('Projects & Case Studies')}
    <h3 class="text-white font-semibold mb-4 text-lg">📱 Android Applications</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      ${apps.map(card).join('')}
    </div>
    <h3 class="text-white font-semibold mb-4 text-lg">📋 Technical Case Studies</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cases.map(card).join('')}
    </div>`);
}

// ─── Certifications builder ──────────────────────────────────────────────────
function buildCertifications(certs) {
  const items = certs.map(c => `
    <div class="bg-card border border-slate-700 rounded-xl p-5 flex gap-4 items-start">
      <div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 text-brand font-bold text-lg">${c.year.slice(-2)}</div>
      <div>
        <p class="text-white font-medium">${c.name}</p>
        <p class="text-xs text-muted">${c.school} · ${c.location} · ${c.year}</p>
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
        <p class="text-slate-400 mb-8 leading-relaxed">${contact.cta}</p>
        <div class="space-y-4">
          <a href="mailto:${meta.email}" class="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
            ${ICONS.mail}<span>${meta.email}</span>
          </a>
          <a href="${meta.linkedin}" target="_blank" rel="noopener" class="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
            ${ICONS.linkedin}<span>LinkedIn Profile</span>
          </a>
          <a href="${meta.github}" target="_blank" rel="noopener" class="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
            ${ICONS.github}<span>GitHub</span>
          </a>
        </div>
      </div>
      <form action="${contact.formspree}" method="POST" class="space-y-4" id="contact-form">
        <input type="text" name="name" placeholder="Your Name" required
          class="w-full bg-card border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors" />
        <input type="email" name="email" placeholder="Your Email" required
          class="w-full bg-card border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors" />
        <input type="text" name="subject" placeholder="Subject"
          class="w-full bg-card border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors" />
        <textarea name="message" rows="4" placeholder="Your message..." required
          class="w-full bg-card border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors resize-none"></textarea>
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
    <div class="bg-card border border-yellow-500/30 rounded-xl p-5 flex gap-4 items-start">
      <div class="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xl">🏆</div>
      <div>
        <p class="text-white font-semibold">${a.name}</p>
        <p class="text-xs text-brand mb-2">${a.issuer} · ${a.date}</p>
        <p class="text-slate-400 text-sm">${a.description}</p>
      </div>
    </div>`).join('');
  return section('awards', `${sectionTitle('Awards & Recognition')}<div class="grid sm:grid-cols-2 gap-4">${items}</div>`);
}


function buildFooter(meta) {
  document.getElementById('footer').innerHTML = `
    <div class="border-t border-slate-800 py-8 px-4 text-center text-sm text-muted">
      <p>© ${new Date().getFullYear()} ${meta.name} · Built with HTML, Tailwind CSS & Vanilla JS</p>
      <p class="mt-1">${meta.location}</p>
    </div>`;
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

// ─── Main bootstrap ──────────────────────────────────────────────────────────
async function init() {
  try {
    const res  = await fetch('portfolio.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

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

    buildFooter(data.meta);
    initScrollReveal();
    initContactForm();

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
