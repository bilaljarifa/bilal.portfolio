import React from 'react';

const experiences = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Fiverr',
    period: '2023 – Present',
    type: 'Freelance',
    desc: 'Delivered 10+ client projects including web apps, REST APIs, and automation scripts. Maintained a top-rated profile with 5-star reviews.',
    tags: ['React', 'Node.js', 'Python', 'APIs'],
  },
  {
    role: 'Computer Engineering Student',
    company: 'UIR — Université Internationale de Rabat',
    period: '2024 – Present',
    type: 'Education',
    desc: 'Pursuing a Professional License in Computer Engineering. Coursework includes algorithms, databases, software engineering, and web development.',
    tags: ['Algorithms', 'Databases', 'Software Engineering'],
  },
  {
    role: 'Self-Taught Developer',
    company: 'Independent',
    period: '2022 – 2024',
    type: 'Learning',
    desc: 'Built a solid foundation through online courses, personal projects, and open-source contributions. Mastered React, Node.js, and Python.',
    tags: ['React', 'Node.js', 'Python', 'Self-Learning'],
  },
];

const typeColors = {
  Freelance: 'text-orange border-orange bg-orange/5',
  Education: 'text-blue-500 border-blue-500 bg-blue-500/5',
  Learning: 'text-green-500 border-green-500 bg-green-500/5',
};

const Experience = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">
        Background
      </div>
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight mb-16">
        Experience
      </h1>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group p-8 rounded-2xl border-[1.5px] border-border bg-cardBg hover:border-orange transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-space text-xl font-bold group-hover:text-orange transition-colors">
                  {exp.role}
                </h2>
                <p className="text-muted font-medium mt-1">{exp.company}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-bold ${typeColors[exp.type]}`}
                >
                  {exp.type}
                </span>
                <span className="text-sm text-muted font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-5">{exp.desc}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-border/50 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
