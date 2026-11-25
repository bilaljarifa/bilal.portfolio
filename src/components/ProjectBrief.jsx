export default function ProjectBrief({ heading, summary, points, className }) {
  return (
    <section className={className} aria-labelledby="project-brief-heading">
      <h2 id="project-brief-heading" className="font-space text-lg font-bold">{heading}</h2>
      <p className="mt-2 max-w-3xl text-base leading-relaxed text-text/80 sm:text-lg">{summary}</p>
      {points && (
        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-sm leading-relaxed text-text/80 marker:text-orange sm:text-base">
          {points.map(([skill, evidence]) => (
            <li key={skill}><strong className="text-text">{skill}.</strong>{' '}{evidence}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
