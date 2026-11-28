import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link, useSearchParams } from 'react-router-dom';
import ProjectBrief from '../components/ProjectBrief';
import ProjectGallery from '../components/ProjectGallery';
import TechnologyStack from '../components/TechnologyStack';
import { cvProjects } from '../data/cvProjects';
import studentManagerCover from '../assets/projects/student-manager.jpg';
import teacherGradebook from '../assets/projects/teacher-gradebook.png';
import adminReview from '../assets/projects/admin-review.png';
import studentReport from '../assets/projects/student-report.png';
import cvBuilderCover from '../assets/projects/cv-builder.jpg';
import ouchenStorefront from '../assets/projects/ouchen/storefront.webp';
import ouchenCatalog from '../assets/projects/ouchen/catalog.webp';
import chatDirectMessages from '../assets/projects/chatwithme/direct-messages.webp';
import chatDarkMode from '../assets/projects/chatwithme/dark-mode.webp';
import chatGroup from '../assets/projects/chatwithme/group-chat.webp';
import chatSignIn from '../assets/projects/chatwithme/sign-in.webp';
import chatInterests from '../assets/projects/chatwithme/interests.webp';
import chatFriendDiscovery from '../assets/projects/chatwithme/friend-discovery.webp';
import chatFriendRequests from '../assets/projects/chatwithme/friend-requests.webp';
import chatThemeSettings from '../assets/projects/chatwithme/theme-settings.webp';
import doctoralPortalCover from '../assets/projects/doctoral-portal.jpg';
import doctoralProfile from '../assets/projects/doctoral-profile.jpg';
import doctoralArticles from '../assets/projects/doctoral-articles.jpg';
import doctoralCommunications from '../assets/projects/doctoral-communications.jpg';
import doctoralReenrollment from '../assets/projects/doctoral-reenrollment.jpg';
import doctoralReceipt from '../assets/projects/doctoral-receipt.jpg';

const projects = [
  {
    id: 'ouchen-store',
    link: 'https://github.com/bilaljarifa/parfume_store',
    demo: 'https://ri7.netlify.app/',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    gallery: [
      { image: ouchenStorefront, caption: 'ouchenStorefront' },
      { image: ouchenCatalog, caption: 'ouchenCatalog' },
    ],
  },
  {
    id: 'chatwithme',
    link: 'https://github.com/bilaljarifa/Chat-app-Websites',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    gallery: [
      { image: chatDirectMessages, caption: 'chatDirectMessages' },
      { image: chatDarkMode, caption: 'chatDarkMode' },
      { image: chatGroup, caption: 'chatGroup' },
      { image: chatSignIn, caption: 'chatSignIn' },
      { image: chatInterests, caption: 'chatInterests' },
      { image: chatFriendDiscovery, caption: 'chatFriendDiscovery' },
      { image: chatFriendRequests, caption: 'chatFriendRequests' },
      { image: chatThemeSettings, caption: 'chatThemeSettings' },
    ],
  },
  {
    id: 'student-manager',
    cover: studentManagerCover,
    link: 'https://github.com/bilaljarifa/Student-Manager-js',
    demo: 'https://studentmanager01.great-site.net/login.php',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'PHP', 'MySQL'],
    gallery: [
      { image: studentManagerCover, caption: 'signIn' },
      { image: teacherGradebook, caption: 'gradebook' },
      { image: adminReview, caption: 'review' },
      { image: studentReport, caption: 'report' },
    ],
  },
  {
    id: 'doctoral-portal',
    cover: doctoralPortalCover,
    link: 'https://github.com/bilaljarifa/plateforme_doctorale',
    stack: ['PHP', 'Laravel', 'Livewire', 'MySQL'],
    gallery: [
      { image: doctoralPortalCover, caption: 'doctoralLogin' },
      { image: doctoralProfile, caption: 'doctoralProfile' },
      { image: doctoralArticles, caption: 'doctoralArticles' },
      { image: doctoralCommunications, caption: 'doctoralCommunications' },
      { image: doctoralReenrollment, caption: 'doctoralReenrollment' },
      { image: doctoralReceipt, caption: 'doctoralReceipt' },
    ],
  },
  {
    id: 'optiport',
    link: cvProjects.optiport.link,
    stack: cvProjects.optiport.stack,
  },
  {
    id: 'transmanage',
    link: cvProjects.transmanage.link,
    stack: cvProjects.transmanage.stack,
  },
  {
    id: 'cv-builder',
    cover: cvBuilderCover,
    link: 'https://github.com/bilaljarifa/cv-builder',
    stack: ['PHP', 'MySQL'],
  },
];

const ProjectLinks = ({ project, demoLabel, sourceLabel, title }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2 text-sm font-semibold hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
      >
        {demoLabel}<span className="sr-only"> · {title}</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    )}
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold underline decoration-border underline-offset-4 hover:decoration-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
    >
      <FaGithub size={16} aria-hidden="true" />
      {sourceLabel}<span className="sr-only"> · {title}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  </div>
);

const Work = ({ copy }) => {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('project');
  const selected = projects.find(({ id }) => id === selectedId) ?? projects[0];
  const { title, brief, briefPoints, demoLabel = copy.viewDemo, sourceLabel = copy.viewSource } = copy.projects[selected.id];
  const isOptiport = selected.id === 'optiport';
  const projectImages = selected.gallery ?? (selected.cover ? [{ image: selected.cover, caption: 'illustration' }] : []);
  const imageGallery = projectImages.length ? [{
    layout: selected.gallery ? 'screenshots' : 'cover',
    items: projectImages.map(({ image, caption }) => ({
      image,
      caption: copy.previews[caption],
    })),
  }] : null;
  const gallery = isOptiport ? copy.optiportGallery : imageGallery;
  const galleryHeading = isOptiport ? copy.optiportHeading : selected.gallery ? copy.galleryHeading : copy.previewHeading;

  return (
    <section className="mx-auto grid max-w-7xl items-start gap-7 px-6 pt-28 pb-20 md:px-12 md:pt-36 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[14rem_minmax(0,1fr)]">
      <nav
        aria-labelledby="project-list-heading"
        className="rounded-2xl border border-border bg-cardBg p-4 lg:sticky lg:top-28"
      >
        <h2 id="project-list-heading" className="mb-3 px-2 font-space text-lg font-bold">{copy.heading}</h2>
        <ul role="list" className="flex flex-wrap gap-1.5 lg:flex-col">
          {projects.map(({ id }) => (
            <li key={id}>
              <Link
                to={{ pathname: '/work', search: `?project=${id}` }}
                aria-current={id === selected.id ? 'page' : undefined}
                className="block rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-text/75 hover:bg-bg hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange aria-[current=page]:border-orange/35 aria-[current=page]:bg-bg aria-[current=page]:text-text"
              >
                {copy.projects[id].title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <article className="min-w-0">
        <header className="border-b border-border pb-7">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            <h1 aria-live="polite" className="font-space text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight tracking-tight">
              {title}
            </h1>
            <ProjectLinks project={selected} demoLabel={demoLabel} sourceLabel={sourceLabel} title={title} />
          </div>
          <TechnologyStack className="mt-4" technologies={selected.stack} label={copy.technologies} />
          <ProjectBrief className="mt-7" heading={copy.briefHeading} summary={brief} points={briefPoints} />
        </header>

        {gallery && (
          <ProjectGallery
            key={selected.id}
            className="mt-7"
            heading={galleryHeading}
            groups={gallery}
            labels={copy}
            overview={isOptiport ? copy.optiportOverview : undefined}
          />
        )}
      </article>
    </section>
  );
};

export default Work;
