import { CodeWrapper } from './components/CodeWrapper';
import { Pricing } from './components/Pricing';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import './App.css';

interface AppLangProps { currentLang: 'ar' | 'en'; onToggleLanguage: () => void; theme?: 'light' | 'dark'; onToggleTheme?: () => void; page?: 'docs' | 'pricing'; onNavigate?: (page: 'docs' | 'pricing') => void; }
export default function AppEn({ currentLang, onToggleLanguage, theme, onToggleTheme, page = 'docs', onNavigate }: AppLangProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{src: string, type: 'image'|'video'} | null>(null);

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
    <div className="app-wrapper" dir="ltr">
      <TopBar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} currentLang={currentLang} onToggleLanguage={onToggleLanguage} theme={theme} onToggleTheme={onToggleTheme} onNavigate={onNavigate} page={page} />

      {page === 'pricing' ? (
        <div style={{ paddingTop: '60px' }}>
          <Pricing onNavigate={onNavigate || (() => {})} lang="en" />
        </div>
      ) : (
      <div className="main-container">
        <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        <Sidebar activeId={activeSection} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} lang="en" />

        <main className="content-wrapper">
          <div className="content-inner animate-fade-in" style={{ paddingBottom: '2rem' }}>

            {/* Hero Section */}
            <div id="hero" style={{ marginBottom: '6rem', textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>Chat Screen Documentation</h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                The perfect solution for integrating professional chat interfaces into your Flutter apps. Absolute flexibility, supreme performance, and endless customization.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <button className="btn" style={{ background: '#a855f7', color: 'white', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)' }} onClick={() => onNavigate?.('pricing')}>
                  Purchase Page
                </button>
              </div>

              {/* Platform Support - Official Style */}
              <div style={{ marginTop: '4rem', maxWidth: '600px', margin: '4rem auto 0', textAlign: 'left', animation: 'fadeInUp 0.8s ease-out' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                  Supported Platforms
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Android</span>
                    <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      100% Supported
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>iOS</span>
                    <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      100% Supported
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Desktop (Win / macOS / Linux)</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Coming Soon
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Web</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Coming Soon
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Demo App Section */}
            <div id="demo-app" style={{ marginBottom: '6rem', background: 'var(--card-bg)', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #a855f7, #10b981)' }}></div>
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>Try the Chat Screen Demo Now!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
                We have provided a fully integrated demo app so you can test all features, customizations, and performance before integrating the package into your project. Download it now from Google Play or directly from GitHub.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Google Play Button */}
                <div style={{ position: 'relative' }} title="Coming Soon">
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--accent-primary)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', zIndex: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Coming Soon</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#000000', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 'bold', border: '1px solid #333', opacity: 0.5, cursor: 'not-allowed' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.505-1.328V3.142c0-.528.2-.1.504-1.328zM14.772 11.02l4.981-2.88c1.666-.964 1.666-2.529 0-3.493L5.342 1.344a1.86 1.86 0 0 0-.82-.249l10.25 9.925zM14.772 12.98L4.522 22.905a1.86 1.86 0 0 1 .82-.249l14.411-8.303c1.666-.964 1.666-2.529 0-3.493l-4.981 2.88zM20.25 12l2.67-1.543a2 2 0 0 0 0-3.464l-2.67-1.543L16 12l4.25 6.55z"/></svg>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Get it on</div>
                      <div style={{ fontSize: '1.1rem', margin: 0, padding: 0, lineHeight: 1 }}>Google Play</div>
                    </div>
                  </div>
                </div>
                
                {/* GitHub APK Button */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', zIndex: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Available Now</div>
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
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '3rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Features Gallery</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                
                {/* 0. theme_types.jpg (Full width) */}
                <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({src: 'assets/media/theme_types.jpg', type: 'image'})} >
                  <img src="assets/media/theme_types.jpg" alt="Multiple Themes Customization" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Multiple Themes Customization (Themes)</div>
                </div>
                
                {/* 1. msg_types.jpg (Full width) */}
                <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({src: 'assets/media/msg_types.jpg', type: 'image'})} >
                  <img src="assets/media/msg_types.jpg" alt="Multiple Message Types" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Multiple Message Types</div>
                </div>

                {/* 2. chat_types.jpg (Half width) */}
                <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({src: 'assets/media/chat_types.jpg', type: 'image'})} >
                  <img src="assets/media/chat_types.jpg" alt="Conversation Types" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Individual & Group Conversations</div>
                </div>

                {/* 3. reply_system.jpg (Half width) */}
                <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({src: 'assets/media/reply_system.jpg', type: 'image'})} >
                  <img src="assets/media/reply_system.jpg" alt="Reply System" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Message Reply System</div>
                </div>

                {/* 4. share_menu.jpg (Full width) */}
                <div style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => setLightbox({src: 'assets/media/share_menu.jpg', type: 'image'})} >
                  <img src="assets/media/share_menu.jpg" alt="Share Menu" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Attachments & Share Menu</div>
                </div>

                {/* 5. pin_system.jpg (Half width) */}
                <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({src: 'assets/media/pin_system.jpg', type: 'image'})} >
                  <img src="assets/media/pin_system.jpg" alt="Pin Messages" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Pinned Messages System</div>
                </div>

                {/* 6. multiselect.jpg (Half width) */}
                <div style={{ background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => setLightbox({src: 'assets/media/multiselect.jpg', type: 'image'})} >
                  <img src="assets/media/multiselect.jpg" alt="Multi Select" style={{ width: '100%', display: 'block', objectFit: 'contain' }} loading="lazy" />
                  <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Multi-select System</div>
                </div>

              </div>
            </div>
            {/* Core Features */}
            <div id="core-features" style={{ marginBottom: '6rem' }}>
                                          <h2 style={{ color: 'var(--accent-primary)', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Core Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.8rem' }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>💬 Comprehensive Chat Support</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Fully integrated system for both individual and group conversations seamlessly.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📎 Rich Message Types</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Support for 8 types: Text, Image, Video, Group Media, Audio, Voice, Map, Document.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🎨 Absolute Customization</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Total control over UI colors, font sizes, and custom backgrounds for each individual chat.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🏷️ Chat Identity</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Customizable names and icons for both personal and group chats.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🧩 Advanced UI Integration</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Professional API functions to easily inject your own custom features into the chat UI.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📏 Smart Message Spacing</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Automated and intelligent message spacing conforming to global chat application standards.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🌍 Multi-language & RTL</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Perfect compatibility with Arabic and English, including full LTR & RTL support.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🕒 Last Seen Visibility System</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Shows exact time when enabled (e.g., '1 min ago'), or approximate time when hidden ('seen recently').</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>💬 Message Replies</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Seamless nested reply system for messages inside the chat.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>✏️ Message Editing</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Easily edit previously sent messages at any time.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🗑️ Deletion & Undo</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Secure message deletion system featuring an Undo Snackbar for accidental actions.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>☑️ Multi-Selection</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Select multiple messages simultaneously for copying, deleting, or forwarding.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📥 Smart Media Downloader</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Intelligent, lightning-fast media handling with isolated file management per chat.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🖼️ Advanced Media Viewer</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Fast, built-in viewer that supports nearly all media and document types in high resolution.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#10b981' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🎙️ Voice Notes System</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Integrated system for recording, playback, and rendering of voice messages.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#f59e0b' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📸 Built-in Camera</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Capture photos and videos instantly using an in-chat native camera player.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#ec4899' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📍 Location Sharing</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Quick sharing of your current or customized geographical locations on the map.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>❤️ Quick Reactions</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Smooth and fast message reactions triggered by long-press or double-tap gestures.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#a855f7' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>📌 Pinned Messages</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Pin important messages to the top of the chat for quick and easy reference.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0rem 0.8rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#3b82f6' }}></div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>🔍 Jump to Message</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>Ability to instantly navigate to and highlight a specific message in the chat history.</p>
                </div>
              </div>
            </div>


            {/* Installation */}
            <div id="install" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Installation & Setup</h2>
              <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Install via Github</h3>
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
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Quick Start</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.4' }}>To start using the chat, simply call the <code>ChatScreen</code> widget and pass the core variables as shown in the following example:</p>
              <CodeWrapper><pre>
                <code>{`import 'package:chat_screen/chat_screen.dart';

ChatScreen(
  currentUser: ChatUser(
    id: "me",
    name: "Me",
  ),
  otherPeople: [
    ChatUser(
      id: "other",
      name: "Ahmed",
    ),
  ],
  initialMessages: [],
)`}</code>
              </pre></CodeWrapper>
            </div>

            {/* Functions Index */}
            <div id="functions-index" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Quick Reference Index</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>You can browse the index below to quickly navigate to different sections of the documentation.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                <a href="#basic-settings" onClick={(e) => { e.preventDefault(); document.getElementById('basic-settings')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚙️</span> Basic Settings
                </a>
                <a href="#chat-config" onClick={(e) => { e.preventDefault(); document.getElementById('chat-config')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛠</span> UI Settings (ChatConfig)
                </a>
                <a href="#chat-theme" onClick={(e) => { e.preventDefault(); document.getElementById('chat-theme')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>🎨</span> Colors & Design (ChatTheme)
                </a>
                <a href="#messaging-functions" onClick={(e) => { e.preventDefault(); document.getElementById('messaging-functions')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>💬</span> Send & Receive Messages
                </a>
                <a href="#builtin-download" onClick={(e) => { e.preventDefault(); document.getElementById('builtin-download')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>📥</span> Built-in Download Functions
                </a>
                <a href="#model-user" onClick={(e) => { e.preventDefault(); document.getElementById('model-user')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ textDecoration: 'none', background: 'var(--card-bg)', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                  <span style={{ fontSize: '1.5rem' }}>📦</span> Models
                </a>
              </div>
            </div>

            {/* 2. Basic Variables */}
            <div id="basic-variables" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Basic Variables</h2>
              <p>These are the most important variables you need to define when creating the chat to customize the UI and core data.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>title</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Chat name (custom 1-on-1 name or group name). This appears prominently in the middle of the chat's App Bar.</p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatIconImageUrl</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>The direct URL for the group chat image or custom 1-on-1 image. It is displayed as a circle in the App Bar next to the name.</p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatBackgroundImageUrl</code> & <code>backgroundImageLocalPath</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Custom background image for this chat:</p>
                  <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                    <li><code>chatBackgroundImageUrl</code>: Image URL from the internet.</li>
                    <li><code>backgroundImageLocalPath</code>: Local path of the image on the user's device (set automatically using built-in download functions or custom ones provided by the user).</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>appPackageName</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>The app package name (e.g., com.mycompany.myapp). Used to ensure the OpenStreetMap / Location Picker service runs smoothly without being blocked by map servers.</p>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>currentUser</code> & <code>otherPeople</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Identity of chat participants:</p>
                  <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                    <li><code>currentUser</code>: A <code>ChatUser</code> object representing you (the current app user).</li>
                    <li><code>otherPeople</code>: A List of <code>ChatUser</code> representing other people. In a 1-on-1 chat it contains one person, and in groups it contains the rest of the members.</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>initialMessages</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>The messages displayed when entering the chat. It's recommended to be between 20 to 80 messages for a smooth experience. After entering the chat, Stream functions allow you to add incoming/outgoing messages and fetch more messages.</p>
                  <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginTop: '1rem' }}>
                    <strong style={{ color: '#ffb300' }}>Note regarding Unread Banner:</strong>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>If you want the chat to start from the first unread message and display the unread messages banner in the middle, pass the first unread message ID to <code>firstUnreadMessageId</code>.</p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Also, pass the following to <code>initialMessages</code>:</p>
                    <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem', marginBottom: '0.5rem' }}>
                      <li>20 messages before the first unread message</li>
                      <li>The first unread message itself</li>
                      <li>3 to 5 recent messages after it</li>
                    </ul>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Enable the property <code>startFromFirstUnreadMessage: true</code>.</p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Inform the chat about the total unread messages in the database using <code>unreadCountInCurrentChat</code>.</p>
                  </div>
                </div>
              </div>

              <h3 style={{ marginTop: '3rem', color: 'var(--accent-primary)' }}>Code Example</h3>


              <h4>Example 1: 1-on-1 Chat</h4>
<CodeWrapper><pre><code>{`ChatScreen(
  currentUser: ChatUser(id: "user_me", name: "Me", avatarUrl: "..."),
  otherPeople: [
    ChatUser(id: "user_other", name: "Ahmed", avatarUrl: "..."),
  ],
  initialMessages: [
    Message(
      id: 1,
      senderId: "user_other",
      text: "Hello Ahmed, how are you?",
      time: DateTime.now().subtract(const Duration(minutes: 5)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
    Message(
      id: 2,
      senderId: "user_me",
      text: "Welcome! I am fine, thank God.",
      time: DateTime.now().subtract(const Duration(minutes: 4)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
  ],
  backgroundImageUrl: "https://example.com/wallpapers/chat_bg.jpg",
  appPackageName: "com.mycompany.chatapp",
)`}</code></pre></CodeWrapper>

              <h4 style={{ marginTop: '2rem' }}>Example 2: Group Chat</h4>
<CodeWrapper><pre><code>{`ChatScreen(
  isGroupChat: true,
  title: "Flutter Developers Group",
  chatIconImageUrl: "https://example.com/group_icon.png",
  currentUser: ChatUser(id: "user_me", name: "Me", avatarUrl: "..."),
  otherPeople: [
    ChatUser(id: "user_2", name: "Ali", avatarUrl: "..."),
    ChatUser(id: "user_3", name: "Omar", avatarUrl: "..."),
    ChatUser(id: "user_4", name: "Salem", avatarUrl: "..."),
  ],
  initialMessages: [
    Message(
      id: 1,
      senderId: "user_2",
      text: "Peace be upon you guys",
      time: DateTime.now().subtract(const Duration(minutes: 10)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
    Message(
      id: 2,
      senderId: "user_3",
      text: "And peace be upon you",
      time: DateTime.now().subtract(const Duration(minutes: 9)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    ),
  ],
  backgroundImageUrl: "https://example.com/wallpapers/group_bg.jpg",
  appPackageName: "com.mycompany.chatapp",
)`}</code></pre></CodeWrapper>

              <h4 style={{ marginTop: '2rem' }}>Example 3: Enable Unread Banner</h4>
              <p style={{ color: 'var(--text-secondary)' }}>A brief showing how to jump to the first unread message and display the alert banner in the middle of the chat, applying the rule (20 messages before + the message itself + 3-5 recent messages after).</p>
<CodeWrapper><pre><code>{`ChatScreen(
  initialMessages: [
    // 1. 20 messages before the unread message (old read messages)
    ...List.generate(20, (index) => Message(
      id: index + 1,
      senderId: "user_other",
      text: "Previous read message \${index}",
      time: DateTime.now().subtract(Duration(days: 1, minutes: 20 - index)),
      status: MessageStatus.read,
      readBy: [MessageReadReceipt(userId: 'user_me', readAt: baseTime.add(const Duration(minutes: 1)))],
    )),

    // 2. The first unread message itself (which the user jumps to)
    Message(
      id: 105, // same number passed to firstUnreadMessageId
      senderId: "user_other",
      text: "This is the first unread message (alert banner starts here)",
      time: DateTime.now().subtract(const Duration(hours: 2)),
      status: MessageStatus.delivered,
    ),

    // 3. Messages after it (3 to 5 recent unread messages)
    Message(
      id: 106,
      senderId: "user_other",
      text: "Another new message",
      time: DateTime.now().subtract(const Duration(hours: 1)),
      status: MessageStatus.delivered,
    ),
    Message(
      id: 107,
      senderId: "user_other",
      text: "Are you there?",
      time: DateTime.now().subtract(const Duration(minutes: 30)),
      status: MessageStatus.delivered,
    ),
  ],
  
  // Enable starting from the unread message
  startFromFirstUnreadMessage: true,
  
  // ID of the first unread message to focus on
  firstUnreadMessageId: 105, 
  
  // Total number of unread messages in DB (to show in the banner)
  unreadCountInCurrentChat: 15,
)`}</code></pre></CodeWrapper>
            </div>

            {/* 2. Basic Settings */}
            <div id="basic-settings" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Basic Settings</h2>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>isGroupChat</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>Enable group chat features (like member count, sender image next to the bubble, sender name, role).</td>
                    </tr>
                    <tr>
                      <td><code>ifNoFoundUserImageShowDefaultImageOrFirstCharName</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>If a user has no image: When enabled (true) the first letter of their name appears, when disabled (false) the built-in default image appears.</td>
                    </tr>
                    <tr>
                      <td><code>alignMessagesToBottom</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>If there are few messages, do they stick to the bottom like WhatsApp (true) or stay at the top (false)?</td>
                    </tr>
                    <tr>
                      <td><code>showAllMediaInGroupMedia</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>In case of multiple images in a message, should they all be displayed as a grid, or limited to 4 squares with the rest shown as (+6)?</td>
                    </tr>
                    <tr>
                      <td><code>emojiReactionShowCountOnlyWithEmoji</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>If disabled, reactors' images will show. If enabled, only a number will appear next to the emoji (e.g., ❤️ 5) to reduce clutter.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '3rem', color: 'var(--accent-primary)' }}>Additional Settings (Groups Only)</h3>
              <div style={{ background: 'rgba(3, 169, 244, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #03a9f4', marginBottom: '1.5rem' }}>
                <p style={{ margin: 0, color: 'var(--text-primary)' }}><strong>Note:</strong> All properties below require the variable <code>isGroupChat = true</code> to work.</p>
              </div>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>showUserNameInBubble</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>Show User Name: Displays the sender's name inside the bubble (Name only without the role).</td>
                    </tr>
                    <tr>
                      <td><code>showRoleInBubble</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>Show Role: Displays the role (Admin/Owner) and the name even if the name option is disabled!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Chat Controller */}
            <div id="chat-controller" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Central Controller (ChatController)</h2>
              <p>The controller is the brain of the chat interface. This class is designed to give you absolute control over the screen.</p>
              <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--accent-primary)', marginBottom: '2rem', textAlign: 'center' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>The Golden Rule:</strong> Everything you pass to ChatScreen can also be passed directly into ChatController!
              </div>

              <h3>State Management and Smart Architecture</h3>
              <p>The library relies on a solid architecture that puts you in control to avoid state conflicts. It provides two options for state management:</p>
              <ul>
                <li><strong>1. Automatic Internal Controller:</strong> Created automatically when passing data directly to ChatScreen (for quick use). It automatically disposes itself when the screen is closed.</li>
                <li><strong>2. Professional External Controller (ChatController):</strong> Its contents are exactly the same as ChatScreen, but it offers powerful additional features. It does not dispose when the user exits the screen, ensuring your messages and data remain safe (Caching) so you can use them freely anywhere else in the app!</li>
              </ul>

              <h3>Smart Priority for Variables</h3>
              <p>If you define data in <code>ChatController</code>, the screen fully relies on it and ignores any values passed directly to it. But if left empty in the controller, the screen feeds it with the passed values.</p>

              <div style={{ background: 'rgba(255, 87, 34, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ff5722', margin: '1.5rem 0' }}>
                <strong style={{ color: '#ff5722' }}>Note to Avoid Errors:</strong>
                <p style={{ margin: 0, marginTop: '0.5rem' }}>It is preferable when using a controller to fully rely on it, or completely leave it out (passing everything to the screen) to avoid conflicts.</p>
              </div>

              <h3>Example Showing Usage Flexibility:</h3>

              <h4>Option 1: Quick Simple Usage</h4>
<CodeWrapper><pre><code>{`ChatScreen(
  currentUser: myUser,
  isGroupChat: true,
)`}</code></pre></CodeWrapper>

              <h4 style={{ marginTop: '2rem' }}>Option 2: Advanced Usage (Controller)</h4>
<CodeWrapper><pre><code>{`final myController = ChatController(isGroupChat: false);

ChatScreen(
  controller: myController,
  
  // This value will be completely ignored, because priority is given to the controller!
  isGroupChat: true, 
)`}</code></pre></CodeWrapper>
            </div>

            {/* 3.1 ChatConfig */}
            <div id="chat-config" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>UI Settings (ChatConfig)</h2>
              <p>A dedicated class for controlling the chat design and layout, such as bubble shapes, directions (RTL/LTR), emojis, and backgrounds.</p>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>bubbleType</code></td>
                      <td><span className="badge">BubbleType</span></td>
                      <td>The type and shape of the message bubble. Supports: <code>BubbleType.classic</code> (WhatsApp style) or <code>BubbleType.imessage</code> (smooth rounded style).</td>
                    </tr>
                    <tr>
                      <td><code>translations</code></td>
                      <td><span className="badge">ChatTranslations</span></td>
                      <td>Pass the translation object to change screen languages and texts (detailed explanation below).</td>
                    </tr>
                    <tr>
                      <td><code>allAppDirectionality</code></td>
                      <td><span className="badge">TextDirection</span></td>
                      <td>The general direction of the entire library (RTL for right-to-left, LTR for left-to-right).</td>
                    </tr>
                    <tr>
                      <td><code>appBarDirection</code><br /><code>messageBubbleDirection</code><br /><code>inputPanelDirection</code></td>
                      <td><span className="badge">TextDirection?</span></td>
                      <td>Sub-directions that override the general direction. (e.g., App is RTL, but you want message bubbles to be LTR).</td>
                    </tr>
                    <tr>
                      <td><code>defaultBackgroundAsset</code></td>
                      <td><span className="badge">String</span></td>
                      <td>Path to the default background image inside the assets folder.</td>
                    </tr>
                    <tr>
                      <td><code>defaultBackgroundAssetPackage</code></td>
                      <td><span className="badge">String?</span></td>
                      <td>The package name where the background path is located (leave null if it's in your main project).</td>
                    </tr>
                    <tr>
                      <td><code>reactionEmojis</code></td>
                      <td><span className="badge">List&lt;String&gt;</span></td>
                      <td>A list of emojis available for interacting with messages.</td>
                    </tr>
                    <tr>
                      <td><code>doubleTapReactionEmoji</code></td>
                      <td><span className="badge">String</span></td>
                      <td>The default emoji used when double-tapping a message.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '2rem' }}>Example:</h3>
<CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    bubbleType: BubbleType.imessage,
    allAppDirectionality: TextDirection.ltr,
    doubleTapReactionEmoji: '🔥',
    reactionEmojis: ['❤️', '👍', '😂', '🔥', '💯'], // Customize reaction list
    defaultBackgroundAsset: 'assets/images/my_custom_bg.jpg',
  ),
  // ... rest of settings
)`}</code></pre></CodeWrapper>
            </div>

            {/* Localization & Directions */}
            <div id="localization" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Languages, Direction & Fonts (Localization)</h2>

              <h3>Languages (ChatTranslations)</h3>
              <p>A class specifically designed to let you translate the UI into any language, or even change the default texts (for example, instead of "Online", you want it to be "متصل الآن"). The class contains over 100 customizable texts!</p>

              <h4>Constructors</h4>
              <ul>
                <li><code>ChatTranslations.arabic()</code> : Ready-to-use Arabic initialization (which is the default).</li>
                <li><code>ChatTranslations.english()</code> : Ready-to-use English initialization.</li>
                <li><code>ChatTranslations.custom(...)</code> : Fully customizable initialization to create your own language or modify specific texts.</li>
              </ul>

              <h4>Usage Examples:</h4>
              <p><strong>1. Using Built-in Languages (Arabic / English)</strong></p>
<CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    // Switch the chat interface to English with one click!
    translations: const ChatTranslations.english(),
  ),
)`}</code></pre></CodeWrapper>

              <p><strong>2. Customizing Texts (Creating a new language or modifying texts)</strong></p>
<CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    translations: const ChatTranslations.custom(
      onlineNow: 'Online 🟢', // Change the online status text
      typeMessage: 'Type your message here...', // Change the placeholder in the input box
      deleteForEveryone: 'Delete for everyone',
      reply: 'Reply to message',
      // ... and pass the rest of the 100+ variables for your custom language
    ),
  ),
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}>Smart Directions & Alignment (RTL/LTR)</h3>
              <p>Thanks to this system, you are not bound by the phone's language, you can break the rules. The UI is smart enough to understand if the user is typing in Arabic or English, and aligns the text instantly!</p>

              <h4>Full Control Over Screen Parts</h4>
              <p>The library gives you the ability to set the direction of 3 vital elements completely independent of the main app's direction:</p>
<CodeWrapper><pre><code>{`ChatScreen(
  config: ChatConfig(
    // Set the overall direction of the screen (e.g., right-to-left)
    allAppDirectionality: TextDirection.rtl,
    
    // 1. But we want the top bar (names) on the left
    appBarDirection: TextDirection.ltr,
    
    // 2. And we want the bubbles direction to be (my messages on left, their messages on right)
    messageBubbleDirection: TextDirection.ltr,
    
    // 3. Arrange the input panel buttons
    inputPanelDirection: TextDirection.rtl,
  ),
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}>Typography & Scaling</h3>
              <p>The library offers high flexibility in controlling font sizes, relying on two basic properties in <code>ChatScreen</code>:</p>

              <ul>
                <li><strong>1. <code>enableCustomFontScale</code>:</strong><br />If enabled, the app will ignore the phone's font size (OS setting), and will rely entirely and compulsorily on the scale you manually set in the next property.</li>
                <li><strong>2. <code>userFontScale</code>:</strong><br />The behavior of this smart variable depends entirely on the previous property:
                  <ul>
                    <li>If custom scaling is enabled: This variable will act as an exact and fixed scale for zooming in/out fonts (e.g., a value of 1.2 means 20% zoom for the entire app).</li>
                    <li>If custom scaling is disabled: This variable will act as a maximum limit (Max Limit) the font can reach! The font will normally follow the user's phone settings, but if the user sets their phone font too large, this variable will stop it at the limit you set to prevent UI distortion.</li>
                  </ul>
                </li>
              </ul>

              <h4>Illustrative Examples:</h4>
              <p><strong>1. Fixed Scale (Ignoring Phone Settings)</strong></p>
<CodeWrapper><pre><code>{`ChatScreen(
  // Enable custom scaling to completely ignore the user's phone settings
  enableCustomFontScale: true,
  
  // The entire app's fonts will be scaled up by 20% fixed and compulsorily
  userFontScale: 1.2, 
)`}</code></pre></CodeWrapper>

              <p><strong>2. Allow Phone Font with Max Limit Protection</strong></p>
<CodeWrapper><pre><code>{`ChatScreen(
  // Disable custom scaling to allow the font to respond to the user's phone settings
  enableCustomFontScale: false,
  
  // If the user excessively enlarges their phone font, the app will stop it
  // at 1.5 (50% zoom) and won't allow exceeding it to prevent UI distortion
  userFontScale: 1.5, 
)`}</code></pre></CodeWrapper>
            </div>

            {/* Chat Theme */}
            <div id="chat-theme" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Colors & Design (ChatTheme)</h2>
              <p>A comprehensive class for exclusive and full control over every pixel and color in the chat interface. You can customize it from scratch or use one of the built-in templates we have built for you.</p>

              <h3>Built-in Themes:</h3>
              <p>The library comes with professional, integrated templates at the click of a button:</p>
              <ul>
                <li><code>ChatTheme.dark()</code>: The classic dark theme with calm and comfortable colors.</li>
                <li><code>ChatTheme.light()</code>: The bright and luminous light theme.</li>
              </ul>

              <h3>Comprehensive Theme Customization (Custom Sub-Themes):</h3>
              <p>ChatTheme consists of 10 sub-themes for precise control over every element in the UI:</p>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Sub-Theme</th>
                      <th>Scope of Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>backgroundTheme</code></td>
                      <td>Chat screen background and blend color.</td>
                    </tr>
                    <tr>
                      <td><code>topBarTheme</code></td>
                      <td>Top bar, titles and icons of top buttons, and shadow effects.</td>
                    </tr>
                    <tr>
                      <td><code>messageBubbleTheme</code></td>
                      <td>Incoming and outgoing message bubbles, text colors, checkmarks, and roles.</td>
                    </tr>
                    <tr>
                      <td><code>inputPanelTheme</code></td>
                      <td>Bottom text input area, voice record button, and attachment colors.</td>
                    </tr>
                    <tr>
                      <td><code>attachmentMenuTheme</code></td>
                      <td>Pop-up attachment menu, camera, and location button colors.</td>
                    </tr>
                    <tr>
                      <td><code>contextMenuTheme</code></td>
                      <td>Pop-up options window (on long press on a message) and emoji bar.</td>
                    </tr>
                    <tr>
                      <td><code>messageReactionTheme</code></td>
                      <td>Colors of reaction buttons below the message and their borders based on the sender.</td>
                    </tr>
                    <tr>
                      <td><code>bannersTheme</code></td>
                      <td>Top banners like (pinned message, save user banner, success notifications).</td>
                    </tr>
                    <tr>
                      <td><code>messageListTheme</code></td>
                      <td>Date separator (Today, Yesterday) and fast scroll down button.</td>
                    </tr>
                    <tr>
                      <td><code>mediaViewerTheme</code></td>
                      <td>Full-screen media viewer screen, video loading bar colors, and location pin.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '2rem' }}>Example of using and modifying the theme:</h3>
<CodeWrapper><pre><code>{`ChatScreen(
  // You can use a built-in template
  theme: const ChatTheme.dark(), 
  
  // Or you can modify a specific part of a built-in template using copyWith (if available)
  // Or build your own theme from scratch and pass it
)`}</code></pre></CodeWrapper>
            </div>

            {/* UI Integration */}
            <div id="ui-integration" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>UI Integration Variables & Functions</h2>

              <h3>Variables</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>unreadCountInOtherChats</code></td>
                      <td><span className="badge">int?</span></td>
                      <td>External messages counter: When setting a number for this option, the number appears next to the back button at the top of the chat.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '2rem' }}>User interaction functions with various UI elements.</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Function Name</th>
                      <th>Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>onBackPressed</code></td>
                      <td>No parameters ()</td>
                      <td>When the back button in the chat top bar is pressed.</td>
                    </tr>
                    <tr>
                      <td><code>onChatTitlePressed</code></td>
                      <td>No parameters ()</td>
                      <td>When the chat title (name) at the top is pressed (e.g., to open a profile).</td>
                    </tr>
                    <tr>
                      <td><code>onChatAvatarPressed</code></td>
                      <td>No parameters ()</td>
                      <td>When the image in the chat top bar is pressed.</td>
                    </tr>
                    <tr>
                      <td><code>onMessageAvatarPressed</code></td>
                      <td><code>(ChatUser user)</code></td>
                      <td>When the image of the user next to the bubble is pressed (mostly used in groups).</td>
                    </tr>
                    <tr>
                      <td><code>onDateSeparatorTapped</code></td>
                      <td><code>(DateTime date)</code></td>
                      <td>When the date separator between messages is pressed (e.g., "Today" or an old date).</td>
                    </tr>
                    <tr>
                      <td><code>onForwardMessages</code></td>
                      <td><code>(List&lt;Message&gt; msgs)</code></td>
                      <td>Called when selecting messages and pressing the forward button. Adding this function is what makes the forward button appear in the selection bar in the first place.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Messaging Functions */}
            <div id="messaging-functions" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Send and Receive Message Functions</h2>

              <h3><code>incomingMessagesStream</code> (New Message Arrival)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>incomingMessagesStream</code></td>
                      <td><span className="badge">Stream&lt;Message&gt;?</span></td>
                      <td>A stream that continuously pumps message objects.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> Returns nothing (the message is automatically displayed on the screen as soon as it arrives).</p>
<CodeWrapper><pre><code>{`ChatScreen(
  // Pass a Stream that sends a new message every 5 seconds to simulate receiving live messages
  incomingMessagesStream: Stream.periodic(
    const Duration(seconds: 5),
    (count) => Message(
      id: 1000 + count,
      senderId: "user_other",
      text: "This is automatic message number \${count + 1} that just arrived!",
      time: DateTime.now(),
      status: MessageStatus.delivered,
    ),
  ).take(3), // We fetch only 3 messages for testing
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onSendMessageMessage</code> (Send Message)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>message</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message the user just typed (it will be in the sending state).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;Message?&gt;</code> - The same message after updating its data (like giving it an ID from the server and changing its status to sent).</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onSendMessageMessage: (Message message) async {
    // 1. The incoming message contains the temporary text and temporary ID
    print("Sending: \${message.text}");

    // 2. Simulate server connection (delay for 2 seconds)
    await Future.delayed(const Duration(seconds: 2));

    // 3. Return the message after successful operation, changing the ID and status
    print("Sent successfully to the server!");
    return message.copyWith(
      id: 999, // Real ID from the server
      status: MessageStatus.sent, // Change status to sent
    );
  },
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onMessageSentSuccessfullySound</code></h3>
              <p>This function is just a hook called to play a sound or visual effect immediately upon the success of the <code>onSendMessageMessage</code> function.</p>
              <p><strong>Parameters:</strong> No inputs ()<br /><strong>Return Value:</strong> Returns nothing.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onMessageSentSuccessfullySound: () {
    // Takes nothing and returns nothing
    // You can play a message sent sound (Haptic) here
    print("🎵 (Message sent sound: swoosh)");
  },
)`}</code></pre></CodeWrapper>
            </div>

            {/* Message Operations */}
            <div id="message-operations" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Message Operation Functions</h2>

              <h3><code>onMessagesRead</code> (Read Grouped Messages)</h3>
              <p>Called when the user reads one or more messages. It passes a list of currently read messages.<br />This event provides two types of updates:</p>
              <ul>
                <li><code>isBulkUpdate = false</code>: Update for a specific single message.</li>
                <li><code>isBulkUpdate = true</code>: Update for all unread messages in your database at once.</li>
              </ul>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>messages</code></td>
                      <td><span className="badge">List&lt;Message&gt;</span></td>
                      <td>The list of messages that just became read on the screen.<br />Note: If isBulkUpdate is true, this list might be empty, because the request means "mark all previous messages as read".</td>
                    </tr>
                    <tr>
                      <td><code>isBulkUpdate</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>Whether this update is for a batch of messages at once (True) or a single message (False).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> Returns nothing.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onMessagesRead: (List<Message> messages, bool isBulkUpdate) async {
    if (isBulkUpdate) {
      // Bulk update for everything
      print("Bulk update: Marking all messages in chat as (read)...");
    } else {
      // Update for specific messages
      final readIds = messages.map((m) => m.id).toList();
      print("Single update: Sending (read) mark for messages \${readIds.join(', ')}...");
    }

    await Future.delayed(const Duration(milliseconds: 500));
    print("Read status updated on the server!");
  }
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onMessageEdited</code> (Edit Messages)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>oldMessage</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message in its old version before editing.</td>
                    </tr>
                    <tr>
                      <td><code>newText</code></td>
                      <td><span className="badge">String</span></td>
                      <td>The new text entered by the user in the edit field.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Just a confirmation for the server, and once the operation succeeds, the library will update the text in the UI automatically.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onMessageEdited: (Message oldMessage, String newText) async {
    print("Old text was: \${oldMessage.text}");
    print("New text is: \${newText}");

    // Simulate uploading the edit to the server
    await Future.delayed(const Duration(seconds: 1));

    print("Edit saved on the server successfully!");
  },
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onMessagesDeleted</code> (Delete Messages)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>messages</code></td>
                      <td><span className="badge">List&lt;Message&gt;</span></td>
                      <td>The messages the user selected for deletion.</td>
                    </tr>
                    <tr>
                      <td><code>forEveryone</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>Did the user choose to delete for everyone or just from their device.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Once the operation is finished (Future completes), the messages will be removed from the screen immediately.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onMessagesDeleted: (List<Message> messages, bool forEveryone) async {
    // 1. Extract IDs of messages to be deleted
    final deletedIds = messages.map((m) => m.id).toList();
    print("Messages to delete: \${deletedIds.join(', ')}");

    // 2. Simulate sending a delete request to the server
    await Future.delayed(const Duration(seconds: 1));

    // 3. Print the type of deletion
    if (forEveryone) {
      print("Messages deleted for all users!");
    } else {
      print("Messages deleted from your device only.");
    }
    // No need to return anything, the library will take care of hiding them from the UI
  },
)`}</code></pre></CodeWrapper>
            </div>

            {/* Fetching Messages */}
            <div id="fetching-messages" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Fetching and Preloading Messages Functions</h2>
              <p>A set of specialized functions to fetch older or newer messages from the server, in addition to jumping to specific dates for quick search and performance optimization.</p>

              <h3><code>onFetchMessages</code> (Fetch More Messages)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>type</code></td>
                      <td><span className="badge">FetchQueryType</span></td>
                      <td>Type of fetch requested:
                        <ul>
                          <li><strong>specific:</strong> A single message by its ID.</li>
                          <li><strong>latest:</strong> The latest messages in the chat.</li>
                          <li><strong>older:</strong> Previous messages (older than the reference message).</li>
                          <li><strong>newer:</strong> Subsequent messages (newer than the reference message).</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td><code>referenceMessageId</code></td>
                      <td><span className="badge">int?</span></td>
                      <td>The ID of the reference message based on which messages will be fetched (before or after it).</td>
                    </tr>
                    <tr>
                      <td><code>limit</code></td>
                      <td><span className="badge">int</span></td>
                      <td>The maximum number of messages allowed to be fetched in a single batch.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;List&lt;Message&gt;?&gt;</code> - A list of new messages fetched from the server to be smartly and smoothly merged into the UI.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onFetchMessages: (FetchQueryType type, int? referenceId, int limit) async {
    print("Fetch type: \${type.name} | Reference Message: \${referenceId} | Requested count: \${limit}");

    // Simulate server delay
    await Future.delayed(const Duration(seconds: 1));

    // In this illustrative example we will always return older fake messages
    return List.generate(limit, (index) {
      return Message(
        id: (referenceId ?? 500) - (index + 1), // Decreasing IDs for older messages
        senderId: "user_other",
        text: "Old message number \${index + 1}",
        time: DateTime.now().subtract(Duration(days: index + 1)),
        status: MessageStatus.read,
      );
    });
  },
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onFetchMessagesByDate</code> (Fetch By Date)</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>date</code></td>
                      <td><span className="badge">DateTime</span></td>
                      <td>The specific date (day) requested to fetch messages from.</td>
                    </tr>
                    <tr>
                      <td><code>limit</code></td>
                      <td><span className="badge">int</span></td>
                      <td>The maximum number of messages allowed to be fetched in a single batch.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;List&lt;Message&gt;?&gt;</code> - An array of messages found for that day to be displayed to the user.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onFetchMessagesByDate: (DateTime date, int limit) async {
    print("Searching for messages for the day: \${date.year}-\${date.month}-\${date.day}");

    // Simulate database or server search
    await Future.delayed(const Duration(seconds: 1));

    // Return a single message to prove it found a result for that day
    return [
      Message(
        id: 777,
        senderId: "user_other",
        text: "A rare message from the date \${date.month}/\${date.day}",
        time: date, // Using the same requested date
        status: MessageStatus.read,
      )
    ];
  },
)`}</code></pre></CodeWrapper>
            </div>

            {/* Pinned Messages */}
            <div id="pinned-messages" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Pinned Messages Functions</h2>

              <h3><code>pinnedMessagesStream</code> (Add or Remove Pinned Messages)</h3>
              <p>Allows you to continuously update the pinned messages in the chat received from the server.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>pinnedMessagesStream</code></td>
                      <td><span className="badge">Stream&lt;List&lt;Message&gt;&gt;?</span></td>
                      <td>A stream that continuously pumps the list of pinned messages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> Returns nothing.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  pinnedMessagesStream: Stream.periodic(
    const Duration(seconds: 10),
    (count) => [
      Message(
        id: 1,
        senderId: "admin",
        text: "Pinned message from the server",
        time: DateTime.now(),
        status: MessageStatus.delivered,
      )
    ]
  ),
)`}</code></pre></CodeWrapper>

              <h3 style={{ marginTop: '3rem' }}><code>onPinnedMessagesChanged</code> (Pinned Messages Changes)</h3>
              <p>Called when the current user pins or unpins a message allowing you to update databases.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>message</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message that was pinned or unpinned.</td>
                    </tr>
                    <tr>
                      <td><code>isPinned</code></td>
                      <td><span className="badge">bool</span></td>
                      <td>If true, it means an addition to pins, and if false, it is an unpin.</td>
                    </tr>
                    <tr>
                      <td><code>updatedPinnedList</code></td>
                      <td><span className="badge">List&lt;Message&gt;</span></td>
                      <td>The new list of pinned messages after this change.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Once the operation is finished, the change will be adopted in the UI.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onPinnedMessagesChanged: (Message message, bool isPinned, List<Message> updatedPinnedList) async {
    print(isPinned 
      ? "Request to pin message: \${message.text}" 
      : "Request to unpin message: \${message.text}");

    // Simulate sending request to the database
    await Future.delayed(const Duration(seconds: 1));
    
    print("List updated on the server! Number of pins now: \${updatedPinnedList.length}");
  }
)`}</code></pre></CodeWrapper>
            </div>

            {/* Reactions */}
            <div id="reactions-emoji" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Message Reactions & Emoji Functions</h2>

              <h3>Emoji Customization & Reactions</h3>
              <p>Reaction control properties are distributed across several classes in the library to provide maximum flexibility for the developer:</p>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Property</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ChatUser</strong><br />(The current user object)</td>
                      <td><code>maxUserReactionsPerMessage</code></td>
                      <td>Maximum reactions per person: The default is 1. You can increase it, or set it to 0 if you want to completely prevent the user from reacting to any message.</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}><strong>ChatConfig</strong></td>
                      <td><code>reactionEmojis</code></td>
                      <td>Global reaction list (Long Press): Customize the list of emojis that appear when long-pressing individual and group messages.</td>
                    </tr>
                    <tr>
                      <td><code>doubleTapReactionEmoji</code></td>
                      <td>Global quick reaction (Double Tap): Customize the default emoji when quickly double-tapping a message in a normal chat.</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}><strong>ChatScreen</strong></td>
                      <td><code>doubleTapReactionEmoji</code></td>
                      <td>Advanced note: You can customize a specific quick emoji for a specific chat, and it will take priority overriding the global quick reaction in ChatConfig.</td>
                    </tr>
                    <tr>
                      <td><code>emojiReactionShowCountOnlyWithEmoji</code></td>
                      <td>Reaction display method: If enabled, it displays a number next to the emoji (e.g.: ❤️ 5). If disabled, reactor avatars will appear interleaved up to 4 reactions, then it reverts to showing the number.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ marginTop: '3rem' }}><code>onReactionChanged</code> (Reaction Changes)</h3>
              <p>Called when the current user reacts or unreacts to a message allowing you to update databases.</p>
              <div style={{ background: 'rgba(3, 169, 244, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #03a9f4', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#03a9f4' }}>Note:</strong>
                <p style={{ margin: 0 }}>When other users react, reactions enter the chat by updating messages using the incoming message listener <code>incomingMessagesStream</code>.</p>
              </div>

              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>updatedMessage</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message with all its new data containing the updated list of reactions.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;bool?&gt;</code> - Must return true if the operation succeeds on the server, or false to force the UI to rollback the reaction if the sending fails.</p>
<CodeWrapper><pre><code>{`ChatScreen(
  onReactionChanged: (Message updatedMessage) async {
    print("User placed a reaction on a message!");
    print("Current reactions list for this message: \${updatedMessage.reactions?.length ?? 0}");

    try {
      // Simulate sending reaction to server
      await Future.delayed(const Duration(seconds: 1));
      
      print("Reaction saved successfully!");
      return true; // Operation succeeded, continue showing the emoji to the user
    } catch (e) {
      print("Failed to save due to internet problem!");
      return false; // Operation failed, withdraw the emoji from UI and revert reaction
    }
  }
)`}</code></pre></CodeWrapper>
            </div>

            {/* Custom Download */}
            <div id="custom-download" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>First: Custom Download Functions</h2>

              <p>The library contains a very smart hybrid system for downloading attached files (images, videos, documents, audio). It works with two parallel systems based on your needs and the settings you pass to the controller.</p>

              <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>Automatic Media Download (autoDownloadMedia)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>To reduce internet usage, this option is provided inside ChatScreen.</p>
                <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingRight: '1.5rem' }}>
                  <li>When enabled (true): Download functions are called immediately as soon as the message appears and is displayed in the chat interface.</li>
                  <li>When disabled (false): A download button appears to the user next to each message, and downloading won't happen unless clicked manually.</li>
                </ul>
              </div>

              <p>These functions are used if you prefer to rely on your app's own external download system (like <code>Dio</code> or <code>Flutter_Downloader</code>). Once you pass these functions, the built-in library functions will stop working to give you full control.</p>

              <h3><code>onDownloadMediaRequested</code> (Request Media Download)</h3>
              <p>Called when the user clicks the download icon for an attachment (image, video, document). Used alongside the <code>onCancelMediaDownloadRequested</code> function to stop the download.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>message</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message containing the attachment to be downloaded.</td>
                    </tr>
                    <tr>
                      <td><code>onProgress</code></td>
                      <td><span className="badge">Function(int total, int progress)</span></td>
                      <td>A function you call to pass the download percentage to the UI so the progress bar fills up for the user.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;String?&gt;</code> - The final local path (Local Path) on the user's device after the download completes.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onCancelMediaDownloadRequested</code> (Cancel Download)</h3>
              <p>Called when the user clicks on (X) to cancel an ongoing download.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>message</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message currently having its attachment downloaded.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>void</code> - Returns nothing, you just need to stop the download operation in your external code.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onDownloadThumbnailRequested</code> (Download Thumbnail)</h3>
              <p>To download video thumbnails (Cover/Thumbnail) before playing or fully downloading them to reduce internet usage.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>message</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message whose attachment thumbnail is to be downloaded.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;String?&gt;</code> - The local path (Local Path) of the thumbnail after downloading.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onDownloadAvatarRequested</code> (Download User Avatars)</h3>
              <p>Called when the screen finds a user without a local <code>avatarLocalPath</code> for their image.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>user</code></td>
                      <td><span className="badge">ChatUser</span></td>
                      <td>The user whose image is requested to be downloaded based on their avatarUrl.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;String?&gt;</code> - The local path (Local Path) of the image after downloading so the library can draw it immediately.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onDownloadBackgroundRequested</code> (Download Background)</h3>
              <p>Called to download the custom background image for the chat.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>url</code></td>
                      <td><span className="badge">String</span></td>
                      <td>The URL of the image to be downloaded.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;String?&gt;</code> - The local path (Local Path) of the background image after it is downloaded.</p>

              <h3 style={{ marginTop: '2rem' }}>Comprehensive Example: Custom Download Functions - External</h3>
<CodeWrapper><pre><code>{`ChatScreen(
  // 1. Request attachments download
  onDownloadMediaRequested: (Message message, Function(int total, int progress) onProgress) async {
    print("Requested download of attachment for message: \${message.id}");
    
    // Simulate the download process (works directly when copying)
    for (int i = 1; i <= 10; i++) {
      await Future.delayed(const Duration(milliseconds: 300));
      onProgress(10, i); // Update the progress bar for the UI
    }
    
    // Return a dummy path to test the UI
    return "/local/downloads/file_\${message.id}.mp4";
  },
  
  // 2. Cancel download
  onCancelMediaDownloadRequested: (Message message) {
    print("Download cancellation requested for message: \${message.id}");
  },
)`}</code></pre></CodeWrapper>
            </div>

            {/* Builtin Download Placeholder */}
            <div id="builtin-download" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Second: Built-in Download Functions</h2>
              <p>In case you do not pass the previous functions, the library will take care of intelligently downloading and storing files locally. You only need to specify folder names, and provide functions to receive objects after downloading so you can save the new paths in your database (like Isar).</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatMediaFolderName</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Media saving folder name: It's preferable to allocate one per chat (e.g. <code>chat_123_media</code>) to easily manage and delete files of each chat separately without affecting others. (Type: <span className="badge">String</span>).</p>
                </div>
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}><code>chatUsersFolderName</code></h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>User avatars saving folder name: It's preferable to be unified and shared across all chats (e.g. <code>my_app_users_avatars</code>) to prevent duplicating the same user's image and save storage space. (Type: <span className="badge">String</span>).</p>
                </div>
              </div>

              <h3 style={{ marginTop: '3rem' }}><code>onMessageDownloaded</code> (Save Message Update)</h3>
              <p>Called after the library successfully finishes downloading the attachment and gives it the local path <code>localPath</code>.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>updatedMessage</code></td>
                      <td><span className="badge">Message</span></td>
                      <td>The message in its final state after its attachment has been supplied with the local path.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Returns nothing, just update the message in your database.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onUserAvatarDownloaded</code> (Save User Update)</h3>
              <p>Called after the built-in user avatar download and giving it the local path <code>avatarLocalPath</code>.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>updatedUser</code></td>
                      <td><span className="badge">ChatUser</span></td>
                      <td>The user in their final state after being supplied with the local path for their image.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Returns nothing, just update the user record in your database.</p>

              <h3 style={{ marginTop: '3rem' }}><code>onBackgroundDownloaded</code> (Save Background Update)</h3>
              <p>Called after the background image is successfully downloaded via the built-in system.</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>url</code></td>
                      <td><span className="badge">String</span></td>
                      <td>The URL of the image that was downloaded.</td>
                    </tr>
                    <tr>
                      <td><code>localPath</code></td>
                      <td><span className="badge">String</span></td>
                      <td>The final local path after saving.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Return Value:</strong> <code>Future&lt;void&gt;</code> - Returns nothing, just save the settings in your database.</p>

              <h3 style={{ marginTop: '2rem' }}>Comprehensive Example (Built-in Download Functions - Internal):</h3>
<CodeWrapper><pre><code>{`ChatScreen(
  // 1. Determine folders for the library
  chatMediaFolderName: 'chat_123_media',
  chatUsersFolderName: 'my_app_users_avatars',
  
  // 2. Receive the updated message and save it
  onMessageDownloaded: (Message updatedMessage) async { 
    print("Built-in download of message attachment succeeded!");
    // Here you usually save updatedMessage in your database to work later without internet
  },
  
  // 3. Receive the updated user and save them
  onUserAvatarDownloaded: (ChatUser updatedUser) async { 
    print("Image of user \${updatedUser.name} is now available locally (Offline)");
    // Here you usually save updatedUser in your database
  },
  
  // 4. Receive the updated background path and save it
  onBackgroundDownloaded: (String url, String localPath) async { 
    print("Background saved successfully to: $localPath");
    // Here you save the path in your app's settings
  },
)`}</code></pre></CodeWrapper>
            </div>

            {/* Models Placeholder */}
            <div id="model-user" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Models</h2>

              <h3><code>ChatUser</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>id</code></td><td><span className="badge">String</span></td><td>Unique identifier for the user, essential for linking messages to their sender.</td></tr>
                    <tr><td><code>name</code></td><td><span className="badge">String</span></td><td>Full name of the user that will appear above their message and at the top of a private chat.</td></tr>
                    <tr><td><code>avatarUrl</code></td><td><span className="badge">String?</span></td><td>URL of the personal photo online. If not available, the first letter of their name will appear.</td></tr>
                    <tr><td><code>avatarLocalPath</code></td><td><span className="badge">String?</span></td><td>Path of the photo stored locally on the phone to reduce internet usage. Added later using library download functions or custom functions set by the user.</td></tr>
                    <tr><td><code>isOnline</code></td><td><span className="badge">bool</span></td><td>Online indicator (true/false). (Must be updated manually - set to true when user enters the app and false when leaving).</td></tr>
                    <tr><td><code>lastSeen</code></td><td><span className="badge">DateTime?</span></td><td>Exact time of last seen. (Should be sent in continuous pulses every 4 seconds).</td></tr>
                    <tr><td><code>lastSeenVisible</code></td><td><span className="badge">bool</span></td><td>For privacy. If false, exact last seen time won't appear (e.g., 5 minutes ago) but rather an approximation (Last seen recently).</td></tr>
                    <tr><td><code>role</code></td><td><span className="badge">String?</span></td><td>User role (Admin, Owner).</td></tr>
                    <tr><td><code>canDeleteOtherPeopleMessages</code></td><td><span className="badge">bool</span></td><td>Give this user the permission to delete other people's messages (for moderators).</td></tr>
                    <tr><td><code>maxUserReactionsPerMessage</code></td><td><span className="badge">int</span></td><td>Number of emojis the user is allowed to place on the same message (default 1).</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="model-message" style={{ marginTop: '3rem' }}><code>Message</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>id</code></td><td><span className="badge">int</span></td><td>Unique message identifier on the server. (Also used to order messages).</td></tr>
                    <tr>
                      <td><code>type</code></td>
                      <td><span className="badge">MessageType</span></td>
                      <td>
                        Message type.
                        <ul style={{ margin: 0, paddingRight: '1.5rem' }}>
                          <li><code>MessageType.text</code>: Simple text message.</li>
                          <li><code>MessageType.image</code>: Single image.</li>
                          <li><code>MessageType.video</code>: Single video.</li>
                          <li><code>MessageType.audio</code>: Standard audio file (like MP3) shown with a progress bar.</li>
                          <li><code>MessageType.voice</code>: Voice note recorded directly from chat (shown with audio Waveforms).</li>
                          <li><code>MessageType.document</code>: Document file (PDF or other).</li>
                          <li><code>MessageType.location</code>: Geographical location (Map).</li>
                          <li><code>MessageType.mediaGroup</code>: Group of images and videos combined into one message shown as a grid.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr><td><code>senderId</code></td><td><span className="badge">String</span></td><td>ID of the user who sent it, (the ID must exist within the listed people in the chat ChatUser).</td></tr>
                    <tr><td><code>text</code></td><td><span className="badge">String</span></td><td>Text content of the message.</td></tr>
                    <tr><td><code>attachments</code></td><td><span className="badge">List&lt;MessageAttachment&gt;?</span></td><td>Message attachments (images, videos attached to the message).</td></tr>
                    <tr><td><code>time</code></td><td><span className="badge">DateTime</span></td><td>Time of sending.</td></tr>
                    <tr>
                      <td><code>status</code></td>
                      <td><span className="badge">MessageStatus</span></td>
                      <td>
                        Message status:
                        <ul style={{ margin: 0, paddingRight: '1.5rem' }}>
                          <li><code>MessageStatus.sending</code>: Sending (circular clock icon).</li>
                          <li><code>MessageStatus.sent</code>: Received at the server (one gray checkmark).</li>
                          <li><code>MessageStatus.delivered</code>: Delivered to receiver device (two gray checkmarks).</li>
                          <li><code>MessageStatus.read</code>: Read (two blue checkmarks).</li>
                          <li><code>MessageStatus.failed</code>: Failed to send (red exclamation mark inside a circle to draw attention).</li>
                        </ul>
                      </td>
                    </tr>
                    <tr><td><code>readBy</code></td><td><span className="badge">List&lt;MessageReadReceipt&gt;</span></td><td>List of people of type MessageReadReceipt to explicitly show who read the message in groups.</td></tr>
                    <tr><td><code>reactions</code></td><td><span className="badge">List&lt;MessageReaction&gt;</span></td><td>List of reactions (Emojis placed below the message).</td></tr>
                    <tr><td><code>replyToMessageId</code></td><td><span className="badge">int?</span></td><td>ID of the message being replied to, if any.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="model-attachment" style={{ marginTop: '3rem' }}><code>MessageAttachment</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>title</code></td><td><span className="badge">String?</span></td><td>File title.</td></tr>
                    <tr><td><code>url</code></td><td><span className="badge">String</span></td><td>Direct file URL on the internet for direct downloading.</td></tr>
                    <tr><td><code>localPath</code></td><td><span className="badge">String?</span></td><td>File path stored locally on the phone to reduce internet usage. Added later using library download functions or custom functions set by the user.</td></tr>
                    <tr><td><code>durationSeconds</code></td><td><span className="badge">int?</span></td><td>Duration of the audio or video clip in seconds.</td></tr>
                    <tr><td><code>width / height</code></td><td><span className="badge">double?</span></td><td>Dimensions of the image or video. The library uses them to precisely reserve space on the screen before downloading even starts to prevent annoying screen jumps.</td></tr>
                    <tr>
                      <td><code>mimeType</code></td>
                      <td><span className="badge">String?</span></td>
                      <td>
                        File type, the class supports inferring these types: (Important)<br />
                        <strong>Images:</strong> image/jpeg, image/png, image/gif, image/webp, image/heic, image/bmp, image/tiff, image/svg+xml<br />
                        <strong>Video:</strong> video/mp4, video/quicktime, video/x-matroska, video/x-msvideo, video/webm, video/3gpp<br />
                        <strong>Documents:</strong> application/pdf, application/msword, application/json, application/zip, text/plain, text/csv and more.
                      </td>
                    </tr>
                    <tr><td><code>type</code></td><td><span className="badge">MessageType?</span></td><td>Explicit attachment type from MessageType (Important). Can be: MessageType.image for Image, MessageType.video for Video, MessageType.audio for Audio, MessageType.voice for Voice note, MessageType.document for Files, or MessageType.location for Maps.</td></tr>
                    <tr><td><code>thumbnailUrl</code></td><td><span className="badge">String?</span></td><td>Direct internet URL for the thumbnail image (Cover) for all attachment types except voice notes.</td></tr>
                    <tr><td><code>thumbnailLocalPath</code></td><td><span className="badge">String?</span></td><td>Thumbnail path stored locally on the phone to reduce internet usage. Added later using library download functions or custom functions set by the user.</td></tr>
                    <tr><td><code>latitude, longitude, locationName</code></td><td><span className="badge">double?, double?, String?</span></td><td>Coordinates and location name for map messages.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="model-read-receipt" style={{ marginTop: '3rem' }}><code>MessageReadReceipt</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>userId</code></td><td><span className="badge">String</span></td><td>ID of the user who read the message.</td></tr>
                    <tr><td><code>readAt</code></td><td><span className="badge">DateTime</span></td><td>Exact time when it was read.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="model-reaction" style={{ marginTop: '3rem' }}><code>MessageReaction</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>emoji</code></td><td><span className="badge">String</span></td><td>The displayed emoji (e.g. ❤️ or 😂).</td></tr>
                    <tr><td><code>entries</code></td><td><span className="badge">List&lt;MessageReactionEntry&gt;</span></td><td>List of MessageReactionEntry class to know who placed this emoji.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="model-reaction-entry" style={{ marginTop: '3rem' }}><code>MessageReactionEntry</code></h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Precise Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>userId</code></td><td><span className="badge">String</span></td><td>ID of the user who reacted with this emoji.</td></tr>
                    <tr><td><code>reactedAt</code></td><td><span className="badge">DateTime</span></td><td>Time when the reaction occurred.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Developer Info Section */}
            <div id="developer-info" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Package Designer and Developer</h2>
              <div style={{ background: 'linear-gradient(145deg, var(--gradient-start) 0%, var(--gradient-end) 100%)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--card-border-strong)', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
                {/* Background glow */}
                <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: '0.15', zIndex: 0 }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img src="assets/developer.jpg" alt="Developer Avatar" style={{ width: '100px', height: '100px', borderRadius: '50px', objectFit: 'cover', border: '4px solid var(--card-border-strong)', marginBottom: '0', boxShadow: '0 0 20px var(--accent-glow)' }} />
                  <h2 style={{ color: 'var(--text-primary)', marginTop: '0', marginBottom: '0.2rem', fontSize: '2.2rem', fontWeight: '900', letterSpacing: '1px' }}>Ameer Imad</h2>
                  <h3 style={{ color: 'var(--text-secondary)', marginTop: '0', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 'normal' }}>Package Designer and Developer</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '2px', fontSize: '0.9rem' }}>FLUTTER & FRONTEND DEVELOPER</p>

                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
                    I built this package to be the comprehensive solution that combines beautiful design with absolute customization flexibility. I wrote it as if designing it for my own project, to save you time and effort and give your app a professional character worthy of you. I hope it will be a strong addition to your upcoming projects!
                  </p>

                  <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://github.com/AmeerImad" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem 2rem', background: 'var(--text-primary)', color: 'var(--bg-color)', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      Follow me on Github
                    </a>
                    <a href="https://instagram.com/ameerimad99" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem 2rem', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(220, 39, 67, 0.4)' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      Connect on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Section */}
            <div id="suggestions" style={{ marginBottom: '6rem' }}>
              <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Modification Suggestions and Contributions</h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.8rem' }}>

                {/* Card 1 */}
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #3b82f6', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Have an idea for a new feature?</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>If you have a great idea to improve the package or add a new feature that doesn't exist, your suggestions are very welcome. You can open a new "Issue" on Github and we will discuss it and add it.</p>
                  <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Feature]%20" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#3b82f6', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Feature Request</a>
                </div>

                {/* Card 2 */}
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #ef4444', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Found a bug?</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>No code is bug-free. If you encounter any issue or unexpected behavior, please report it immediately and we will work on releasing a quick update to solve the problem.</p>
                  <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Bug]%20" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#ef4444', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Report Bug</a>
                </div>

                {/* Card 3 */}
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #10b981', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Improve this documentation</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>If you see a typo, or have a better explanation for one of the functions, you can make a Pull Request on the documentation repository and we will be very grateful to you!</p>
                  <a href="https://github.com/FluidUI-Kits/chat_screen_docs" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#10b981', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Edit Docs</a>
                </div>

                {/* Card 4 */}
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #222', borderTop: '4px solid #a855f7', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Showcase your app</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem', flexGrow: 1 }}>Did you use our package to build your app? We'd love to see your creativity! Share photos or a link to your app with us and we'll feature it in our Featured Apps section.</p>
                  <a href="https://github.com/FluidUI-Kits/chat_screen_docs/issues/new?title=[Showcase]%20My%20App" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem', background: '#a855f7', color: 'var(--text-primary)', border: 'none', padding: '0.7rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Showcase</a>
                </div>

              </div>
            </div>

            {/* Copyright Footer */}
            <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '4rem', borderTop: '1px solid #333', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} Ameer Imad. All rights reserved.
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



