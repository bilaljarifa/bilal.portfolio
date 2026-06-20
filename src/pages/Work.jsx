import React, { useState } from 'react';

const projects = [
  {
    title: 'AI Chat App',
    desc: 'A real-time chat application powered by AI. Built with React, Node.js, and WebSockets.',
    tags: ['React', 'Node.js', 'WebSockets', 'AI'],
    year: '2026',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce solution with product management, cart, and payment integration.',
    tags: ['Laravel', 'MySQL', 'React', 'Stripe'],
    year: '2025',
    link: '#',
  },
  {
    title: 'FastAPI ML Service',
    desc: 'A machine learning inference API built with FastAPI and Python, deployed on Docker.',
    tags: ['Python', 'FastAPI', 'Docker', 'ML'],
    year: '2025',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React, Vite, and Tailwind CSS with dark mode support.',
    tags: ['React', 'Tailwind', 'Vite'],
    year: '2026',
    link: '#',
  },
  {
    title: 'Task Management App',
    desc: 'A Kanban-style task manager with drag & drop, teams, and real-time sync.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    link: '#',
  },
  {
    title: 'Fiverr Freelance Projects',
    desc: 'Various client projects delivered on Fiverr — web apps, APIs, and automation scripts.',
    tags: ['Various', 'Freelance'],
    year: '2023–2026',
    link: '#',
  },
];

const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

const Work = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">
        Selected Work
      </div>
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight mb-12">
        Projects
      </h1>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full border-[1.5px] text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'border-orange text-orange bg-orange/5'
                : 'border-border text-muted hover:border-orange hover:text-orange'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="group p-7 rounded-2xl border-[1.5px] border-border bg-cardBg hover:border-orange transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-muted tracking-widest uppercase">
                {project.year}
              </span>
              <span className="text-orange opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                ↗
              </span>
            </div>
            <h2 className="font-space text-xl font-bold group-hover:text-orange transition-colors">
              {project.title}
            </h2>
            <p className="text-muted text-sm leading-relaxed flex-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-border/50 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
