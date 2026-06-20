import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import AnimatedCat from './AnimatedCat';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => { if (footerRef.current) observer.unobserve(footerRef.current); };
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
          <p className="text-xs text-muted">Kénitra, Morocco 🇲🇦</p>

          <div className="flex items-center gap-5">
            {[
              { href: 'https://github.com/bilaljarifa', icon: <FaGithub size={17} />, label: 'GitHub', external: true },
              { href: '#', icon: <FaLinkedin size={17} />, label: 'LinkedIn' },
              { href: '#', icon: <FaXTwitter size={17} />, label: 'X / Twitter' },
              { href: 'mailto:bilal@email.com', icon: <FaEnvelope size={17} />, label: 'Email' },
            ].map(({ href, icon, label, external }) => (
              <a
                key={label}
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
