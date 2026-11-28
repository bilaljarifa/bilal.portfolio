import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaLaravel } from 'react-icons/fa6';
import { SiFastapi, SiMongodb } from 'react-icons/si';
import profilePhoto from '../../images/profile.png';
import ResumeLink from '../components/ResumeLink';
import './Home.css';

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
  { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-[#FF2D20]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
];

const Hero = ({ copy, hire }) => {
  const navigate = useNavigate();
  const [paused, setPaused] = useState(false);

  const badges = technologies.map(({ name, icon: Icon, color }) => (
    <li
      key={name}
      className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-orange hover:bg-cardBg hover:text-text"
    >
      <Icon aria-hidden="true" className={`text-lg ${color} motion-safe:transition-transform motion-safe:group-hover:scale-110`} />
      {name}
    </li>
  ));

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-32 pb-12 md:px-12 md:pt-36 lg:grid-cols-[1fr_340px]">
      <div className="min-w-0">
        <h1 className="flex flex-col leading-none font-space text-[clamp(2.25rem,7.2vw,7.2rem)] font-bold tracking-tight">
          <span className="text-orange">
            {copy.headline[0]}
          </span>{' '}
          <span className="text-text -mt-1 sm:-mt-2">
            {copy.headline[1]}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-text/80">{copy.description}</p>

        <div className="mt-6 flex max-w-lg items-center gap-2">
          <div className="home-tech-window min-w-0 flex-1" data-paused={paused}>
            <div className="home-tech-track">
              <ul className="home-tech-list flex flex-wrap gap-3 py-1">
                {badges}
              </ul>
              <ul className="home-tech-list home-tech-copy hidden gap-3 py-1" aria-hidden="true">
                {badges}
              </ul>
            </div>
          </div>
          <button
            type="button"
            aria-label={paused ? copy.playTechnologies : copy.pauseTechnologies}
            onClick={() => setPaused((isPaused) => !isPaused)}
            className="hidden size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-bg text-muted hover:border-orange hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange motion-safe:inline-flex"
          >
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            to="/work"
            className="px-7 py-3 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange/90 transition-colors"
          >
            {copy.viewWork} ↗
          </Link>
          <button
            onClick={() => navigate('/contact')}
            className="px-7 py-3 rounded-full border-[1.5px] border-border text-sm font-semibold text-text hover:bg-text hover:text-bg transition-colors"
          >
            {hire}
          </button>
          <ResumeLink label={copy.downloadCv} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-6 md:mt-0 mt-8">
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-[2.5px] border-orange overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-out bg-card-bg">
          <img
            src={profilePhoto}
            alt="Bilal Jarifa"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-muted">{copy.greeting}</p>
          <h3 className="text-3xl font-bold text-orange mt-1">Bilal Jarifa.</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
