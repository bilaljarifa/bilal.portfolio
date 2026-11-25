import { useState } from 'react';
import { skillGroups } from '../data/skills';
import { profileCopy } from '../data/profile';
import './Skills.css';

const Skills = ({ language = 'en' }) => {
  const copy = profileCopy[language].skills;
  const [activeCategory, setActiveCategory] = useState(null);
  const visibleGroups = activeCategory
    ? skillGroups.filter(({ category }) => category === activeCategory)
    : skillGroups;

  return (
    <section className="px-6 pt-32 pb-16 md:px-12 md:pt-40 max-w-7xl mx-auto">
      <h1 className="mb-8 font-space text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
        {copy.heading}
      </h1>

      <div className="grid items-start gap-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10">
        <div
          role="group"
          aria-label={copy.filter}
          className="flex flex-wrap gap-x-2 gap-y-1 lg:sticky lg:top-28 lg:grid"
        >
          {skillGroups.map(({ category }) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory((current) => current === category ? null : category)}
              aria-pressed={activeCategory === category}
              aria-controls="skill-groups"
              className="skill-filter cursor-pointer px-2.5 py-2.5 text-left text-sm font-medium text-text/75 lg:px-4"
            >
              {copy.categories[category]}
            </button>
          ))}
        </div>

        <div id="skill-groups" className="min-w-0 border-y border-border">
          <div key={activeCategory} className="divide-y divide-border">
            {visibleGroups.map(({ category, icon: GroupIcon, skills }, index) => (
              <section
                key={category}
                className="skill-group grid gap-3 py-5 sm:py-6 xl:grid-cols-[10.5rem_minmax(0,1fr)] xl:gap-6"
                style={{ '--skill-row-delay': `${index * 35}ms` }}
              >
                <h2 className="flex items-center gap-2 self-start font-space text-base font-bold xl:min-h-10">
                  <GroupIcon size={15} className="shrink-0 text-orange" aria-hidden="true" />
                  {copy.categories[category]}
                </h2>

                <ul role="list" className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 xl:grid-cols-4">
                  {skills.map(({ name, icon: SkillIcon, color }) => (
                    <li key={name} className="skill-item flex min-w-0 items-center gap-2 py-1 text-sm font-medium leading-tight">
                      <span
                        className="skill-icon flex size-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ '--skill-icon-color': color }}
                      >
                        <SkillIcon size={18} aria-hidden="true" />
                      </span>
                      <span>{copy.names[name] ?? name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
