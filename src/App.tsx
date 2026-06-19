import { useState, useEffect } from 'react';
import AppAr from './AppAr';
import AppEn from './AppEn';
import './App.css';

export type PageType = 'docs' | 'pricing';

function App() {
  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'ar' || urlLang === 'en') return urlLang;

    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'ar' || savedLang === 'en') return savedLang;

    return 'en';
  });

  const [page, setPage] = useState<PageType>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlPage = params.get('page');
    if (urlPage === 'pricing' || urlPage === 'docs') return urlPage as PageType;

    const savedPage = sessionStorage.getItem('page');
    if (savedPage === 'pricing' || savedPage === 'docs') return savedPage as PageType;

    return 'docs';
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    sessionStorage.setItem('page', page);

    if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang, page]);

  const toggleLanguage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(prev => prev === 'ar' ? 'en' : 'ar');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 50);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (isTransitioning) {
    return <div style={{ minHeight: '100vh', background: 'var(--bg-color)' }}></div>;
  }

  return lang === 'ar'
    ? <AppAr currentLang={lang} onToggleLanguage={toggleLanguage} theme={theme} onToggleTheme={toggleTheme} page={page} onNavigate={setPage} />
    : <AppEn currentLang={lang} onToggleLanguage={toggleLanguage} theme={theme} onToggleTheme={toggleTheme} page={page} onNavigate={setPage} />;
}

export default App;
