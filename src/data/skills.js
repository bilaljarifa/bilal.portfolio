import {
  FaCode, FaCodeBranch, FaDatabase, FaLightbulb, FaPlug, FaScrewdriverWrench,
  FaUser, FaUsers, FaWindowMaximize,
} from 'react-icons/fa6';
import {
  SiCss, SiDocker, SiFastapi, SiGit, SiGithub, SiGnubash, SiHtml5, SiJavascript,
  SiLaravel, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs,
  SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiSqlite, SiTailwindcss,
  SiTypescript, SiVite,
} from 'react-icons/si';

export const skillGroups = [
  {
    category: 'languages',
    icon: FaCode,
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#bd8a00' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'SQL', icon: FaDatabase, color: '#4479a1' },
      { name: 'Bash', icon: SiGnubash },
    ],
  },
  {
    category: 'web',
    icon: FaWindowMaximize,
    skills: [
      { name: 'React', icon: SiReact, color: '#0891b2' },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Laravel', icon: SiLaravel, color: '#ef4444' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss, color: '#663399' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0891b2' },
    ],
  },
  {
    category: 'databases',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'SQLite', icon: SiSqlite, color: '#278cc0' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    category: 'tools',
    icon: FaScrewdriverWrench,
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Vite', icon: SiVite, color: '#8b5cf6' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    category: 'methods',
    icon: FaCodeBranch,
    skills: [
      { name: 'REST APIs', icon: FaPlug, color: '#2563eb' },
      { name: 'CI/CD', icon: FaCodeBranch },
      { name: 'Independent work', icon: FaUser },
      { name: 'Problem solving', icon: FaLightbulb },
      { name: 'Teamwork', icon: FaUsers },
    ],
  },
];
