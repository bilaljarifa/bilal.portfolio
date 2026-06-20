import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'FastAPI (Python)', level: 78 },
      { name: 'Laravel (PHP)', level: 70 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    category: 'Data & Tools',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker (basics)', level: 55 },
    ],
  },
];

const techBadges = [
  'React', 'Node.js', 'Python', 'FastAPI', 'Laravel', 'MongoDB',
  'MySQL', 'Tailwind CSS', 'Git', 'REST APIs', 'Docker', 'Figma',
];

const Skills = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">
        What I Work With
      </div>
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight mb-16">
        My Skills
      </h1>

      {/* Skill bars */}
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-6">
              {group.category}
            </h2>
            <div className="flex flex-col gap-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full bg-orange transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech badges */}
      <div className="border-t border-border pt-12">
        <h2 className="font-space text-xl font-bold mb-8">Technologies I Use</h2>
        <div className="flex flex-wrap gap-3">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full border-[1.5px] border-border text-sm font-medium text-muted hover:border-orange hover:text-orange transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
