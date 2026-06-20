import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Home',       to: '/',           num: '01' },
  { name: 'About',      to: '/about',      num: '02' },
  { name: 'Skills',     to: '/skills',     num: '03' },
  { name: 'Work',       to: '/work',       num: '04' },
  { name: 'Experience', to: '/experience', num: '05' },
  { name: 'Contact',    to: '/contact',    num: '06' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
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
        className={`flex items-center justify-between w-full max-w-7xl px-6 py-4 rounded-[32px] transition-all duration-300 backdrop-blur-md border border-white/20 dark:border-white/10 ${
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
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
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
                    {link.name}
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
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <NavLink
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full border-[1.5px] border-text text-sm font-semibold text-text hover:bg-text hover:text-bg transition-colors duration-300"
          >
            Hire Me ↗
          </NavLink>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[88px] left-4 right-4 bg-cardBg backdrop-blur-xl border border-border rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${isActive ? 'text-orange' : 'text-text'}`
                  }
                >
                  {link.name}
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
            Hire Me ↗
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
