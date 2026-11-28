const HomeAbout = ({ copy }) => (
  <section
    id="about-bilal"
    aria-labelledby="about-bilal-heading"
    className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 md:px-12"
  >
    <div className="border-t border-border pt-12 md:pt-16">
      <h2 id="about-bilal-heading" className="font-space text-[clamp(2rem,5vw,4rem)] font-bold leading-tight tracking-tight">
        {copy.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/75">{copy.summary}</p>
    </div>
  </section>
);

export default HomeAbout;
