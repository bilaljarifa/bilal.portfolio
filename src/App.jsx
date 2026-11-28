import { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomeAbout from './components/HomeAbout';
import ProjectOverview from './components/ProjectOverview';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import en from './locales/en';
import fr from './locales/fr';

const translations = { en, fr };
const languageKey = 'portfolio-language';

function getSavedLanguage() {
  try {
    return window.localStorage.getItem(languageKey) === 'fr' ? 'fr' : 'en';
  } catch {
    return 'en';
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(getSavedLanguage);
  const copy = translations[language];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.title;
    try {
      window.localStorage.setItem(languageKey, language);
    } catch {
      // The language selector still works when storage is unavailable.
    }
  }, [language, copy.title]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar
          copy={copy.nav}
          language={language}
          onLanguageChange={setLanguage}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Home copy={copy.home} hire={copy.nav.hire} />
                  <ProjectOverview language={language} />
                  <HomeAbout copy={copy.about} />
                </>
              )}
            />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/skills" element={<Skills language={language} />} />
            <Route path="/work" element={<Work copy={copy.work} />} />
            <Route path="/experience" element={<Experience language={language} />} />
            <Route
              path="/contact"
              element={<Contact language={language} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
