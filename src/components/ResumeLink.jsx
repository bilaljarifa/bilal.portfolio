import { Download } from 'lucide-react';

const fileName = 'Bilal_Jarifa.pdf';
const focusStyle = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange';

export default function ResumeLink({ label = 'Download CV', compact = false }) {
  const style = compact
    ? 'size-9 shrink-0 rounded-full text-text hover:bg-black/5 hover:text-orange dark:hover:bg-white/10 sm:size-10'
    : 'gap-2 whitespace-nowrap rounded-full border-[1.5px] border-border px-6 py-3 text-sm font-semibold text-text hover:border-orange hover:text-orange';

  return (
    <a
      href={`${import.meta.env.BASE_URL}${fileName}`}
      download={fileName}
      title={compact ? label : undefined}
      aria-label={compact ? label : undefined}
      className={`inline-flex items-center justify-center transition-colors ${style} ${focusStyle}`}
    >
      <Download size={compact ? 19 : 17} aria-hidden="true" />
      {!compact && label}
    </a>
  );
}
