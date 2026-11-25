import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProjectBrief from '../components/ProjectBrief';
import { ouchenProject } from '../data/ouchenProject';
import ouchenStoreCover from '../assets/projects/ouchen-store.jpg';

const projects = [
  {
    id: 'ouchen-store',
    ...ouchenProject.en,
    tags: ['React', 'Vite', 'Tailwind CSS'],
    year: '2026',
    cover: ouchenStoreCover,
    demo: 'https://ri7.netlify.app/',
    link: 'https://github.com/bilaljarifa/parfume_store',
  },
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

function ProjectActions({ project, showBrief = false }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
      {showBrief && (
        <Link to={`/work?project=${project.id}`} className="rounded-md border border-border px-3 py-2 hover:border-orange">
          Project Brief
        </Link>
      )}
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-orange underline-offset-4 hover:underline">
        Live demo <span aria-hidden="true">↗</span>
      </a>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

const Work = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [searchParams] = useSearchParams();
  const selected = projects.find(({ id }) => id === searchParams.get('project'));

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  if (selected) {
    return (
      <article className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-12 md:pt-40">
        <Link to="/work" className="inline-block text-sm font-semibold text-muted underline-offset-4 hover:text-orange hover:underline">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <header className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <h1 className="font-space text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight tracking-tight">{selected.title}</h1>
          <ProjectActions project={selected} />
        </header>
        <div className="mt-7 grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <ProjectBrief heading="Project Brief" summary={selected.brief} points={selected.briefPoints} />
          <img src={selected.cover} alt={selected.imageAlt} className="aspect-[3/2] w-full rounded-2xl border border-border object-cover" />
        </div>
      </article>
    );
  }

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
        {filtered.map((project) => (
          <article
            key={project.title}
            className="group relative p-7 rounded-2xl border-[1.5px] border-border bg-cardBg hover:border-orange transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-muted tracking-widest uppercase">
                {project.year}
              </span>
              <span className="text-orange opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                ↗
              </span>
            </div>
            {project.cover && (
              <img
                src={project.cover}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
            )}
            <h2 className="font-space text-xl font-bold group-hover:text-orange transition-colors">
              {project.demo ? project.title : (
                <a href={project.link} className="after:absolute after:inset-0">{project.title}</a>
              )}
            </h2>
            <p className="text-muted text-sm leading-relaxed flex-1">{project.description ?? project.desc}</p>
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
            {project.demo && <ProjectActions project={project} showBrief />}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
