import React from 'react';

const About = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">About Me</div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight mb-8">
            Who Am I?
          </h1>
          <p className="text-lg leading-relaxed text-muted mb-5">
            I'm a{' '}
            <strong className="text-text">Full Stack Developer</strong> currently pursuing a
            Professional License in Computer Engineering at{' '}
            <strong className="text-text">UIR (Université Internationale de Rabat)</strong>.
          </p>
          <p className="text-lg leading-relaxed text-muted mb-5">
            I build end-to-end web applications — from sleek React frontends to robust Node.js
            and FastAPI backends. I also work as a freelancer on Fiverr, delivering quality
            software to clients worldwide.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            When I'm not coding, I'm into <strong className="text-text">football</strong> and
            exploring new technologies. I love turning complex problems into simple, beautiful
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            { num: '10+', desc: 'Projects Built' },
            { num: '3+', desc: 'Years of Learning' },
            { num: '6+', desc: 'Technologies Mastered' },
            { num: '⭐', desc: 'Fiverr Freelancer' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-7 border-[1.5px] border-border rounded-2xl bg-cardBg hover:border-orange transition-colors"
            >
              <div className="text-4xl font-black text-orange">{stat.num}</div>
              <div className="text-sm text-muted mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <h2 className="font-space text-2xl font-bold mb-10">My Journey</h2>
        <div className="flex flex-col gap-0">
          {[
            { year: '2022', title: 'Started coding', desc: 'Began learning HTML, CSS & JavaScript.' },
            { year: '2023', title: 'First Projects', desc: 'Built full-stack apps with React & Node.js. Started freelancing on Fiverr.' },
            { year: '2024', title: 'UIR University', desc: 'Enrolled in Computer Engineering at UIR. Deepened Python & FastAPI knowledge.' },
            { year: '2025', title: 'Growing Stack', desc: 'Expanded into Laravel, MongoDB & cloud deployments.' },
            { year: '2026', title: 'Now', desc: 'Open to internships, freelance projects, and full-time opportunities.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-orange bg-bg mt-1 group-hover:bg-orange transition-colors shrink-0" />
                {i < 4 && <div className="w-[2px] h-full bg-border mt-1" />}
              </div>
              <div className="pb-10">
                <span className="text-xs font-bold text-orange tracking-widest uppercase">{item.year}</span>
                <h3 className="font-space text-lg font-bold mt-1">{item.title}</h3>
                <p className="text-muted text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
