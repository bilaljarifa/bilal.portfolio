import {
  SiDocker, SiExpress, SiFastapi, SiJavascript, SiLaravel, SiLivewire,
  SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPython, SiReact,
  SiStripe, SiTailwindcss, SiTypescript, SiVite,
} from 'react-icons/si';

const technologyMarks = {
  Docker: [SiDocker, '#2496ed'],
  Express: [SiExpress, 'currentColor'],
  FastAPI: [SiFastapi, '#009688'],
  JavaScript: [SiJavascript, '#bd8a00'],
  Laravel: [SiLaravel, '#ef4444'],
  Livewire: [SiLivewire, '#e05a98'],
  MongoDB: [SiMongodb, '#47a248'],
  MySQL: [SiMysql, '#3585b6'],
  'Node.js': [SiNodedotjs, '#339933'],
  PHP: [SiPhp, '#777bb4'],
  Python: [SiPython, '#3776ab'],
  React: [SiReact, '#0891b2'],
  Stripe: [SiStripe, '#635bff'],
  'Tailwind CSS': [SiTailwindcss, '#0891b2'],
  TypeScript: [SiTypescript, '#3178c6'],
  Vite: [SiVite, '#8b5cf6'],
};

export default function TechnologyStack({ technologies, label = 'Technologies used', className = '' }) {
  return (
    <ul role="list" aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {technologies.map((name) => {
        const [Icon, color] = technologyMarks[name] ?? [];
        return (
          <li
            key={name}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-bg px-2 py-1 text-xs font-semibold text-text/85"
          >
            {Icon && <Icon size={15} color={color} aria-hidden="true" focusable="false" />}
            {name}
          </li>
        );
      })}
    </ul>
  );
}
