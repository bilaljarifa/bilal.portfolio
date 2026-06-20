import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaNodeJs, FaPython, FaLaravel } from 'react-icons/fa6';
import { SiFastapi, SiMongodb } from 'react-icons/si';
import profilePhoto from '../../images/profile.png';

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
  { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-[#009688]' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-[#FF2D20]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[88vh] px-6 md:px-12 pt-40 pb-20 grid md:grid-cols-[1fr_340px] items-center gap-12 max-w-7xl mx-auto">
      <div>
        <div className="flex flex-col leading-none">
          <span className="font-space text-[clamp(3.5rem,7vw,6.5rem)] font-bold text-orange tracking-tight">
            REACT /
          </span>
          <span className="font-space text-[clamp(3.5rem,7vw,6.5rem)] font-bold text-text tracking-tight">
            NODE.JS
          </span>
          <span className="font-space text-[clamp(3.5rem,7.5vw,7.2rem)] font-bold text-text tracking-tight -mt-2">
            FULL STACK
          </span>
          <span className="font-space text-[clamp(3.5rem,7.5vw,7.2rem)] font-bold text-text tracking-tight -mt-2">
            DEVELOPER
          </span>
        </div>

        <div className="mt-8 text-base text-muted leading-relaxed max-w-xl">
          <strong className="text-orange font-semibold">Full Stack Developer</strong> &amp;{' '}
          <strong className="text-orange font-semibold">Freelancer</strong> — building fast,
          clean web apps with modern tech. Student at UIR · Fiverr freelancer · Open to
          opportunities.
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-[1.5px] border-border text-sm font-medium text-muted hover:text-text hover:border-orange hover:bg-card-bg transition-all duration-300 hover:-translate-y-0.5 cursor-default group"
              >
                <Icon className={`text-lg transition-transform ${tech.color} group-hover:scale-110 duration-300`} />
                {tech.name}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate('/work')}
            className="px-7 py-3 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange/90 transition-colors"
          >
            View My Work ↗
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-7 py-3 rounded-full border-[1.5px] border-border text-sm font-semibold text-text hover:bg-text hover:text-bg transition-colors"
          >
            Hire Me
          </button>
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
          <p className="text-sm text-muted">Hi! I Am</p>
          <h3 className="text-3xl font-bold text-orange mt-1">Bilal Jarifa.</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
