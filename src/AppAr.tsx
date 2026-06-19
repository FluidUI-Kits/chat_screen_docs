import { CodeWrapper } from './components/CodeWrapper';
import { Pricing } from './components/Pricing';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import './App.css';

interface AppLangProps { currentLang: 'ar' | 'en'; onToggleLanguage: () => void; theme?: 'light' | 'dark'; onToggleTheme?: () => void; page?: 'docs' | 'pricing'; onNavigate?: (page: 'docs' | 'pricing') => void; }
export default function AppAr({ currentLang, onToggleLanguage, theme, onToggleTheme, page = 'docs', onNavigate }: AppLangProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string, type: 'image' | 'video' } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 'install', 'quick-start', 'functions-index',
        'basic-variables', 'basic-settings',
        'chat-controller', 'chat-config', 'localization', 'chat-theme',
        'ui-integration',
        'messaging-functions', 'message-operations', 'fetching-messages',
        'pinned-messages', 'reactions-emoji',
        'custom-download', 'builtin-download',
        'model-user', 'model-message', 'model-attachment', 'model-read-receipt', 'model-reaction', 'model-reaction-entry',
        'developer-info', 'suggestions'
      ];

      let currentSection = sections[0];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);
  return (
    <div className="app-wrapper" dir="rtl">
      <TopBar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} currentLang={currentLang} onToggleLanguage={onToggleLanguage} theme={theme} onToggleTheme={onToggleTheme} onNavigate={onNavigate} page={page} />

      {page === 'pricing' ? (
        <div style={{ paddingTop: '60px' }}>
          <Pricing onNavigate={onNavigate || (() => { })} lang="ar" />
        </div>
      ) : (
        <div className="main-container">
          <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
          <Sidebar activeId={activeSection} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} lang="ar" />

          <main className="content-wrapper">
            <div className="content-inner animate-fade-in" style={{ paddingBottom: '2rem' }}>

              {/* Hero Section */}
              <div id="hero" style={{ marginBottom: '6rem', textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>توثيق حزمة Chat Screen</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                  الحل الأمثل لدمج واجهات المحادثة الاحترافية في تطبيقات فلاتر. مرونة مطلقة، أداء فائق، وتخصيص لا حدود له.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                  <button className="btn" style={{ background: '#a855f7', color: 'white', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)' }} onClick={() => onNavigate?.('pricing')}>
                    صفحة الشراء
                  </button>
                </div>

                {/* Platform Support - Official Style */}
                <div style={{ marginTop: '4rem', maxWidth: '600px', margin: '4rem auto 0', textAlign: 'right', animation: 'fadeInUp 0.8s ease-out' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                    المنصات المدعومة (Platform Support)
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Android</span>
                      <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        مدعوم 100%
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>iOS</span>
                      <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        مدعوم 100%
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Desktop (Win / macOS / Linux)</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        قيد المعالجة / قريباً
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Web</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        قيد المعالجة / قريباً
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Demo App Section */}
              <div id="demo-app" style={{ marginBottom: '6rem', background: 'var(--card-bg)', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #a855f7, #10b981)' }}></div>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>جرب حزمة المحادثة الآن!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
                  قمنا بتوفير تطبيق تجريبي متكامل لكي تتمكن من اختبار جميع الميزات، التخصيصات، وسرعة الأداء قبل دمج الحزمة في مشروعك. حمله الآن من متجر بلاي أو مباشرة من الكيت هب.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {/* Google Play */}
                  <div style={{ position: 'relative' }} title="قريباً">
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--accent-primary)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', zIndex: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>قريباً</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#000000', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 'bold', border: '1px solid #333', opacity: 0.5, cursor: 'not-allowed' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.505-1.328V3.142c0-.528.2-.1.504-1.328zM14.772 11.02l4.981-2.88c1.666-.964 1.666-2.529 0-3.493L5.342 1.344a1.86 1.86 0 0 0-.82-.249l10.25 9.925zM14.772 12.98L4.522 22.905a1.86 1.86 0 0 1 .82-.249l14.411-8.303c1.666-.964 1.666-2.529 0-3.493l-4.981 2.88zM20.25 12l2.67-1.543a2 2 0 0 0 0-3.464l-2.67-1.543L16 12l4.25 6.55z" /></svg>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Get it on</div>
                        <div style={{ fontSize: '1.1rem', margin: 0, padding: 0, lineHeight: 1 }}>Google Play</div>
                      </div>
                    </div>
                  </div>

                  {/* GitHub APK */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', zIndex: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>متاح الآن</div>
                    <a href="https://github.com/FluidUI-Kits/chat_screen_docs/releases/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.8rem 1.5rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid var(--border-color)', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Download APK from</div>
                        <div style={{ fontSize: '1.1rem', margin: 0, padding: 0, lineHeight: 1 }}>GitHub Releases</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Overview & Gallery Section */}
              <div id="overview" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '3rem', fontSize: '1.5rem', fontWeight: 'bold' }}>معرض الميزات (Features Gallery)</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

                  {/* 0. theme_types.jpg (Full width) */}
                  <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({ src: 'assets/media/theme_types.jpg', type: 'image' })} >
                    <img src="assets/media/theme_types.jpg" alt="أنواع الثيمات" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>تخصيص الثيمات المتعددة (Themes)</div>
                  </div>

                  {/* 1. msg_types.jpg (Full width) */}
                  <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({ src: 'assets/media/msg_types.jpg', type: 'image' })} >
                    <img src="assets/media/msg_types.jpg" alt="أنواع الرسائل المتعددة" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>أنواع الرسائل المتعددة</div>
                  </div>

                  {/* 2. chat_types.jpg (Half width) */}
                  <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({ src: 'assets/media/chat_types.jpg', type: 'image' })} >
                    <img src="assets/media/chat_types.jpg" alt="أنواع المحادثات" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>أنواع المحادثات الفردية والجماعية</div>
                  </div>

                  {/* 3. reply_system.jpg (Half width) */}
                  <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({ src: 'assets/media/reply_system.jpg', type: 'image' })} >
                    <img src="assets/media/reply_system.jpg" alt="نظام الردود" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>نظام الردود على الرسائل</div>
                  </div>

                  {/* 4. share_menu.jpg (Full width) */}
                  <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({ src: 'assets/media/share_menu.jpg', type: 'image' })} >
                    <img src="assets/media/share_menu.jpg" alt="قائمة المشاركة" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>قائمة المرفقات والمشاركة</div>
                  </div>

                  {/* 5. pin_system.jpg (Half width) */}
                  <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({ src: 'assets/media/pin_system.jpg', type: 'image' })} >
                    <img src="assets/media/pin_system.jpg" alt="تثبيت الرسائل" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>نظام تثبيت الرسائل الهامة</div>
                  </div>

                  {/* 6. multiselect.jpg (Half width) */}
                  <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({ src: 'assets/media/multiselect.jpg', type: 'image' })} >
                    <img src="assets/media/multiselect.jpg" alt="التحديد المتعدد" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>نظام التحديد المتعدد للحذف والنسخ</div>
                  </div>

                </div>
              </div>
              {/* Core Features */}
              <div id="core-features" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>الميزات الأساسية (Core Features)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.8rem' }}>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>💬 دعم شامل للمحادثات</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>نظام متكامل يدعم المحادثات الفردية والجماعية بكل سلاسة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📎 تعدد أنواع الرسائل</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>دعم 8 أنواع: نص، صورة، فيديو، وسائط مجمعة، صوت، بصمة صوتية، خرائط، مستندات.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🎨 التخصيص المطلق</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>تحكم كامل بألوان الواجهة، أحجام الخطوط، وتخصيص خلفية مستقلة لكل محادثة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🏷️ تخصيص الهوية</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>إمكانية تخصيص الاسم والأيقونة الخاصة بالمحادثات الفردية والجماعية.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🧩 تكامل متقدم (UI Integration)</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>دوال تمنحك الاحترافية لدمج وإضافة ميزاتك الخاصة داخل واجهة الدردشة بكل سهولة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📏 التباعد الذكي</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>نظام تباعد تلقائي بين الرسائل يتبع المعايير العالمية لتطبيقات المحادثة الحديثة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🌍 دعم اللغات والاتجاهات</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>توافق تام مع اللغتين العربية والإنجليزية، مع دعم كامل للاتجاهات (RTL/LTR).</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🕒 نظام إظهار وإخفاء وقت الظهور</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>عند التفعيل يعرض التوقيت الدقيق كـ 'قبل دقيقة'، وعند الإخفاء يعرض تقريبياً كـ 'آخر ظهور قريباً'.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>💬 نظام عمل ردود على الرسائل</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>نظام سلس للردود المتداخلة على الرسائل داخل المحادثة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>✏️ نظام عمل تعديل على الرسائل</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>إمكانية تعديل الرسائل المرسلة مسبقاً بكل سهولة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🗑️ الحذف مع شريط التراجع</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>حذف الرسائل بأمان مع توفير شريط تراجع (Undo Snackbar) لتدارك الأخطاء العفوية.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>☑️ التحديد المتعدد</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>تحديد عدة رسائل في وقت واحد للنسخ، الحذف، أو إعادة التوجيه بضغطة زر.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📥 إدارة الوسائط الذكية</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>تحميل ذكي وسريع يمنحك تحكماً كاملاً في إدارة ملفات كل محادثة على حدة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🖼️ عارض وسائط متقدم</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>مشغل وعارض مدمج وسريع يدعم تقريباً جميع أنواع الملفات والوسائط بدقة عالية.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🎙️ البصمة الصوتية</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>نظام متكامل ومدمج لتسجيل، عرض، وإرسال الرسائل الصوتية باحترافية وسرعة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📸 كاميرا مدمجة</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>التقاط سريع للصور والفيديوهات عبر مشغل كاميرا مدمج داخل شاشة المحادثة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📍 مشاركة الموقع</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>إرسال فوري للموقع الجغرافي، سواء كان الموقع الحالي أو موقع يتم تحديده يدوياً.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>❤️ التفاعلات (Reactions)</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>تفاعلات سلسة وسريعة على الرسائل عبر الضغط المطول أو النقر المزدوج.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📌 تثبيت الرسائل</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>نظام قوي لتثبيت الرسائل الهامة في أعلى المحادثة للرجوع إليها بسرعة وسهولة.</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🔍 الانتقال السريع للرسالة</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>القدرة على الانتقال الفوري لرسالة معينة وتحديدها ضمن سياق المحادثة وتاريخها.</p>
                  </div>
                </div>
              </div>



              {/* Installation */}
              <div id="install" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>التثبيت والتهيئة (Installation & Setup)</h2>
                <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>التحميل من Github</h3>
                <CodeWrapper><pre>
                  <code>
                    <span style={{ color: '#e06c75' }}>dependencies</span>:<br />
                    <span style={{ color: '#98c379' }}>  chat_screen</span>:<br />
                    <span style={{ color: '#e06c75' }}>    git</span>:<br />
                    <span style={{ color: '#d19a66' }}>      url</span>: https://github.com/your-repo/chat_screen.git<br />
                    <span style={{ color: '#d19a66' }}>      ref</span>: main
                  </code>
                </pre></CodeWrapper>
              </div>

              {/* Quick Start */}
              <div id="quick-start" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>البداية السريعة (Quick Start)</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.4' }}>لبدء استخدام المحادثة، يمكنك ببساطة استدعاء الويدجت (Widget) <code>ChatScreen</code> وتمرير المتغيرات الأساسية كما في المثال التالي:</p>
                <CodeWrapper><pre>
                  <code>{`import 'package:chat_screen/chat_screen.dart';

ChatScreen(
  currentUser: ChatUser(
    id: "me",
    name: "أنا",
  ),
  otherPeople: [
    ChatUser(
      id: "other",
      name: "أحمد",
    ),
  ],
  initialMessages: [],
)`}</code>
                </pre></CodeWrapper>
              </div>

              {/* Functions Index */}
              <div id="functions-index" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>فهرست الدوال والمتغيرات (Quick Reference)</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>يمكنك تصفح الفهرس أدناه للوصول السريع إلى الأقسام المختلفة في هذه المستندات.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <a href="#basic-settings" onClick={(e) => { e.preventDefault(); document.getElementById('basic-settings')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>⚙️</span> الإعدادات الأساسية
                  </a>
                  <a href="#chat-config" onClick={(e) => { e.preventDefault(); document.getElementById('chat-config')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>🛠</span> إعدادات الواجهة (ChatConfig)
                  </a>
                  <a href="#chat-theme" onClick={(e) => { e.preventDefault(); document.getElementById('chat-theme')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎨</span> الألوان والتصميم (ChatTheme)
                  </a>
                  <a href="#messaging-functions" onClick={(e) => { e.preventDefault(); document.getElementById('messaging-functions')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>💬</span> دوال إرسال واستقبال الرسائل
                  </a>
                  <a href="#builtin-download" onClick={(e) => { e.preventDefault(); document.getElementById('builtin-download')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>📥</span> دوال التحميل المدمجة
                  </a>
                  <a href="#model-user" onClick={(e) => { e.preventDefault(); document.getElementById('model-user')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: '1.5rem' }}>📦</span> النماذج (Models)
                  </a>
                </div>
              </div>

              {/* 2. Basic Variables */}
              <div id="basic-variables" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>المتغيرات الأساسية للمحادثة (Basic Variables)</h2>
                <p>هذه هي أهم المتغيرات التي تحتاج لتعريفها عند إنشاء المحادثة لتخصيص الواجهة والبيانات الأساسية.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>title</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>اسم المحادثة (اسم للمحادثة الشخصية مخصص أو اسم المجموعة). يظهر بشكل بارز في منتصف الشريط العلوي (App Bar) للمحادثة.</p>
                  </div>

                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatIconImageUrl</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>الرابط المباشر (URL) لصورة المحادثة الجماعية او الصورة المخصصة للمحادثة الشخصية. تُعرض هذه الصورة بشكل دائري في الشريط العلوي بجانب الاسم.</p>
                  </div>

                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatBackgroundImageUrl</code> & <code>backgroundImageLocalPath</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>صوره الخلفية المخصصة الخاصة بهذه المحادثة:</p>
                    <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                      <li><code>chatBackgroundImageUrl</code>: رابط الصورة من الإنترنت.</li>
                      <li><code>backgroundImageLocalPath</code>: المسار المحلي للصورة في جهاز المستخدم (يتم اعداده تلقائي باستخدام دوال التحميل المدمجة او الدوال التي يقوم المستخدم بأعدادهن).</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>appPackageName</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>اسم حزمة التطبيق (مثال: com.mycompany.myapp). يُستخدم هذا المتغير لضمان عمل خدمة الخرائط المفتوحة (OpenStreetMap / Location Picker) بسلاسة وبدون التعرض للحظر من سيرفرات الخرائط.</p>
                  </div>

                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>currentUser</code> & <code>otherPeople</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>هوية أطراف المحادثة:</p>
                    <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                      <li><code>currentUser</code>: كائن من نوع <code>ChatUser</code> يمثلك أنت (المستخدم الحالي للتطبيق).</li>
                      <li><code>otherPeople</code>: قائمة (List) من نوع <code>ChatUser</code> تمثل الأشخاص الآخرين. في المحادثة الفردية تحتوي شخصاً واحداً، وفي المجموعات تحتوي باقي الأعضاء.</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>initialMessages</code> (الرسائل الابتدائية)</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>الرسائل التي تعرض عند الدخول للمحادثة. يفضل ان تكون بين 20 الى 80 رسالة لضمان تجربة سلسة. بعد الدخول للمحادثة تكون هناك دوال Stream التي تسمح لك باضافة رسالة واردة او صادرة والتعامل مع جلب المزيد من الرسائل.</p>
                    <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginTop: '1rem' }}>
                      <strong style={{ color: '#ffb300' }}>ملاحظة بخصوص شريط الرسائل الغير مقروءة (Unread Banner):</strong>
                      <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>إذا كنت تريد المحادثة ان تبدأ من اول رسالة غير مقروءة ويظهر شريط الرسائل الغير مقروءة وسط المحادثة، قم بتمرير معرف الرسالة الاولى غير مقروءة في متغير <code>firstUnreadMessageId</code>.</p>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>وكذلك قم بتمرير بمتغير الرسائل الابتدائية <code>initialMessages</code> ما يلي:</p>
                      <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem', marginBottom: '0.5rem' }}>
                        <li>ما قبل الرسالة الاولى الغير مقروءة بـ 20 رسالة</li>
                        <li>الرسالة الاولى الغير مقروءة نفسها</li>
                        <li>ما بعدها رسائل حديثة بين 3 الى 5 رسائل</li>
                      </ul>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>وكذلك قم بتفعيل خاصية <code>startFromFirstUnreadMessage: true</code>.</p>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>وكذلك اخبار المحادثة باجمالي عدد الرسائل المتوفرة في قواعد البيانات الغير مقروءة عبر المتغير <code>unreadCountInCurrentChat</code>.</p>
                    </div>
                  </div>
                </div>

                <h3 style={{ marginTop: '3rem', color: 'var(--accent-primary)' }}>مثال برمجي لاستخدام المتغيرات</h3>

                <h4>المثال الأول: محادثة فردية (1-on-1 Chat)</h4>
                <CodeWrapper><pre><code>{`ChatScreen(
  currentUser: ChatUser(id: "user_me", name: "أنا", avatarUrl: "..."),
  otherPeople: [
    ChatUser(id: "user_other", name: "أحمد", avatarUrl: "..."),
  ],
  initialMessages: [
    Message(
      id: 1,
      senderId: "user_other",
      text: "مرحباً أحمد، كيف حالك؟",
      time: DateTime.now().subtract(const Duration(minutes: 5)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
    Message(
      id: 2,
      senderId: "user_me",
      text: "أهلاً بك! أنا بخير الحمد لله.",
      time: DateTime.now().subtract(const Duration(minutes: 4)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
  ],
  backgroundImageUrl: "https://example.com/wallpapers/chat_bg.jpg",
  appPackageName: "com.mycompany.chatapp",
)`}</code></pre></CodeWrapper>

                <h4 style={{ marginTop: '2rem' }}>المثال الثاني: محادثة جماعية (Group Chat)</h4>
                <CodeWrapper><pre><code>{`ChatScreen(
  isGroupChat: true,
  title: "مجموعة مطوري فلاتر",
  chatIconImageUrl: "https://example.com/group_icon.png",
  currentUser: ChatUser(id: "user_me", name: "أنا", avatarUrl: "..."),
  otherPeople: [
    ChatUser(id: "user_2", name: "علي", avatarUrl: "..."),
    ChatUser(id: "user_3", name: "عمر", avatarUrl: "..."),
    ChatUser(id: "user_4", name: "سالم", avatarUrl: "..."),
  ],
  initialMessages: [
    Message(
      id: 1,
      senderId: "user_2",
      text: "السلام عليكم شباب",
      time: DateTime.now().subtract(const Duration(minutes: 10)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
    Message(
      id: 2,
      senderId: "user_3",
      text: "وعليكم السلام ورحمة الله",
      time: DateTime.now().subtract(const Duration(minutes: 9)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
  ],
  backgroundImageUrl: "https://example.com/wallpapers/group_bg.jpg",
  appPackageName: "com.mycompany.chatapp",
)`}</code></pre></CodeWrapper>

                <h4 style={{ marginTop: '2rem' }}>المثال الثالث: تفعيل شريط الرسائل الغير مقروءة (Unread Banner)</h4>
                <p style={{ color: 'var(--text-secondary)' }}>مختصر يوضح كيفية القفز لأول رسالة غير مقروءة وعرض شريط التنبيه وسط المحادثة، مع تطبيق قاعدة (20 رسالة قبلها + الرسالة نفسها + 3-5 رسائل حديثة بعدها).</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  initialMessages: [
    // 1. ما قبل الرسالة الغير مقروءة بـ 20 رسالة (رسائل قديمة مقروءة)
    ...List.generate(20, (index) => Message(
      id: index + 1,
      senderId: "user_other",
      text: "رسالة مقروءة سابقة \${index}",
      time: DateTime.now().subtract(Duration(days: 1, minutes: 20 - index)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    )),

    // 2. الرسالة الأولى الغير مقروءة نفسها (التي سيقفز إليها المستخدم)
    Message(
      id: 105, // نفس الرقم الممرر في firstUnreadMessageId
      senderId: "user_other",
      text: "هذه أول رسالة غير مقروءة (من هنا يبدأ شريط التنبيه)",
      time: DateTime.now().subtract(const Duration(hours: 2)),
      status: MessageStatus.delivered,
    ),

    // 3. ما بعدها (رسائل حديثة غير مقروءة بين 3 إلى 5 رسائل)
    Message(
      id: 106,
      senderId: "user_other",
      text: "رسالة جديدة أخرى",
      time: DateTime.now().subtract(const Duration(hours: 1)),
      status: MessageStatus.delivered,
    ),
    Message(
      id: 107,
      senderId: "user_other",
      text: "هل أنت موجود؟",
      time: DateTime.now().subtract(const Duration(minutes: 30)),
      status: MessageStatus.delivered,
    ),
  ],
  
  // تفعيل خاصية البدء من الرسالة غير المقروءة
  startFromFirstUnreadMessage: true,
  
  // معرف أول رسالة غير مقروءة ليتم التركيز عليها
  firstUnreadMessageId: 105, 
  
  // إجمالي عدد الرسائل غير المقروءة في قاعدة البيانات (لعرضه في الشريط)
  unreadCountInCurrentChat: 15,
)`}</code></pre></CodeWrapper>
              </div>

              {/* 2. Basic Settings */}
              <div id="basic-settings" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>الإعدادات الأساسية (Basic Settings)</h2>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>المتغير (Property)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>isGroupChat</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>تفعيل ميزات الدردشات الجماعية مثل (عدد الأشخاص، صورة المرسل بجوار الفقاعة، اسم المرسل، الرتبة).</td>
                      </tr>
                      <tr>
                        <td><code>ifNoFoundUserImageShowDefaultImageOrFirstCharName</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إذا لم يمتلك المستخدم صورة: عند التفعيل (true) سيظهر الحرف الأول من اسمه، وإذا كان (false) ستظهر الصورة الافتراضية المدمجة.</td>
                      </tr>
                      <tr>
                        <td><code>alignMessagesToBottom</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إذا كانت الرسائل قليلة، هل تنزل للأسفل كواتساب (true) أم تبقى معلقة بالأعلى (false)؟</td>
                      </tr>
                      <tr>
                        <td><code>showAllMediaInGroupMedia</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>في حال وجود صور متعددة بالرسالة، هل تُعرض جميعها كشبكة، أم يكتفي بأربعة مربعات والباقي يُكتب كـ (+6)؟</td>
                      </tr>
                      <tr>
                        <td><code>emojiReactionShowCountOnlyWithEmoji</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إذا كان معطلاً ستظهر صور المتفاعلين، وإذا كان مفعلاً يظهر رقم فقط بجانب الإيموجي (مثال: ❤️ 5) لتقليل الزحام.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: '3rem', color: 'var(--accent-primary)' }}>إعدادات الإضافية (للمجموعات فقط)</h3>
                <div style={{ background: 'rgba(3, 169, 244, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #03a9f4', marginBottom: '1.5rem' }}>
                  <p style={{ margin: 0, color: 'var(--text-primary)' }}><strong>ملاحظة:</strong> جميع الخصائص أدناه تشترط أن يكون المتغير <code>isGroupChat = true</code> لكي تعمل.</p>
                </div>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>المتغير (Property)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>showUserNameInBubble</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إظهار اسم المستخدم: يظهر اسم المرسل داخل الفقاعة (الاسم فقط بدون الرتبة).</td>
                      </tr>
                      <tr>
                        <td><code>showRoleInBubble</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إظهار الدور: تظهر الرتبة (Admin/Owner) والاسم حتى وإن كان خيار الاسم غير مفعل!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Chat Controller */}
              <div id="chat-controller" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>المتحكم المركزي (ChatController)</h2>
                <p>المتحكم هو عقل واجهة المحادثة. صُمم هذا الكلاس ليمنحك تحكماً مطلقاً في الشاشة.</p>
                <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--accent-primary)', marginBottom: '2rem', textAlign: 'center' }}>
                  <strong style={{ color: 'var(--accent-primary)' }}>المبدأ الذهبي هنا:</strong> كل شيء تقوم بتمريره للـ ChatScreen، يمكنك تمريره مباشرة بداخل الـ ChatController!
                </div>

                <h3>إدارة الحالة والمعمارية الذكية (State Management)</h3>
                <p>تعتمد المكتبة على معمارية صلبة تضعك في موقع التحكم لتجنب أي تضارب في حالة الواجهة (State Conflicts)، حيث توفر لك خيارين لإدارة الحالة:</p>
                <ul>
                  <li><strong>1. المتحكم الداخلي التلقائي:</strong> يُنشأ تلقائياً عند تمرير البيانات مباشرة إلى ChatScreen (للاستخدام السريع)، ويتخلص من نفسه تلقائياً عبر (Dispose) بمجرد إغلاق الشاشة.</li>
                  <li><strong>2. المتحكم الخارجي الاحترافي (ChatController):</strong> محتوياته هي نفس محتويات الـ ChatScreen تماماً، لكنه يوفر ميزات إضافية قوية. حيث لا يتم عمل (Dispose) له عند خروج المستخدم من الشاشة، مما يضمن بقاء رسائلك وبياناتك بأمان (Caching) لتستخدمها بحرية في أي مكان آخر في التطبيق!</li>
                </ul>

                <h3>الأولوية الذكية للمتغيرات</h3>
                <p>إذا قمت بتعريف البيانات في <code>ChatController</code>، فإن الشاشة تعتمد عليها تماماً وتتجاهل أي قيم ممررة لها مباشرة. أما إذا تُركت فارغة في المتحكم، فستقوم الشاشة بتغذيته بالقيم الممررة إليها.</p>

                <div style={{ background: 'rgba(255, 87, 34, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ff5722', margin: '1.5rem 0' }}>
                  <strong style={{ color: '#ff5722' }}>ملاحظة لتجنب الأخطاء:</strong>
                  <p style={{ margin: 0, marginTop: '0.5rem' }}>يُفضل عند استخدام الكنترولر اعتماد الكنترولر بشكل كامل، أو تركه بشكل كامل (تمرير كل شيء للشاشة) لتفادي الأخطاء.</p>
                </div>

                <h3>مثال يوضح مرونة الاستخدام:</h3>

                <h4>الخيار الأول: الاستخدام البسيط السريع</h4>
                <CodeWrapper><pre><code>{`ChatScreen(
  currentUser: myUser,
  isGroupChat: true,
)`}</code></pre></CodeWrapper>

                <h4 style={{ marginTop: '2rem' }}>الخيار الثاني: الاستخدام المتقدم (المتحكم)</h4>
                <CodeWrapper><pre><code>{`final myController = ChatController(isGroupChat: false);

ChatScreen(
  controller: myController,
  
  //  سيتم تجاهل هذه القيمة كلياً، لأن الأولوية للمتحكم!
  isGroupChat: true, 
)`}</code></pre></CodeWrapper>
              </div>

              {/* 3.1 ChatConfig */}
              <div id="chat-config" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>إعدادات الواجهة (ChatConfig)</h2>
                <p>كلاس مخصص للتحكم بتصميم وشكل المحادثة، مثل أشكال الفقاعات، الاتجاهات (RTL/LTR)، الإيموجيات، والخلفية.</p>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الخاصية (Property)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>bubbleType</code></td>
                        <td><span className="badge">BubbleType</span></td>
                        <td>نوع وشكل فقاعة الرسالة. يدعم: <code>BubbleType.classic</code> (واتساب) أو <code>BubbleType.imessage</code> (دائرية ملساء).</td>
                      </tr>
                      <tr>
                        <td><code>translations</code></td>
                        <td><span className="badge">ChatTranslations</span></td>
                        <td>تمرير كائن الترجمة لتغيير لغة ونصوص الشاشة (شرح مفصل بالأسفل).</td>
                      </tr>
                      <tr>
                        <td><code>allAppDirectionality</code></td>
                        <td><span className="badge">TextDirection</span></td>
                        <td>الاتجاه العام للمكتبة بالكامل (RTL لليمين، LTR لليسار).</td>
                      </tr>
                      <tr>
                        <td><code>appBarDirection</code><br /><code>messageBubbleDirection</code><br /><code>inputPanelDirection</code></td>
                        <td><span className="badge">TextDirection?</span></td>
                        <td>اتجاهات فرعية تكسر الاتجاه العام. (مثلاً: التطبيق باللغة العربية RTL، لكن تريد أن تظهر فقاعات الرسائل LTR).</td>
                      </tr>
                      <tr>
                        <td><code>defaultBackgroundAsset</code></td>
                        <td><span className="badge">String</span></td>
                        <td>مسار صورة الخلفية الافتراضية داخل مجلد الـ assets.</td>
                      </tr>
                      <tr>
                        <td><code>defaultBackgroundAssetPackage</code></td>
                        <td><span className="badge">String?</span></td>
                        <td>اسم الحزمة (Package) الموجود فيها مسار الخلفية (اتركه null إذا كانت في مشروعك الرئيسي).</td>
                      </tr>
                      <tr>
                        <td><code>reactionEmojis</code></td>
                        <td><span className="badge">List&lt;String&gt;</span></td>
                        <td>قائمة الإيموجيات التي تظهر عند الضغط المطول على أي رسالة. يمكنك تخصيصها بالكامل.</td>
                      </tr>
                      <tr>
                        <td><code>doubleTapReactionEmoji</code></td>
                        <td><span className="badge">String</span></td>
                        <td>الإيموجي الافتراضي الذي يتم التفاعل به فوراً عند النقر المزدوج (Double Tap) السريع على الرسالة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>مثال لاستخدام ChatConfig:</h3>
                <CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    bubbleType: BubbleType.imessage, // شكل فقاعات الايفون
    allAppDirectionality: TextDirection.rtl, // اتجاه التطبيق عربي
    doubleTapReactionEmoji: '🔥', // تغيير تفاعل النقر المزدوج
    reactionEmojis: ['❤️', '👍', '😂', '🔥', '💯'], // تخصيص قائمة التفاعل
    defaultBackgroundAsset: 'assets/images/my_custom_bg.jpg',
  ),
  // ... بقية الإعدادات
)`}</code></pre></CodeWrapper>
              </div>

              {/* Localization & Directions */}
              <div id="localization" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>اللغات والاتجاه والخط (Localization & Fonts)</h2>

                <h3>اللغة (ChatTranslations)</h3>
                <p>كلاس مصمم خصيصاً ليجعلك قادراً على ترجمة الواجهة لأي لغة، أو حتى تغيير النصوص الافتراضية (مثلاً بدلاً من "متصل الآن" تريدها أن تكون "Online"). يحتوي الكلاس على أكثر من 100 نص قابل للتعديل!</p>

                <h4>طرق التهيئة (Constructors)</h4>
                <ul>
                  <li><code>ChatTranslations.arabic()</code> : تهيئة جاهزة باللغة العربية (وهي الافتراضية).</li>
                  <li><code>ChatTranslations.english()</code> : تهيئة جاهزة باللغة الإنجليزية.</li>
                  <li><code>ChatTranslations.custom(...)</code> : تهيئة مخصصة بالكامل لإنشاء لغتك الخاصة أو تعديل نصوص معينة.</li>
                </ul>

                <h4>أمثلة على الاستخدام:</h4>
                <p><strong>1. استخدام اللغات المدمجة (عربي / إنجليزي)</strong></p>
                <CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    // تحويل واجهة المحادثة للغة الإنجليزية بضغطة واحدة!
    translations: const ChatTranslations.english(),
  ),
)`}</code></pre></CodeWrapper>

                <p><strong>2. تخصيص النصوص (إنشاء لغة جديدة أو تعديل نصوص)</strong></p>
                <CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    translations: const ChatTranslations.custom(
      onlineNow: 'متواجد حالياً 🟢', // تغيير نص المتصل
      typeMessage: 'اكتب رسالتك هنا...', // تغيير التلميح في مربع الكتابة
      deleteForEveryone: 'حذف من الطرفين',
      reply: 'رد على الرسالة',
      // ... وتمرير بقية الـ 100+ متغير للغتك الخاصة
    ),
  ),
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}>الاتجاهات والمحاذاة الذكية (RTL/LTR)</h3>
                <p>بفضل هذا النظام، أنت لست مقيداً بلغة الهاتف بل يمكنك كسر القواعد. الواجهة ذكية وتفهم ما إذا كان المستخدم يكتب بالعربية أو الإنجليزية، لتقوم بمحاذاة النص فورياً!</p>

                <h4>تحكم كامل بأجزاء الشاشة</h4>
                <p>تمنحك المكتبة القدرة على تحديد مسار 3 عناصر حيوية بشكل مستقل تماماً عن اتجاه التطبيق الرئيسي:</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    // تحديد الاتجاه العام للشاشة (مثلاً يمين لليسار)
    allAppDirectionality: TextDirection.rtl,
    
    // 1. لكن نريد الشريط العلوي (الأسماء) باليسار
    appBarDirection: TextDirection.ltr,
    
    // 2. ونريد مسار الفقاعات ليكون (رسائلي يسار، ورسائله يمين)
    messageBubbleDirection: TextDirection.ltr,
    
    // 3. ترتيب أزرار لوحة الإرسال
    inputPanelDirection: TextDirection.rtl,
  ),
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}>الخطوط والتحجيم (Typography & Scaling)</h3>
                <p>توفر المكتبة مرونة عالية في التحكم بأحجام الخطوط، معتمدة على خاصيتين أساسيتين في <code>ChatScreen</code>:</p>

                <ul>
                  <li><strong>1. <code>enableCustomFontScale</code> (تمكين مقياس خط مخصص):</strong><br />إذا تم تفعيله، سيقوم التطبيق بتجاهل حجم خط الهاتف (نظام التشغيل)، وسيعتمد كلياً وبشكل إجباري على المقياس الذي تحدده أنت يدوياً في الخاصية التالية.</li>
                  <li><strong>2. <code>userFontScale</code> (عامل مقياس الخط):</strong><br />سلوك هذا المتغير الذكي يعتمد كلياً على الخاصية السابقة:
                    <ul>
                      <li>إذا كان التكبير المخصص مفعلاً: سيعمل هذا المتغير كمقياس دقيق وثابت لتكبير/تصغير الخطوط (مثلاً قيمة 1.2 تعني تكبير 20% لكل التطبيق).</li>
                      <li>إذا كان التكبير المخصص معطلاً: سيعمل هذا المتغير كحد أقصى (Max Limit) يمكن أن يصل إليه الخط! فالخط سيتبع إعدادات هاتف المستخدم بشكل طبيعي، ولكن إذا كان المستخدم يضع خط هاتفه كبيراً جداً، سيوقفه هذا المتغير عند الحد الذي تحدده أنت لمنع تشوه واجهة التطبيق.</li>
                    </ul>
                  </li>
                </ul>

                <h4>أمثلة توضيحية:</h4>
                <p><strong>1. تثبيت حجم الخط وتجاهل إعدادات الهاتف (Fixed Scale)</strong></p>
                <CodeWrapper><pre><code>{`ChatScreen(
  // تفعيل التكبير المخصص لتجاهل إعدادات هاتف المستخدم كلياً
  enableCustomFontScale: true,
  
  // التطبيق بأكمله سيتم تكبير خطوطه بنسبة 20% بشكل ثابت وإجباري
  userFontScale: 1.2, 
)`}</code></pre></CodeWrapper>

                <p><strong>2. السماح بخط الهاتف مع وضع حد أقصى للحماية (Max Limit)</strong></p>
                <CodeWrapper><pre><code>{`ChatScreen(
  // تعطيل التكبير المخصص للسماح للخط بالتجاوب مع إعدادات هاتف المستخدم
  enableCustomFontScale: false,
  
  // إذا قام المستخدم بتكبير خط هاتفه بشكل جنوني، سيوقفه التطبيق 
  // عند 1.5 (تكبير 50%) ولن يسمح بتجاوزها لمنع تشوه الواجهة
  userFontScale: 1.5, 
)`}</code></pre></CodeWrapper>
              </div>

              {/* Chat Theme */}
              <div id="chat-theme" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>الألوان والتصميم (ChatTheme)</h2>
                <p>كلاس شامل للتحكم الحصري والكامل بكل بكسل ولون في واجهة المحادثة. يمكنك تخصيصه من الصفر أو استخدام أحد القوالب الجاهزة التي بنيناها لك.</p>

                <h3>القوالب الجاهزة (Built-in Themes):</h3>
                <p>تأتي المكتبة مع قوالب احترافية متكاملة بضغطة زر:</p>
                <ul>
                  <li><code>ChatTheme.dark()</code>: الثيم الليلي الكلاسيكي الداكن ذو الألوان الهادئة والمريحة.</li>
                  <li><code>ChatTheme.light()</code>: الثيم الفاتح الساطع والمشرق.</li>
                </ul>

                <h3>التخصيص الشامل للثيم (Custom Sub-Themes):</h3>
                <p>يتكون ChatTheme من 10 ثيمات فرعية للتحكم الدقيق بكل عنصر في الواجهة:</p>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الثيم الفرعي (Sub-Theme)</th>
                        <th>نطاق التأثير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>backgroundTheme</code></td>
                        <td>خلفية شاشة المحادثة ولون المزج (Blend Color).</td>
                      </tr>
                      <tr>
                        <td><code>topBarTheme</code></td>
                        <td>الشريط العلوي، عناوين وأيقونات الأزرار العلوية وتأثيرات الظل.</td>
                      </tr>
                      <tr>
                        <td><code>messageBubbleTheme</code></td>
                        <td>فقاعات الرسائل الصادرة والواردة، ألوان النصوص، علامة الصح، والرتبة.</td>
                      </tr>
                      <tr>
                        <td><code>inputPanelTheme</code></td>
                        <td>منطقة إدخال النص السفلية وزر تسجيل الصوت وألوان المرفقات.</td>
                      </tr>
                      <tr>
                        <td><code>attachmentMenuTheme</code></td>
                        <td>قائمة المرفقات المنبثقة وألوان أزرار الكاميرا والموقع.</td>
                      </tr>
                      <tr>
                        <td><code>contextMenuTheme</code></td>
                        <td>نافذة الخيارات المنبثقة (عند الضغط المطول على الرسالة) وشريط الإيموجي.</td>
                      </tr>
                      <tr>
                        <td><code>messageReactionTheme</code></td>
                        <td>ألوان أزرار التفاعل أسفل الرسالة وحوافها بناءً على مرسلها.</td>
                      </tr>
                      <tr>
                        <td><code>bannersTheme</code></td>
                        <td>الشرائط العلوية مثل (الرسالة المثبتة، شريط حفظ المستخدم، إشعارات النجاح).</td>
                      </tr>
                      <tr>
                        <td><code>messageListTheme</code></td>
                        <td>فاصل التاريخ (اليوم، أمس) وزر التمرير السريع للأسفل.</td>
                      </tr>
                      <tr>
                        <td><code>mediaViewerTheme</code></td>
                        <td>شاشة عرض الوسائط بشاشتها الكاملة وألوان شريط تحميل الفيديو ودبوس الموقع.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>مثال لاستخدام وتعديل الثيم:</h3>
                <CodeWrapper><pre><code>{`ChatScreen(
  // يمكن استخدام قالب جاهز
  theme: const ChatTheme.dark(), 

  // أو يمكنك التعديل على جزء معين من القالب الجاهز باستخدام copyWith (إن وجدت)
  // أو بناء ثيمك الخاص من الصفر وتمريره
)`}</code></pre></CodeWrapper>
              </div>

              {/* UI Integration */}
              <div id="ui-integration" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>متغيرات ودوال تكامل واجة المستخدم</h2>

                <h3>المتغيرات</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الخاصية (Property)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>unreadCountInOtherChats</code></td>
                        <td><span className="badge">int?</span></td>
                        <td>عداد الرسائل الخارجية: عند تعيين عدد لهذا الخيار يظهر الرقم بجوار زر الرجوع في أعلى المحادثة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>دوال تفاعل المستخدم مع عناصر الواجهة المختلفة.</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>اسم الدالة</th>
                        <th>المعاملات (Parameters)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>onBackPressed</code></td>
                        <td>بدون معاملات ()</td>
                        <td>عند الضغط على زر الرجوع في الشريط العلوي للمحادثة.</td>
                      </tr>
                      <tr>
                        <td><code>onChatTitlePressed</code></td>
                        <td>بدون معاملات ()</td>
                        <td>عند الضغط على عنوان المحادثة (الاسم) في الأعلى (مثلاً لفتح بروفايل).</td>
                      </tr>
                      <tr>
                        <td><code>onChatAvatarPressed</code></td>
                        <td>بدون معاملات ()</td>
                        <td>عند الضغط على الصورة الموجودة في الشريط العلوي للمحادثة.</td>
                      </tr>
                      <tr>
                        <td><code>onMessageAvatarPressed</code></td>
                        <td><code>(ChatUser user)</code></td>
                        <td>عند الضغط على صورة المستخدم الذي بجوار الفقاعة (تُستخدم غالباً في المجموعات).</td>
                      </tr>
                      <tr>
                        <td><code>onDateSeparatorTapped</code></td>
                        <td><code>(DateTime date)</code></td>
                        <td>عند الضغط على فاصل التاريخ بين الرسائل (مثال: "اليوم" أو تاريخ قديم).</td>
                      </tr>
                      <tr>
                        <td><code>onForwardMessages</code></td>
                        <td><code>(List&lt;Message&gt; msgs)</code></td>
                        <td>تُستدعى عند تحديد رسائل والضغط على زر التحويل. إضافتك لهذه الدالة هو ما يُظهر زر التحويل أساساً في شريط التحديد.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Messaging Functions */}
              <div id="messaging-functions" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>دوال ارسال واستقبال الرسائل</h2>

                <h3><code>incomingMessagesStream</code> (ورود رسالة جديدة)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>incomingMessagesStream</code></td>
                        <td><span className="badge">Stream&lt;Message&gt;?</span></td>
                        <td>مسار يضخ كائنات الرسائل بشكل مستمر.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> لا ترجع شيئاً (يتم عرض الرسالة تلقائياً في الشاشة بمجرد وصولها).</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  // تمرير Stream يرسل رسالة جديدة كل 5 ثوانٍ لمحاكاة استلام رسائل حية
  incomingMessagesStream: Stream.periodic(
    const Duration(seconds: 5),
    (count) => Message(
      id: 1000 + count,
      senderId: "user_other",
      text: "هذه رسالة تلقائية رقم \${count + 1} وصلت للتو!",
      time: DateTime.now(),
      status: MessageStatus.delivered,
    ),
  ).take(3), // نجلب 3 رسائل فقط للتجربة
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onSendMessageMessage</code> (إرسال رسالة)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>message</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة التي قام المستخدم بكتابتها للتو (وتكون بحالة sending).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;Message?&gt;</code> - نفس الرسالة بعد تحديث بياناتها (مثل إعطائها ID من السيرفر وتغيير حالتها إلى sent).</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onSendMessageMessage: (Message message) async {
    // 1. الرسالة القادمة تحتوي على النص المؤقت والـ ID المؤقت
    print("جاري إرسال: \${message.text}");

    // 2. محاكاة الاتصال بالسيرفر (تأخير لمدة ثانيتين)
    await Future.delayed(const Duration(seconds: 2));

    // 3. إرجاع الرسالة بعد نجاح العملية مع تغيير الـ ID والحالة
    print("تم الإرسال بنجاح للسيرفر!");
    return message.copyWith(
      id: 999, // ID حقيقي من السيرفر
      status: MessageStatus.sent, // تغيير الحالة إلى تم الإرسال
    );
  },
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onMessageSentSuccessfullySound</code></h3>
                <p>هذه الدالة مجرد خطاف (Hook) يُستدعى لتشغيل صوت أو تأثير بصري فور نجاح دالة <code>onSendMessageMessage</code>.</p>
                <p><strong>المعاملات:</strong> لا يوجد مدخلات ()<br /><strong>القيمة المُرجعة:</strong> لا ترجع شيئاً.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onMessageSentSuccessfullySound: () {
    // لا تأخذ شيء ولا ترجع شيء
    // يمكنك هنا تشغيل  (Haptic) صوت نغمة إرسال
    print("🎵 (صوت إرسال الرسالة: فشششووووب)");
  },
)`}</code></pre></CodeWrapper>
              </div>

              {/* Message Operations */}
              <div id="message-operations" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>دوال العمليات على الرسائل</h2>

                <h3><code>onMessagesRead</code> (قراءة الرسائل المجمعة)</h3>
                <p>تُستدعى عندما يقرأ المستخدم رسالة أو أكثر. تمرر قائمة بالرسائل المقروءة حالياً.<br />يقدم هذا الحدث نوعين من التحديثات:</p>
                <ul>
                  <li><code>isBulkUpdate = false</code>: تحديث لرسالة واحدة معينة.</li>
                  <li><code>isBulkUpdate = true</code>: تحديث لكل الرسائل غير المقروءة في قاعدة بياناتك دفعة واحدة.</li>
                </ul>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>messages</code></td>
                        <td><span className="badge">List&lt;Message&gt;</span></td>
                        <td>قائمة الرسائل التي أصبحت مقروءة للتو في الشاشة.<br />ملاحظة: إذا كان isBulkUpdate يساوي true، فقد تكون هذه القائمة فارغة، لأن الطلب يعني "سجّل كل الرسائل السابقة كـ مقروءة".</td>
                      </tr>
                      <tr>
                        <td><code>isBulkUpdate</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>هل هذا التحديث لمجموعة رسائل دفعة واحدة (True) أم لرسالة مفردة (False).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> لا ترجع شيئاً.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onMessagesRead: (List<Message> messages, bool isBulkUpdate) async {
    if (isBulkUpdate) {
      // تحديث جماعي لكل شيء
      print("تحديث جماعي: جاري تسجيل جميع الرسائل في المحادثة كـ(مقروءة)...");
    } else {
      // تحديث لرسائل محددة
      final readIds = messages.map((m) => m.id).toList();
      print("تحديث مفرد: جاري إرسال علامة (مقروء) للرسائل \${readIds.join(', ')}...");
    }

    await Future.delayed(const Duration(milliseconds: 500));
    print("تم تحديث حالة القراءة في السيرفر!");
  }
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onMessageEdited</code> (تعديل الرسائل)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>oldMessage</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة بنسختها القديمة قبل التعديل.</td>
                      </tr>
                      <tr>
                        <td><code>newText</code></td>
                        <td><span className="badge">String</span></td>
                        <td>النص الجديد الذي أدخله المستخدم في حقل التعديل.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - مجرد تأكيد للسيرفر، وبمجرد نجاح العملية، المكتبة ستحدث النص في الواجهة تلقائياً.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onMessageEdited: (Message oldMessage, String newText) async {
    print("النص القديم كان: \${oldMessage.text}");
    print("النص الجديد هو: \${newText}");

    // محاكاة رفع التعديل للسيرفر
    await Future.delayed(const Duration(seconds: 1));

    print("تم حفظ التعديل في السيرفر بنجاح!");
  },
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onMessagesDeleted</code> (حذف الرسائل)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>messages</code></td>
                        <td><span className="badge">List&lt;Message&gt;</span></td>
                        <td>الرسائل التي قام المستخدم بتحديدها للحذف.</td>
                      </tr>
                      <tr>
                        <td><code>forEveryone</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>هل اختار المستخدم الحذف لدى الجميع أم من جهازه فقط.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - بمجرد انتهاء العملية (اكتمال الـ Future) سيتم إزالة الرسائل من الشاشة فوراً.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onMessagesDeleted: (List<Message> messages, bool forEveryone) async {
    // 1. استخراج أرقام الرسائل المراد حذفها
    final deletedIds = messages.map((m) => m.id).toList();
    print("الرسائل المطلوب حذفها: \${deletedIds.join(', ')}");

    // 2. محاكاة إرسال طلب الحذف للسيرفر
    await Future.delayed(const Duration(seconds: 1));

    // 3. طباعة نوع الحذف
    if (forEveryone) {
      print("تم حذف الرسائل لدى جميع المستخدمين!");
    } else {
      print("تم حذف الرسائل من جهازك فقط.");
    }
    // لا نحتاج لإرجاع شيء، المكتبة ستتكفل بإخفائها من الواجهة
  },
)`}</code></pre></CodeWrapper>
              </div>

              {/* Fetching Messages */}
              <div id="fetching-messages" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>دوال جلب الرسائل والتحميل المسبق</h2>
                <p>مجموعة من الدوال المتخصصة لجلب الرسائل القديمة أو الأحدث من السيرفر، بالإضافة إلى القفز لتواريخ معينة للبحث السريع وتوفير الأداء.</p>

                <h3><code>onFetchMessages</code> (جلب المزيد من الرسائل)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>type</code></td>
                        <td><span className="badge">FetchQueryType</span></td>
                        <td>نوع الجلب المطلوب:
                          <ul>
                            <li><strong>specific:</strong> رسالة واحدة برقمها.</li>
                            <li><strong>latest:</strong> آخر الرسائل في المحادثة.</li>
                            <li><strong>older:</strong> رسائل سابقة (أقدم من الرسالة المرجعية).</li>
                            <li><strong>newer:</strong> رسائل تالية (أحدث من الرسالة المرجعية).</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td><code>referenceMessageId</code></td>
                        <td><span className="badge">int?</span></td>
                        <td>رقم الرسالة المرجعية التي سيتم جلب الرسائل بناءً عليها (ما قبلها أو ما بعدها).</td>
                      </tr>
                      <tr>
                        <td><code>limit</code></td>
                        <td><span className="badge">int</span></td>
                        <td>الحد الأقصى لعدد الرسائل المسموح جلبها في الدفعة الواحدة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;List&lt;Message&gt;?&gt;</code> - قائمة الرسائل الجديدة التي تم جلبها من السيرفر ليتم دمجها بشكل ذكي وسلس في الواجهة.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onFetchMessages: (FetchQueryType type, int? referenceId, int limit) async {
    print("نوع الجلب: \${type.name} | الرسالة المرجعية: \${referenceId} | العدد المطلوب: \${limit}");

    // محاكاة تأخير السيرفر
    await Future.delayed(const Duration(seconds: 1));

    // في هذا المثال التوضيحي سنقوم دائماً بإرجاع رسائل وهمية أقدم
    return List.generate(limit, (index) {
      return Message(
        id: (referenceId ?? 500) - (index + 1), // أرقام متناقصة للرسائل الأقدم
        senderId: "user_other",
        text: "رسالة قديمة رقم \${index + 1}",
        time: DateTime.now().subtract(Duration(days: index + 1)),
        status: MessageStatus.read,
      );
    });
  },
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onFetchMessagesByDate</code> (جلب حسب التاريخ)</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>date</code></td>
                        <td><span className="badge">DateTime</span></td>
                        <td>التاريخ (اليوم) المطلوب جلب الرسائل منه بالتحديد.</td>
                      </tr>
                      <tr>
                        <td><code>limit</code></td>
                        <td><span className="badge">int</span></td>
                        <td>الحد الأقصى لعدد الرسائل المسموح جلبها في الدفعة الواحدة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;List&lt;Message&gt;?&gt;</code> - مصفوفة الرسائل التي تم العثور عليها لذلك اليوم ليتم عرضها للمستخدم.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onFetchMessagesByDate: (DateTime date, int limit) async {
    print("جاري البحث عن رسائل ليوم: \${date.year}-\${date.month}-\${date.day}");

    // محاكاة البحث في قاعدة البيانات أو السيرفر
    await Future.delayed(const Duration(seconds: 1));

    // إرجاع رسالة واحدة تثبت أنه وجد النتيجة لذلك اليوم
    return [
      Message(
        id: 777,
        senderId: "user_other",
        text: "رسالة نادرة من تاريخ \${date.month}/\${date.day}",
        time: date, // استخدام نفس التاريخ المطلوب
        status: MessageStatus.read,
      )
    ];
  },
)`}</code></pre></CodeWrapper>
              </div>

              {/* Pinned Messages */}
              <div id="pinned-messages" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>دوال الرسائل المثبتة</h2>

                <h3><code>pinnedMessagesStream</code> (اضافه او حذف الرسائل المثبتة)</h3>
                <p>تسمح لك بتحديث الرسائل المثبتة في المحادثة الواردة من السيرفر بشكل مستمر.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>pinnedMessagesStream</code></td>
                        <td><span className="badge">Stream&lt;List&lt;Message&gt;&gt;?</span></td>
                        <td>مسار يضخ قائمة الرسائل المثبتة بشكل مستمر.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> لا ترجع شيئاً.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  pinnedMessagesStream: Stream.periodic(
    const Duration(seconds: 10),
    (count) => [
      Message(
        id: 1,
        senderId: "admin",
        text: "رسالة مثبتة من السيرفر",
        time: DateTime.now(),
        status: MessageStatus.delivered,
      )
    ]
  ),
)`}</code></pre></CodeWrapper>

                <h3 style={{ marginTop: '3rem' }}><code>onPinnedMessagesChanged</code> (تغيرات الرسائل المثبتة)</h3>
                <p>تستدعى عندما يقوم المستخدم الحالي بتثبيت أو إلغاء تثبيت رسالة مما يسمح لك بتحديث قواعد البيانات.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>message</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة التي تم تثبيتها أو إلغاء تثبيتها.</td>
                      </tr>
                      <tr>
                        <td><code>isPinned</code></td>
                        <td><span className="badge">bool</span></td>
                        <td>إذا كانت true فهذا يعني إضافة للتثبيت، وإذا false فهو إلغاء تثبيت.</td>
                      </tr>
                      <tr>
                        <td><code>updatedPinnedList</code></td>
                        <td><span className="badge">List&lt;Message&gt;</span></td>
                        <td>قائمة الرسائل المثبتة الجديدة بعد هذا التغيير.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - بمجرد انتهاء العملية سيتم اعتماد التغيير في الواجهة.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onPinnedMessagesChanged: (Message message, bool isPinned, List<Message> updatedPinnedList) async {
    print(isPinned 
      ? "طلب تثبيت الرسالة: \${message.text}" 
      : "طلب إلغاء تثبيت الرسالة: \${message.text}");

    // محاكاة إرسال الطلب لقاعدة البيانات
    await Future.delayed(const Duration(seconds: 1));
    
    print("تم تحديث القائمة في السيرفر! عدد المثبتات الآن: \${updatedPinnedList.length}");
  }
)`}</code></pre></CodeWrapper>
              </div>

              {/* Reactions */}
              <div id="reactions-emoji" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>دوال تفاعلات الرسائل والايموجي</h2>

                <h3>تخصيص الإيموجي والتفاعلات (Emoji Customization)</h3>
                <p>تتوزع خصائص التحكم في التفاعلات عبر عدة كلاسات في المكتبة لتوفير أقصى قدر من المرونة للمطور:</p>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>مكان الخاصية (Location)</th>
                        <th>الخاصية (Property)</th>
                        <th>الوصف (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>ChatUser</strong><br />(الكائن الخاص بالمستخدم الحالي)</td>
                        <td><code>maxUserReactionsPerMessage</code></td>
                        <td>الحد الأقصى لتفاعلات الشخص: الافتراضي هو 1. يمكنك زيادته، أو تعيينه إلى 0 إذا أردت منع المستخدم من التفاعل مع أي رسالة نهائياً.</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}><strong>ChatConfig</strong></td>
                        <td><code>reactionEmojis</code></td>
                        <td>قائمة التفاعل العام (Long Press): تخصيص قائمة الإيموجيات التي تظهر عند الضغط المطول على الرسائل الفردية والجماعية.</td>
                      </tr>
                      <tr>
                        <td><code>doubleTapReactionEmoji</code></td>
                        <td>التفاعل السريع العام (Double Tap): تخصيص الإيموجي الافتراضي عند النقر المزدوج السريع على رسالة في المحادثة العادية.</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}><strong>ChatScreen</strong></td>
                        <td><code>doubleTapReactionEmoji</code></td>
                        <td>ملاحظة متقدمة: يمكنك تخصيص إيموجي سريع (خاص) لمحادثة معينة، وسيكون له الأولوية ليطغى على التفاعل السريع العام الموجود في ChatConfig.</td>
                      </tr>
                      <tr>
                        <td><code>emojiReactionShowCountOnlyWithEmoji</code></td>
                        <td>طريقة عرض التفاعلات: إذا كان مفُعلاً، سيعرض رقماً بجانب الإيموجي (مثال: ❤️ 5). إذا كان معطلاً، ستظهر صور المتفاعلين (Avatars) متداخلة بحد أقصى 4 تفاعلات، ومن ثم يعود لعرض الرقم.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: '3rem' }}><code>onReactionChanged</code> (تغيرات التفاعلات)</h3>
                <p>تستدعى عندما يقوم المستخدم الحالي بالتفاعل أو الغاء تفاعله مع رسالة مما يسمح لك بتحديث قواعد البيانات.</p>
                <div style={{ background: 'rgba(3, 169, 244, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #03a9f4', marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#03a9f4' }}>ملاحظة:</strong>
                  <p style={{ margin: 0 }}>عندما يقوم المستخدمين الآخرين بالتفاعل، تدخل التفاعلات للمحادثة عن طريق تحديث الرسائل باستخدام مستمع الرسائل الواردة <code>incomingMessagesStream</code>.</p>
                </div>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>updatedMessage</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة بكامل بياناتها الجديدة والتي تحتوي على قائمة التفاعلات المُحدثة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;bool?&gt;</code> - يجب أن تُرجع true إذا نجحت العملية في السيرفر، أو false ليتم إجبار الواجهة على التراجع عن التفاعل في حال فشل الإرسال.</p>
                <CodeWrapper><pre><code>{`ChatScreen(
  onReactionChanged: (Message updatedMessage) async {
    print("المستخدم وضع تفاعل على رسالة!");
    print("قائمة التفاعلات الحالية لهذه الرسالة: \${updatedMessage.reactions?.length ?? 0}");

    try {
      // محاكاة إرسال التفاعل للسيرفر
      await Future.delayed(const Duration(seconds: 1));
      
      print("تم حفظ التفاعل بنجاح!");
      return true; // نجاح العملية، استمر في عرض الإيموجي للمستخدم
    } catch (e) {
      print("فشل الحفظ بسبب مشكلة في الإنترنت!");
      return false; // فشل العملية، اسحب الإيموجي من الواجهة وتراجع عن التفاعل
    }
  }
)`}</code></pre></CodeWrapper>
              </div>

              {/* Custom Download */}
              <div id="custom-download" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>أولا : دوال التحميل المخصصة</h2>

                <p>تحتوي المكتبة على نظام هجين وذكي جداً لتحميل الملفات المرفقة (صور، فيديو، مستندات، صوت). يعمل بنظامين متوازيين حسب احتياجك وحسب ما تمرره من إعدادات للمتحكم.</p>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                  <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>التحميل التلقائي للميديا (autoDownloadMedia)</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>للحد من استهلاك الإنترنت، تم توفير هذا الخيار داخل ChatScreen.</p>
                  <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                    <li>عند تفعيله (true): تُستدعى دوال التحميل فوراً بمجرد ظهور وعرض الرسالة في واجهة المحادثة.</li>
                    <li>عند تعطيله (false): يظهر للمستخدم زر تحميل للميديا بجانب كل رسالة، ولن يتم التحميل إلا بضغطه يدوياً.</li>
                  </ul>
                </div>

                <p>تستخدم هذه الدوال إذا كنت تفضل الاعتماد على نظام التحميل الخارجي الخاص بتطبيقك (مثل <code>Dio</code> أو <code>Flutter_Downloader</code>). بمجرد تمريرك لهذه الدوال، ستتوقف دوال المكتبة المدمجة عن العمل لتمنحك التحكم الكامل.</p>

                <h3><code>onDownloadMediaRequested</code> (طلب تحميل الوسائط)</h3>
                <p>تُستدعى عندما يضغط المستخدم على أيقونة التحميل لمرفق (صورة، فيديو، مستند). تُستخدم معها دالة <code>onCancelMediaDownloadRequested</code> لإيقاف التحميل.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>message</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة التي تحتوي على المرفق المراد تحميله.</td>
                      </tr>
                      <tr>
                        <td><code>onProgress</code></td>
                        <td><span className="badge">Function(int total, int progress)</span></td>
                        <td>دالة تستدعيها أنت لتمرير نسبة التحميل إلى الواجهة لكي يكتمل شريط التحميل أمام المستخدم.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;String?&gt;</code> - المسار المحلي (Local Path) النهائي في جهاز المستخدم بعد اكتمال التحميل.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onCancelMediaDownloadRequested</code> (إلغاء التحميل)</h3>
                <p>تُستدعى عندما يضغط المستخدم على (X) لإلغاء تحميل جارٍ.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>message</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة التي يتم تحميل مرفقها حالياً.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>void</code> - لا ترجع شيئاً، المطلوب منك فقط إيقاف عملية التحميل في كودك الخارجي.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onDownloadThumbnailRequested</code> (تحميل الصورة المصغرة)</h3>
                <p>لتحميل واجهة الفيديوهات (Cover/Thumbnail) قبل تشغيلها أو تنزيلها بالكامل لتقليل استهلاك الإنترنت.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>message</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة المراد تحميل الصورة المصغرة لمرفقها.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;String?&gt;</code> - المسار المحلي (Local Path) للصورة المصغرة بعد التحميل.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onDownloadAvatarRequested</code> (تحميل صور المستخدمين)</h3>
                <p>تُستدعى عندما تعثر الشاشة على مستخدم لا يمتلك مساراً محلياً <code>avatarLocalPath</code> لصورته.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>user</code></td>
                        <td><span className="badge">ChatUser</span></td>
                        <td>المستخدم المطلوب تحميل صورته بناءً على الـ avatarUrl الخاص به.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;String?&gt;</code> - المسار المحلي (Local Path) للصورة بعد التحميل لتقوم المكتبة برسمها فوراً.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onDownloadBackgroundRequested</code> (تحميل الخلفية)</h3>
                <p>تُستدعى لتحميل صورة الخلفية المخصصة للمحادثة.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>url</code></td>
                        <td><span className="badge">String</span></td>
                        <td>رابط الصورة المطلوب تحميلها.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;String?&gt;</code> - المسار المحلي (Local Path) لصورة الخلفية بعد تنزيلها.</p>

                <h3 style={{ marginTop: '2rem' }}>مثال شامل: دوال التحميل المخصصة - الخارجي</h3>
                <CodeWrapper><pre><code>{`ChatScreen(
  // 1. طلب تحميل المرفقات
  onDownloadMediaRequested: (Message message, Function(int total, int progress) onProgress) async {
    print("طلب تحميل مرفق للرسالة: \${message.id}");
    
    // محاكاة لعملية التحميل (يعمل مباشرة عند النسخ)
    for (int i = 1; i <= 10; i++) {
      await Future.delayed(const Duration(milliseconds: 300));
      onProgress(10, i); // تحديث شريط التقدم للواجهة
    }
    
    // إرجاع مسار وهمي لاختبار الواجهة
    return "/local/downloads/file_\${message.id}.mp4";
  },
  
  // 2. إلغاء التحميل
  onCancelMediaDownloadRequested: (Message message) {
    print("تم طلب إلغاء التحميل للرسالة: \${message.id}");
  },
)`}</code></pre></CodeWrapper>
              </div>

              {/* Builtin Download Placeholder */}
              <div id="builtin-download" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>ثانياً: دوال التحميل المدمجة (Built-in Download Functions)</h2>
                <p>في حال عدم تمرير الدوال السابقة، ستتكفل المكتبة بتحميل الملفات وتخزينها محلياً بذكاء. أنت تحتاج فقط لتحديد أسماء المجلدات، وتوفير دوال لاستلام الكائنات بعد التحميل لتقوم أنت بحفظ المسارات الجديدة في قاعدة بياناتك (مثل Isar).</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatMediaFolderName</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>اسم مجلد حفظ الوسائط: يُفضل تخصيص واحد لكل محادثة (مثلاً <code>chat_123_media</code>) لسهولة إدارة وحذف ملفات كل محادثة على حدة دون التأثير على البقية. (النوع: <span className="badge">String</span>).</p>
                  </div>
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatUsersFolderName</code></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>اسم مجلد حفظ صور المستخدمين: يُفضل أن يكون موحداً ومشتركاً لكل المحادثات (مثلاً <code>my_app_users_avatars</code>) لمنع تكرار صور نفس المستخدم وتوفير مساحة التخزين. (النوع: <span className="badge">String</span>).</p>
                  </div>
                </div>

                <h3 style={{ marginTop: '3rem' }}><code>onMessageDownloaded</code> (حفظ تحديث الرسالة)</h3>
                <p>تُستدعى بعد أن تكمل المكتبة تحميل المرفق بنجاح وإعطائه المسار المحلي <code>localPath</code>.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>updatedMessage</code></td>
                        <td><span className="badge">Message</span></td>
                        <td>الرسالة في صورتها النهائية بعد أن تم تزويد مرفقها بالمسار المحلي.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - لا ترجع شيئاً، فقط قم بتحديث الرسالة في قاعدة بياناتك.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onUserAvatarDownloaded</code> (حفظ تحديث المستخدم)</h3>
                <p>تُستدعى بعد تحميل صورة المستخدم المدمجة وإعطائها المسار المحلي <code>avatarLocalPath</code>.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>updatedUser</code></td>
                        <td><span className="badge">ChatUser</span></td>
                        <td>المستخدم في صورته النهائية بعد تزويده بالمسار المحلي لصورته.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - لا ترجع شيئاً، فقط قم بتحديث سجل المستخدم في قاعدة بياناتك.</p>

                <h3 style={{ marginTop: '3rem' }}><code>onBackgroundDownloaded</code> (حفظ تحديث الخلفية)</h3>
                <p>تُستدعى بعد تحميل صورة الخلفية بنجاح عبر النظام المدمج.</p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الاسم (Name)</th>
                        <th>النوع (Type)</th>
                        <th>الشرح (Description)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>url</code></td>
                        <td><span className="badge">String</span></td>
                        <td>رابط الصورة التي تم تحميلها.</td>
                      </tr>
                      <tr>
                        <td><code>localPath</code></td>
                        <td><span className="badge">String</span></td>
                        <td>المسار المحلي النهائي بعد الحفظ.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>القيمة المُرجعة:</strong> <code>Future&lt;void&gt;</code> - لا ترجع شيئاً، فقط احفظ الإعدادات في قاعدة بياناتك.</p>

                <h3 style={{ marginTop: '2rem' }}>مثال شامل (دوال التحميل المدمجة - الداخلي):</h3>
                <CodeWrapper><pre><code>{`ChatScreen(
  // 1. تحديد المجلدات الخاصة بالمكتبة
  chatMediaFolderName: 'chat_123_media',
  chatUsersFolderName: 'my_app_users_avatars',
  
  // 2. استلام الرسالة المُحدثة وحفظها
  onMessageDownloaded: (Message updatedMessage) async { 
    print("نجح التحميل المدمج لمرفق الرسالة!");
    // هنا تقوم عادة بحفظ updatedMessage في قاعدة بياناتك لتعمل لاحقاً بدون إنترنت
  },
  
  // 3. استلام المستخدم المُحدث وحفظه
  onUserAvatarDownloaded: (ChatUser updatedUser) async { 
    print("صورة المستخدم \${updatedUser.name} أصبحت متوفرة محلياً (Offline)");
    // هنا تقوم عادة بحفظ updatedUser في قاعدة بياناتك
  },
  
  // 4. استلام مسار الخلفية المُحدث وحفظه
  onBackgroundDownloaded: (String url, String localPath) async { 
    print("تم حفظ الخلفية بنجاح إلى: $localPath");
    // هنا تحفظ المسار في إعدادات التطبيق الخاصة بك
  },
)`}</code></pre></CodeWrapper>
              </div>

              {/* Models Placeholder */}
              <div id="model-user" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>النماذج (Models)</h2>

                <h3><code>ChatUser</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>id</code></td><td><span className="badge">String</span></td><td>المعرف الفريد للمستخدم، أساسي لربط الرسائل بصاحبها.</td></tr>
                      <tr><td><code>name</code></td><td><span className="badge">String</span></td><td>الاسم الكامل للمستخدم الذي سيظهر فوق رسالته وفي اعلا المحادثه الفردية.</td></tr>
                      <tr><td><code>avatarUrl</code></td><td><span className="badge">String?</span></td><td>رابط الصورة الشخصية عبر الإنترنت. إذا لم يتوفر سيظهر الحرف الأول من اسمه.</td></tr>
                      <tr><td><code>avatarLocalPath</code></td><td><span className="badge">String?</span></td><td>مسار الصورة المخزنة محلياً في الهاتف لتقليل استهلاك الإنترنت. تضاف لاحقا باستخدام دوال تحميل المكتبة او الدوال التي يقوم الامستخدم باعدادها</td></tr>
                      <tr><td><code>isOnline</code></td><td><span className="badge">bool</span></td><td>مؤشر الاتصال (true/false). (يجب تحديثه يدويا_ يسجل ب true عندما يدخل المستخدم للتطبيق ويسجل ب false عند خروجة)</td></tr>
                      <tr><td><code>lastSeen</code></td><td><span className="badge">DateTime?</span></td><td>الوقت الدقيق لآخر ظهور. (يجب ان يرسل بشكل نبضات متتابعه كل 4 ثواني)</td></tr>
                      <tr><td><code>lastSeenVisible</code></td><td><span className="badge">bool</span></td><td>للخصوصية. إذا كانت false لن يظهر وقت اخر ظهور الدقيق (قبل 5 دقائق) بل سيظهر تقريباً (آخر ظهور قريباً).</td></tr>
                      <tr><td><code>role</code></td><td><span className="badge">String?</span></td><td>رتبة المستخدم (Admin, Owner).</td></tr>
                      <tr><td><code>canDeleteOtherPeopleMessages</code></td><td><span className="badge">bool</span></td><td>إعطاء هذا المستخدم صلاحية حذف رسائل الآخرين (للمشرفين).</td></tr>
                      <tr><td><code>maxUserReactionsPerMessage</code></td><td><span className="badge">int</span></td><td>عدد الإيموجيات التي يُسمح للمستخدم بوضعها على نفس الرسالة (الافتراضي 1).</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="model-message" style={{ marginTop: '3rem' }}><code>Message</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>id</code></td><td><span className="badge">int</span></td><td>معرف الرسالة الفريد في السيرفر. (يستخدم كذالك لترتيب تسلسل الرسائل)</td></tr>
                      <tr>
                        <td><code>type</code></td>
                        <td><span className="badge">MessageType</span></td>
                        <td>
                          نوع الرسالة.
                          <ul style={{ margin: 0, paddingRight: '1.5rem' }}>
                            <li><code>MessageType.text</code>: رسالة نصية بسيطة.</li>
                            <li><code>MessageType.image</code>: صورة فردية.</li>
                            <li><code>MessageType.video</code>: فيديو فردي.</li>
                            <li><code>MessageType.audio</code>: ملف صوتي عادي (مثل MP3) يُعرض مع شريط تقدم.</li>
                            <li><code>MessageType.voice</code>: تسجيل صوتي مُسجل مباشرة من المحادثة (تُعرض له موجات صوتية Waveforms).</li>
                            <li><code>MessageType.document</code>: ملف مستند (PDF أو غيره).</li>
                            <li><code>MessageType.location</code>: موقع جغرافي (خريطة).</li>
                            <li><code>MessageType.mediaGroup</code>: مجموعة صور وفيديوهات دُمجت في رسالة واحدة تُعرض كشبكة.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr><td><code>senderId</code></td><td><span className="badge">String</span></td><td>معرف المستخدم الذي أرسلها، (يجب ان يكون ال id موجود ضمن الأشخاص المذكورين داخل المحادثه ChatUser)</td></tr>
                      <tr><td><code>text</code></td><td><span className="badge">String</span></td><td>النص المحتوى في الرسالة.</td></tr>
                      <tr><td><code>attachments</code></td><td><span className="badge">List&lt;MessageAttachment&gt;?</span></td><td>المرفقات MessageAttachment (الصور، الفيديوهات المرفقة مع الرسالة).</td></tr>
                      <tr><td><code>time</code></td><td><span className="badge">DateTime</span></td><td>وقت الإرسال.</td></tr>
                      <tr>
                        <td><code>status</code></td>
                        <td><span className="badge">MessageStatus</span></td>
                        <td>
                          حالة الرسالة:
                          <ul style={{ margin: 0, paddingRight: '1.5rem' }}>
                            <li><code>MessageStatus.sending</code>: قيد الإرسال (تظهر أيقونة ساعة دائرية).</li>
                            <li><code>MessageStatus.sent</code>: تم الاستلام في السيرفر (علامة صح واحدة رمادية).</li>
                            <li><code>MessageStatus.delivered</code>: تم الاستلام في جهاز المستقبل (علامتي صح رمادية).</li>
                            <li><code>MessageStatus.read</code>: تمت القراءة (علامتي صح زرقاء).</li>
                            <li><code>MessageStatus.failed</code>: فشل الإرسال (دائرة بداخلها علامة تعجب حمراء للفت الانتباه).</li>
                          </ul>
                        </td>
                      </tr>
                      <tr><td><code>readBy</code></td><td><span className="badge">List&lt;MessageReadReceipt&gt;</span></td><td>قائمة بأشخاص من نوع MessageReadReceipt لبيان من قرأ الرسالة في المجموعات بشكل مخصص.</td></tr>
                      <tr><td><code>reactions</code></td><td><span className="badge">List&lt;MessageReaction&gt;</span></td><td>قائمة التفاعلات (الإيموجيات التي وُضعت أسفل الرسالة).</td></tr>
                      <tr><td><code>replyToMessageId</code></td><td><span className="badge">int?</span></td><td>معرف الرسالة التي يتم الرد عليها ان وجدت.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="model-attachment" style={{ marginTop: '3rem' }}><code>MessageAttachment</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>title</code></td><td><span className="badge">String?</span></td><td>عنوان الملف.</td></tr>
                      <tr><td><code>url</code></td><td><span className="badge">String</span></td><td>الرابط المباشر للملف في الإنترنت للتحميل المباشر.</td></tr>
                      <tr><td><code>localPath</code></td><td><span className="badge">String?</span></td><td>مسار الملف المخزن محلياً في الهاتف لتقليل استهلاك الإنترنت. تضاف لاحقا باستخدام دوال تحميل المكتبة او الدوال التي يقوم المستخدم باعدادها</td></tr>
                      <tr><td><code>durationSeconds</code></td><td><span className="badge">int?</span></td><td>مدة المقطع الصوتي أو المرئي بالثواني.</td></tr>
                      <tr><td><code>width / height</code></td><td><span className="badge">double?</span></td><td>أبعاد الصورة أو الفيديو. المكتبة تستخدمها لحجز مساحة دقيقة في الشاشة قبل حتى أن يبدأ التحميل لمنع القفزات المزعجة للشاشة</td></tr>
                      <tr>
                        <td><code>mimeType</code></td>
                        <td><span className="badge">String?</span></td>
                        <td>
                          نوع الملف, يدعم الكلاس استنتاج هذه الأنواع : (مهم)<br />
                          <strong>الصور:</strong> image/jpeg, image/png, image/gif, image/webp, image/heic, image/bmp, image/tiff, image/svg+xml<br />
                          <strong>الفيديو:</strong> video/mp4, video/quicktime, video/x-matroska, video/x-msvideo, video/webm, video/3gpp<br />
                          <strong>المستندات:</strong> application/pdf, application/msword, application/json, application/zip, text/plain, text/csv وغيرها.
                        </td>
                      </tr>
                      <tr><td><code>type</code></td><td><span className="badge">MessageType?</span></td><td>نوع المرفق الصريح من الـ MessageType (مهم). يمكن أن يكون: MessageType.image للصورة، MessageType.video للفيديو، MessageType.audio للصوت، MessageType.voice للبصمة الصوتية، MessageType.document للملفات، أو MessageType.location للخرائط.</td></tr>
                      <tr><td><code>thumbnailUrl</code></td><td><span className="badge">String?</span></td><td>رابط الانترنيت المباشر للصورة المصغرة (Cover) لكل أنواع المرفقات عدا البصمه الصوتية.</td></tr>
                      <tr><td><code>thumbnailLocalPath</code></td><td><span className="badge">String?</span></td><td>مسار الصورة المصغرة المخزن محلياً في الهاتف لتقليل استهلاك الإنترنت. تضاف لاحقا باستخدام دوال تحميل المكتبة او الدوال التي يقوم المستخدم باعدادها</td></tr>
                      <tr><td><code>latitude, longitude, locationName</code></td><td><span className="badge">double?, double?, String?</span></td><td>إحداثيات واسم المكان لرسائل الخرائط.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="model-read-receipt" style={{ marginTop: '3rem' }}><code>MessageReadReceipt</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>userId</code></td><td><span className="badge">String</span></td><td>معرف المستخدم الذي قرأ الرسالة.</td></tr>
                      <tr><td><code>readAt</code></td><td><span className="badge">DateTime</span></td><td>الوقت الدقيق الذي تمت فيه القراءة.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="model-reaction" style={{ marginTop: '3rem' }}><code>MessageReaction</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>emoji</code></td><td><span className="badge">String</span></td><td>الرمز التعبيري المعروض (مثل ❤️ أو 😂).</td></tr>
                      <tr><td><code>entries</code></td><td><span className="badge">List&lt;MessageReactionEntry&gt;</span></td><td>قائمة من كلاس MessageReactionEntry لمعرفة من وضع هذا الإيموجي.</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="model-reaction-entry" style={{ marginTop: '3rem' }}><code>MessageReactionEntry</code></h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>الحقل (Field)</th>
                        <th>النوع (Type)</th>
                        <th>الوصف الدقيق</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>userId</code></td><td><span className="badge">String</span></td><td>معرف المستخدم الذي تفاعل بهذا الإيموجي.</td></tr>
                      <tr><td><code>reactedAt</code></td><td><span className="badge">DateTime</span></td><td>الوقت الذي حدث فيه التفاعل.</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Developer Info Section */}
              <div id="developer-info" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>مصمم ومطور الحزمة</h2>
                <div style={{ background: 'linear-gradient(145deg, var(--gradient-start) 0%, var(--gradient-end) 100%)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--card-border-strong)', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
                  {/* Background glow */}
                  <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: '0.15', zIndex: 0 }}></div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <img src="assets/developer.jpg" alt="Developer Avatar" style={{ width: '100px', height: '100px', borderRadius: '50px', objectFit: 'cover', border: '4px solid var(--card-border-strong)', marginBottom: '0', boxShadow: '0 0 20px var(--accent-glow)' }} />
                    <h2 style={{ color: 'var(--text-primary)', marginTop: '0', marginBottom: '0.2rem', fontSize: '2.2rem', fontWeight: '900', letterSpacing: '1px' }}>Ameer Imad</h2>
                    <h3 style={{ color: 'var(--text-secondary)', marginTop: '0', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 'normal' }}>مصمم ومطور الحزمة</h3>
                    <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '2px', fontSize: '0.9rem' }}>FLUTTER & FRONTEND DEVELOPER</p>

                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
                      بنيت هذه الحزمة لتكون الحل الشامل الذي يجمع بين جمال التصميم ومرونة التخصيص المطلقة. لقد كتبتها وكأني أصممها لمشروعي الخاص، لتختصر عليك الوقت والجهد وتمنح تطبيقك طابعاً احترافياً يليق بك. أتمنى أن تكون إضافة قوية لمشاريعك القادمة!
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a href="https://github.com/AmeerImad" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem 2rem', background: 'var(--text-primary)', color: 'var(--bg-color)', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        تابعني على Github
                      </a>
                      <a href="https://instagram.com/ameerimad99" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem 2rem', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(220, 39, 67, 0.4)' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        تواصل عبر الانستكرام
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestions Section */}
              <div id="suggestions" style={{ marginBottom: '6rem' }}>
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>اقتراحات التعديلات والمساهمة</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.8rem' }}>

                  {/* Card 1 */}
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #3b82f6', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>لديك فكرة لميزة جديدة؟</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>إذا كانت لديك فكرة رائعة لتحسين الحزمة أو إضافة ميزة جديدة غير موجودة، نرحب جداً باقتراحاتك. يمكنك فتح "Issue" جديد على Github وسنقوم بمناقشتها وإضافتها.</p>
                    <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Feature]%20" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#3b82f6', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>تقديم اقتراح (Feature Request)</a>
                  </div>

                  {/* Card 2 */}
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #ef4444', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>وجدت خطأ برمجي (Bug)؟</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>لا يوجد كود يخلو من الأخطاء. إذا واجهت أي مشكلة أو سلوك غير متوقع، يرجى إبلاغنا فوراً وسنعمل على إطلاق تحديث سريع لحل المشكلة.</p>
                    <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Bug]%20" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#ef4444', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>الإبلاغ عن خطأ (Report Bug)</a>
                  </div>

                  {/* Card 3 */}
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #10b981', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>تحسين هذا التوثيق</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>إذا رأيت خطأ إملائي، أو لديك شرح أفضل لأحد الدوال، يمكنك إجراء Pull Request على مستودع التوثيق وسنكون ممتنين جداً لك!</p>
                    <a href="https://github.com/FluidUI-Kits/chat_screen_docs" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#10b981', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>تعديل التوثيق (Edit Docs)</a>
                  </div>

                  {/* Card 4 */}
                  <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #a855f7', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>مشاركة تطبيقك</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>هل استخدمت حزمتنا في بناء تطبيقك؟ يسعدنا جداً رؤية إبداعك! شاركنا صور أو رابط تطبيقك لنقوم بعرضه ضمن قسم التطبيقات المميزة.</p>
                    <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Showcase]%20My%20App" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#a855f7', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>شارك تطبيقك (Showcase)</a>
                  </div>

                </div>
              </div>

              {/* Copyright Footer */}
              <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '4rem', borderTop: '1px solid #333', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Ameer Imad. جميع الحقوق محفوظة.
              </footer>

            </div>
          </main>
        </div>
      )}

      {lightbox && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setLightbox(null)}>
          <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', cursor: 'pointer', padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setLightbox(null)}>
            <X size={24} />
          </div>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {lightbox.type === 'image' ? (
              <img src={lightbox.src} style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} />
            ) : (
              <video src={lightbox.src} controls autoPlay style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}



