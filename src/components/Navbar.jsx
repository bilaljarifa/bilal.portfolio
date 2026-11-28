import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ResumeLink from './ResumeLink';
import { ChevronDown, Globe, Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { id: 'home',       to: '/',           num: '01' },
  { id: 'about',      to: '/about',      num: '02' },
  { id: 'skills',     to: '/skills',     num: '03' },
  { id: 'work',       to: '/work',       num: '04' },
  { id: 'experience', to: '/experience', num: '05' },
  { id: 'contact',    to: '/contact',    num: '06' },
];

const Navbar = ({ copy, language, onLanguageChange, darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <div
        className={`flex items-center justify-between w-full max-w-7xl px-4 py-4 sm:px-6 rounded-[32px] transition-all duration-300 backdrop-blur-md border border-white/20 dark:border-white/10 ${
          isScrolled
            ? 'bg-navBg shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
            : 'bg-navBg/50 shadow-sm'
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="font-space text-xl font-bold text-text">
          Bila<span className="text-orange">l</span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-9">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 group py-2 ${
                    isActive ? 'text-orange' : 'text-text hover:text-orange'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {copy[link.id]}
                    <sup className="text-[10px] text-muted ml-1">{link.num}</sup>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-orange transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2 xl:gap-4">
          <label className="relative">
            <Globe aria-hidden="true" className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
            <select
              aria-label={copy.language}
              value={language}
              onChange={(event) => onLanguageChange(event.target.value)}
              className="appearance-none cursor-pointer rounded-full border border-border bg-bg py-2 pr-7 pl-8 text-xs font-semibold text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <option value="en" lang="en">English</option>
              <option value="fr" lang="fr">Français</option>
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
          </label>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text"
            aria-label={copy.theme}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <NavLink
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-4 xl:px-6 py-2.5 rounded-full border-[1.5px] border-text text-sm font-semibold text-text hover:bg-text hover:text-bg transition-colors duration-300 whitespace-nowrap"
          >
            {copy.hire} ↗
          </NavLink>

          <ResumeLink compact label={copy.downloadCv} />

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={copy.menu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[88px] left-4 right-4 bg-cardBg backdrop-blur-xl border border-border rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${isActive ? 'text-orange' : 'text-text'}`
                  }
                >
                  {copy[link.id]}
                  <sup className="text-xs text-muted ml-1">{link.num}</sup>
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 rounded-full bg-text text-bg font-semibold text-center"
          >
            {copy.hire} ↗
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
