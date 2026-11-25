import TechnologyStack from '../components/TechnologyStack';
import { education, professionalExperience, profileCopy } from '../data/profile';

function TimelineSection({ heading, items, language, stackLabel }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-space text-2xl font-bold">{heading}</h2>
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-border bg-cardBg p-5 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
              <div>
                <h3 className="font-space text-xl font-bold">{item.title[language]}</h3>
                {item.organization && (
                  <p className="mt-1 text-sm text-text/70">{item.organization} · {item.place[language]}</p>
                )}
              </div>
              <p className="text-sm font-semibold text-text/75">{item.period[language]}</p>
            </div>
            {item.summary && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text/80 sm:text-base">{item.summary[language]}</p>}
            {item.stack && <TechnologyStack className="mt-4" technologies={item.stack} label={stackLabel} />}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Experience({ language = 'en' }) {
  const copy = profileCopy[language].experience;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-12 md:pt-40">
      <h1 className="font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight">{copy.heading}</h1>
      <TimelineSection heading={copy.work} items={professionalExperience} language={language} stackLabel={copy.stack} />
      <TimelineSection heading={copy.education} items={education} language={language} />
    </div>
  );
}
