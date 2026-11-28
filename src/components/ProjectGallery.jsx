import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

const galleryLayout = {
  campaigns: ['sm:grid-cols-3', 'aspect-[3/2]', 'object-cover'],
  products: ['grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', 'aspect-square', 'object-cover'],
  screenshots: ['sm:grid-cols-2', 'aspect-[4/3] p-3 xl:p-4', 'object-contain'],
  compactScreenshots: ['grid-cols-2 md:grid-cols-3 xl:grid-cols-4', 'aspect-[8/5] p-1.5', 'object-contain'],
  cover: ['max-w-3xl', 'aspect-[3/2]', 'object-contain'],
};

export default function ProjectGallery({ heading, groups, labels, overview, className }) {
  const headingId = useId();
  const descriptionId = useId();
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const items = groups.flatMap((group) => group.items);
  const active = items[activeIndex];

  useEffect(() => {
    if (active && !dialog.current.open) dialog.current.showModal();
  }, [active]);

  function openPreview(item, element) {
    trigger.current = { element, top: window.scrollY };
    setActiveIndex(items.indexOf(item));
  }

  function closePreview() {
    setActiveIndex(-1);
    const origin = trigger.current;
    trigger.current = null;
    if (origin) {
      origin.element.focus({ preventScroll: true });
      window.scrollTo({ top: origin.top, behavior: 'instant' });
    }
  }

  function movePreview(step) {
    setActiveIndex((index) => (index + step + items.length) % items.length);
  }

  function handleKeys(event) {
    if (items.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      movePreview(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId} className="mb-4 font-space text-xl font-bold">{heading}</h2>
      {overview && (
        <div className="mb-6 space-y-3">
          <p className="max-w-3xl text-sm leading-relaxed text-text/75">{overview.instructions}</p>
          <nav aria-label={overview.navigationLabel} className="flex flex-wrap gap-2">
            {groups.map(({ id, title }) => (
              <a key={id} href={`#${id}`} className="inline-flex min-h-9 items-center rounded-md border border-border bg-cardBg px-2.5 text-xs font-semibold hover:border-orange/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">
                {title}
              </a>
            ))}
          </nav>
        </div>
      )}
      <div className="space-y-7">
        {groups.map(({ id, title, layout, items: pictures }) => {
          const [grid, frame, fit] = galleryLayout[layout];
          const compact = layout === 'compactScreenshots';
          return (
            <div key={id ?? layout} id={id} className={id ? 'scroll-mt-28' : undefined}>
              {title && <h3 className="mb-3 font-space text-base font-semibold">{title}</h3>}
              <ul role="list" className={`grid gap-3 sm:gap-4 ${grid}`}>
                {pictures.map((item) => (
                  <li key={item.image} className="min-w-0">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={(event) => openPreview(item, event.currentTarget)}
                      className="group flex h-full w-full cursor-zoom-in flex-col overflow-hidden rounded-xl border border-border bg-cardBg text-left hover:border-orange/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                    >
                      <span className={`block w-full overflow-hidden ${frame}`}>
                        <img src={item.image} alt="" loading="lazy" decoding="async" className={`h-full w-full ${fit} motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.04]`} />
                      </span>
                      <span className={`flex w-full flex-1 items-start justify-between gap-2 border-t border-border bg-bg font-medium ${compact ? 'px-2 py-2 text-xs sm:text-sm' : 'px-3 py-2.5 text-sm'}`}>
                        <span>
                          {item.caption}
                          {item.description && !compact && (
                            <span className="mt-1 block font-normal leading-relaxed text-text/75">{item.description}</span>
                          )}
                        </span>
                        <Maximize2 size={15} className="mt-0.5 shrink-0 text-text/65 group-hover:text-orange" aria-hidden="true" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <dialog
        ref={dialog}
        aria-label={labels.previewHeading}
        aria-describedby={active?.description ? descriptionId : undefined}
        onClose={closePreview}
        onKeyDown={handleKeys}
        className="m-auto max-h-[94svh] w-[94vw] max-w-6xl overflow-y-auto rounded-xl border border-border bg-cardBg text-text backdrop:bg-black/75"
      >
        {active && (
          <>
            <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border p-3 sm:px-4">
              <h3 className="font-space text-base font-semibold" aria-live="polite">{active.caption}</h3>
              <div className="flex items-center gap-1">
                {items.length > 1 && (
                  <>
                    <button type="button" aria-label={labels.previousImage} onClick={() => movePreview(-1)} className="grid size-11 place-items-center rounded-md hover:bg-bg">
                      <ArrowLeft size={18} />
                    </button>
                    <span className="min-w-12 text-center text-sm tabular-nums text-text/65">{activeIndex + 1} / {items.length}</span>
                    <button type="button" aria-label={labels.nextImage} onClick={() => movePreview(1)} className="grid size-11 place-items-center rounded-md hover:bg-bg">
                      <ArrowRight size={18} />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => dialog.current.close()}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-bg px-3 text-sm font-semibold hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  <X size={17} aria-hidden="true" />
                  {labels.backToGallery}
                </button>
              </div>
            </header>
            {(active.description || overview) && (
              <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-border px-3 py-2.5 text-sm leading-relaxed text-text/75 sm:px-4">
                {active.description && <p id={descriptionId} className="max-w-3xl">{active.description}</p>}
                {overview && (
                  <a href={active.image} target="_blank" rel="noreferrer" className="font-semibold text-text underline decoration-border underline-offset-4 hover:decoration-orange">
                    {overview.fullImageLabel}
                  </a>
                )}
              </div>
            )}
            <img src={active.image} alt={active.caption} className="block max-h-[78svh] w-full object-contain" />
          </>
        )}
      </dialog>
    </section>
  );
}
