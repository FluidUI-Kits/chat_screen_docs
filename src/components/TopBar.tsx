import React from 'react';
import { Menu, Globe, Sun, Moon, Code, User, ShoppingCart, Book } from 'lucide-react';
import '../App.css';

interface TopBarProps {
  onMenuClick: () => void;
  currentLang?: 'ar' | 'en';
  onToggleLanguage?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  onNavigate?: (page: 'docs' | 'pricing') => void;
  page?: 'docs' | 'pricing';
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick, currentLang, onToggleLanguage, theme, onToggleTheme, onNavigate, page = 'docs' }) => {
  return (
    <header className="topbar" dir="ltr">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick} title={currentLang === 'ar' ? 'القائمة' : 'Menu'}>
          <Menu size={20} />
        </button>
        <div className="topbar-logo" onClick={() => onNavigate?.('docs')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <div style={{
            WebkitMask: 'url("assets/Library_logo.svg") no-repeat center',
            mask: 'url("assets/Library_logo.svg") no-repeat center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            backgroundColor: 'var(--text-primary)',
            width: '28px',
            height: '28px',
            marginRight: currentLang === 'en' ? '8px' : '0',
            marginLeft: currentLang === 'ar' ? '8px' : '0'
          }}></div>
          <span style={{ marginRight: '8px' }}>Chat Screen Docs</span>
          <span style={{ fontSize: '0.7rem', background: 'var(--accent-primary)', color: 'white', padding: '2px 6px', borderRadius: '6px', fontWeight: 'bold', letterSpacing: '0.5px' }}>v1.0.0</span>
        </div>
      </div>

      <div className="topbar-right">
        {/* Language Switch */}
        <button
          className={`lang-toggle ${currentLang}`}
          title={currentLang === 'ar' ? 'التبديل للغة الإنجليزية' : 'Switch to Arabic'}
          onClick={onToggleLanguage}
        >
          <span className="lang-text ar">AR</span>
          <span className="lang-text en">EN</span>
          <div className="lang-toggle-thumb">
            <Globe size={14} color="white" />
          </div>
        </button>

        {/* Developer Info */}
        {page !== 'pricing' && (
          <button className="icon-btn" onClick={() => document.getElementById('developer-info')?.scrollIntoView({ behavior: 'smooth' })} title={currentLang === 'ar' ? 'معلومات المطور' : 'Developer Info'}>
            <User size={18} />
          </button>
        )}



        {/* Dark/Light Mode */}
        <button className="icon-btn" title={currentLang === 'ar' ? (theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي') : (theme === 'dark' ? 'Light Mode' : 'Dark Mode')} onClick={onToggleTheme}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Github Link */}
        <button className="icon-btn" onClick={() => window.open('https://github.com/FluidUI-Kits/chat_screen', '_blank')} title={currentLang === 'ar' ? 'مستودع الكود' : 'Source Code'}>
          <Code size={18} />
        </button>

        {/* Buy Library / Docs */}
        {page === 'pricing' ? (
          <button className="icon-btn" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', padding: '0 10px' }} onClick={() => onNavigate?.('docs')} title={currentLang === 'ar' ? 'العودة للتوثيق' : 'Back to Docs'}>
            <Book size={18} />
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>DOCS</span>
          </button>
        ) : (
          <button className="icon-btn" style={{ color: 'var(--accent-primary)' }} onClick={() => onNavigate?.('pricing')} title={currentLang === 'ar' ? 'شراء المكتبة' : 'Buy Library'}>
            <ShoppingCart size={18} />
          </button>
        )}
      </div>
    </header>
  );
};
