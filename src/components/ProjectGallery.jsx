import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

const galleryLayout = {
  campaigns: ['sm:grid-cols-3', 'aspect-[3/2]', 'object-cover'],
  products: ['grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', 'aspect-square', 'object-cover'],
  screenshots: ['sm:grid-cols-2', 'aspect-[4/3] p-3 xl:p-4', 'object-contain'],
  cover: ['max-w-3xl', 'aspect-[3/2]', 'object-contain'],
};

export default function ProjectGallery({ heading, groups, labels, className }) {
  const headingId = useId();
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
      <div className="space-y-7">
        {groups.map(({ title, layout, items: pictures }) => {
          const [grid, frame, fit] = galleryLayout[layout];
          return (
            <div key={layout}>
              {title && <h3 className="mb-3 font-space text-base font-semibold">{title}</h3>}
              <ul role="list" className={`grid gap-3 sm:gap-4 ${grid}`}>
                {pictures.map((item) => (
                  <li key={item.image} className="min-w-0">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={(event) => openPreview(item, event.currentTarget)}
                      className="group block h-full w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-cardBg text-left hover:border-orange/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                    >
                      <span className={`block overflow-hidden ${frame}`}>
                        <img src={item.image} alt="" loading="lazy" decoding="async" className={`h-full w-full ${fit} motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.04]`} />
                      </span>
                      <span className="flex items-center justify-between gap-2 border-t border-border bg-bg px-3 py-2.5 text-sm font-medium">
                        {item.caption}
                        <Maximize2 size={15} className="shrink-0 text-text/65 group-hover:text-orange" aria-hidden="true" />
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
                <button type="button" aria-label={labels.backToGallery} onClick={() => dialog.current.close()} className="grid size-11 place-items-center rounded-md hover:bg-bg">
                  <X size={19} />
                </button>
              </div>
            </header>
            <img src={active.image} alt={active.caption} className="block max-h-[78svh] w-full object-contain" />
          </>
        )}
      </dialog>
    </section>
  );
}
