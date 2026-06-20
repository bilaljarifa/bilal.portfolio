// ── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .about-card, .project-card, .skill-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.width = '56px';
    follower.style.height = '56px';
    follower.style.borderColor = '#f5c518';
    cursor.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.borderColor = '#4a6fff';
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

// ── Hero Canvas (particle network) ───────────────────────────────────────────
const canvas = document.getElementById('heroCanvas');
const ctx    = canvas.getContext('2d');
let particles = [];
const COUNT   = 80;

function resize() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x  = Math.random() * canvas.width;
    this.y  = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.r  = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(74,111,255,${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < COUNT; i++) particles.push(new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i+1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(74,111,255,${0.15 * (1 - d/120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// ── 3D Card tilt on mousemove ─────────────────────────────────────────────────
const photoCardInner = document.querySelector('.photo-card-inner');
if (photoCardInner) {
  document.querySelector('.hero-visual')?.addEventListener('mousemove', e => {
    const rect = photoCardInner.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const rx = ((e.clientY - cy) / rect.height) * -14;
    const ry = ((e.clientX - cx) / rect.width)  *  14;
    photoCardInner.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  document.querySelector('.hero-visual')?.addEventListener('mouseleave', () => {
    photoCardInner.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  });
}

// ── Navbar ────────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  // active link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
  // scroll top button
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// ── Hamburger ─────────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Theme Toggle ──────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const root        = document.documentElement;
let isDark = localStorage.getItem('theme') !== 'light';
function applyTheme() {
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
applyTheme();
themeToggle?.addEventListener('click', () => { isDark = !isDark; applyTheme(); });

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), +delay);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter Animation ─────────────────────────────────────────────────────────
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el  = e.target;
      const end = +el.dataset.target;
      const dur = 1800;
      const start = Date.now();
      function update() {
        const t = Math.min((Date.now()-start)/dur, 1);
        el.textContent = Math.round(t * end);
        if (t < 1) requestAnimationFrame(update);
        else el.textContent = end;
      }
      update();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

// ── Scroll to Top ─────────────────────────────────────────────────────────────
document.getElementById('scrollTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Load Skills ───────────────────────────────────────────────────────────────
async function loadSkills() {
  try {
    const res  = await fetch('data/skills.json');
    const data = await res.json();
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = data.map((cat, i) => `
      <div class="skill-category reveal" data-delay="${i * 100}" style="opacity:0;transform:translateY(30px)">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${cat.icon}</div>
          <h3>${cat.category}</h3>
        </div>
        <div class="skill-items">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <i class="${s.icon}"></i>
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    // re-observe new elements
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } catch(e) { console.warn('skills.json not found, showing defaults'); }
}

// ── Load Projects ─────────────────────────────────────────────────────────────
async function loadProjects() {
  try {
    const res  = await fetch('data/projects.json');
    const data = await res.json();
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = data.map((p, i) => `
      <div class="project-card reveal" data-delay="${i * 120}" style="opacity:0;transform:translateY(30px)">
        <div class="project-banner" style="background:${p.bgColor || 'linear-gradient(135deg,#141d2e,#1a2540)'}">
          <span style="position:relative;z-index:1">${p.image}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-stack">
            ${p.techStack.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="project-link github">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${p.live}" target="_blank" class="project-link live">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } catch(e) { console.warn('projects.json not found'); }
}

// ── Contact Form ──────────────────────────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '✅ Message Sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});

// ── Init ──────────────────────────────────────────────────────────────────────
loadSkills();
loadProjects();
