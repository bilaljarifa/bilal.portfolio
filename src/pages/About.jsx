import { Link } from 'react-router-dom';
import { profileCopy } from '../data/profile';

export default function About({ language = 'en' }) {
  const { about, languages } = profileCopy[language];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-12 md:pt-40">
      <h1 className="mb-6 font-space text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight tracking-tight">{about.heading}</h1>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-text/80">
        <p>{about.summary}</p>
        <p>{about.work}</p>
        <Link to="/experience" className="inline-block rounded-sm text-sm font-semibold text-text underline decoration-orange underline-offset-4">
          {about.experienceLink}
        </Link>
      </div>
      <section className="mt-10 max-w-3xl" aria-labelledby="spoken-languages">
        <h2 id="spoken-languages" className="mb-4 font-space text-2xl font-bold">{about.languages}</h2>
        <dl className="grid gap-3 sm:grid-cols-3">
          {languages.map((name, index) => (
            <div key={name} className="rounded-xl border border-border bg-cardBg px-4 py-3">
              <dt className="font-semibold">{name}</dt>
              <dd className="mt-1 text-sm text-text/75">{about.proficiency[index]}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
