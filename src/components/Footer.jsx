import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import AnimatedCat from './AnimatedCat';
import { profileContact, profileCopy } from '../data/profile';

const Footer = ({ language = 'en' }) => {
  const copy = profileCopy[language];
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative pt-24 pb-6 px-6 overflow-visible transition-all duration-1000 ease-out bg-transparent ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Divider with Cat sitting on it */}
        <div className="relative">
          <hr className="border-t border-border" />
          <div className="absolute right-0 md:right-10 bottom-[-1px] pointer-events-none z-20">
            <AnimatedCat />
          </div>
        </div>

        {/* Bottom row — tight spacing */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4">
          <p className="text-xs text-muted">{copy.country}</p>

          <div className="flex items-center gap-5">
            {[
              { href: profileContact.github, icon: <FaGithub size={17} />, label: 'GitHub', external: true },
              { href: profileContact.linkedin, icon: <FaLinkedin size={17} />, label: 'LinkedIn', external: true },
              { href: `mailto:${profileContact.email}`, icon: <FaEnvelope size={17} />, label: copy.contact.email },
            ].map(({ href, icon, label, external }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-muted hover:text-orange transition-colors relative group p-1"
              >
                {icon}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
