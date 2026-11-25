import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const translations = {
  en: {
    heading: 'Projects at a glance',
    summary: 'My work spans online retail, school management, and academic platforms. Explore the project briefs, the technologies I used, and the available demos.',
    link: 'Explore projects',
  },
  fr: {
    heading: 'Mes projets en bref',
    summary: 'Mes projets couvrent le commerce en ligne, la gestion scolaire et le suivi doctoral. Découvrez mes réalisations, les technologies utilisées et les démos disponibles.',
    link: 'Voir les projets',
  },
};

export default function ProjectOverview({ language = 'en' }) {
  const copy = translations[language];

  return (
    <section id="projects" aria-labelledby="projects-overview-heading" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-14 md:px-12">
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-cardBg px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <h2 id="projects-overview-heading" className="font-space text-2xl font-bold tracking-tight sm:text-3xl">{copy.heading}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text/75 sm:text-base">{copy.summary}</p>
        </div>
        <Link
          to="/work"
          className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-bg px-4 text-sm font-semibold hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          {copy.link}
          <ArrowUpRight size={16} aria-hidden="true" className="text-orange" />
        </Link>
      </div>
    </section>
  );
}
