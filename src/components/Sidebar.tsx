import React from 'react';
import '../App.css';

export interface SidebarProps {
  activeId: string;
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ar' | 'en';
}

export const Sidebar: React.FC<SidebarProps> = ({ activeId, isOpen, onClose, lang = 'en' }) => {
  const isAr = lang === 'ar';

  const categories = [
    {
      title: isAr ? 'نظرة عامة' : 'Overview',
      items: [
        { id: 'hero', label: isAr ? 'نظره عامة وميزات' : 'Overview & Features' },
        { id: 'install', label: isAr ? 'التثبيت والتهيئة' : 'Installation & Setup' },
        { id: 'quick-start', label: isAr ? 'البداية السريعة' : 'Quick Start' },
        { id: 'functions-index', label: isAr ? 'فهرست الدوال والمتغيرات' : 'Functions & Variables Index' },
      ]
    },
    {
      title: isAr ? 'الإعدادات والمتغيرات' : 'Settings & Variables',
      items: [
        { id: 'basic-variables', label: isAr ? 'المتغيرات الأساسية للمحادثة' : 'Basic Chat Variables' },
        { id: 'basic-settings', label: isAr ? 'الإعدادات الأساسية' : 'Basic Settings' },
      ]
    },
    {
      title: isAr ? 'التحكم والتصميم' : 'Controller & Design',
      items: [
        { id: 'chat-controller', label: isAr ? 'المتحكم المركزي(ChatController)' : 'Central Controller (ChatController)' },
        { id: 'chat-config', label: isAr ? 'إعدادات الواجهة (ChatConfig)' : 'UI Settings (ChatConfig)' },
        { id: 'localization', label: isAr ? 'اللغات والاتجاه والخط' : 'Languages, Direction & Font' },
        { id: 'chat-theme', label: isAr ? 'الألوان والتصميم (ChatTheme)' : 'Colors & Design (ChatTheme)' },
      ]
    },
    {
      title: isAr ? 'تكامل واجهة المستخدم' : 'UI Integration',
      items: [
        { id: 'ui-integration', label: isAr ? 'متغيرات ودوال تكامل واجة المستخدم' : 'UI Integration Variables & Functions' },
      ]
    },
    {
      title: isAr ? 'دوال التعامل مع الرسائل' : 'Messaging Functions',
      items: [
        { id: 'messaging-functions', label: isAr ? 'دوال ارسال واستقبال الرسائل' : 'Send & Receive Messages' },
        { id: 'message-operations', label: isAr ? 'دوال العمليات على الرسائل' : 'Message Operations' },
        { id: 'fetching-messages', label: isAr ? 'دوال جلب الرسائل والتحميل المسبق' : 'Fetch & Preload Messages' },
      ]
    },
    {
      title: isAr ? 'التفاعلات والرسائل المثبتة' : 'Interactions & Pinned Messages',
      items: [
        { id: 'pinned-messages', label: isAr ? 'دوال الرسائل المثبتة' : 'Pinned Messages Functions' },
        { id: 'reactions-emoji', label: isAr ? 'دوال تفاعلات الرسائل والايموجي' : 'Message Reactions & Emojis' },
      ]
    },
    {
      title: isAr ? 'دوال تحميل الميديا' : 'Media Download Functions',
      items: [
        { id: 'custom-download', label: isAr ? 'أولا : دوال التحميل المخصصة' : 'First: Custom Download Functions' },
        { id: 'builtin-download', label: isAr ? 'ثانياً: دوال التحميل المدمجة' : 'Second: Built-in Download Functions' },
      ]
    },
    {
      title: isAr ? 'النماذج' : 'Models',
      items: [
        { id: 'model-user', label: 'ChatUser' },
        { id: 'model-message', label: 'Message' },
        { id: 'model-attachment', label: 'MessageAttachment' },
        { id: 'model-read-receipt', label: 'MessageReadReceipt' },
        { id: 'model-reaction', label: 'MessageReaction' },
        { id: 'model-reaction-entry', label: 'MessageReactionEntry' },
      ]
    },
    {
      title: isAr ? 'حول الحزمة' : 'About the Package',
      items: [
        { id: 'developer-info', label: isAr ? 'مصمم ومطور الحزمة' : 'Package Designer & Developer' },
        { id: 'suggestions', label: isAr ? 'اقتراحات التعديلات' : 'Suggestions & Contributions' },
      ]
    }
  ];

  return (
    <aside className={`left-sidebar ${isOpen ? 'open' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="nav-group-title" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
        {isAr ? 'مستندات المكتبة' : 'Library Documentation'}
      </div>
      <nav className="toc-list" style={{ paddingRight: '0.5rem', paddingLeft: isAr ? '0' : '0.5rem' }}>
        {categories.map((category, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            {isAr ? (
              <div style={{ 
                fontSize: '1rem', 
                fontWeight: 800, 
                color: 'var(--text-primary)', 
                marginBottom: '0.75rem', 
                paddingRight: '0.5rem',
                borderBottom: '1px dashed var(--border-color)',
                paddingBottom: '0.5rem'
              }}>
                {category.title}
              </div>
            ) : (
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', paddingRight: '0.5rem', letterSpacing: '0.02em' }}>
                {category.title}
              </div>
            )}
            
            {category.items.map(item => (
               <div
                  key={item.id}
                  className={`toc-link ${activeId === item.id ? 'active' : ''}`}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                  style={{ 
                    padding: isAr ? '0.5rem 1rem 0.5rem 0.5rem' : '0.5rem 1rem', 
                    borderRadius: '6px',
                    borderLeft: isAr ? 'none' : (activeId === item.id ? '3px solid var(--accent-primary)' : '3px solid transparent'),
                    borderRight: isAr ? (activeId === item.id ? '3px solid var(--accent-primary)' : '3px solid transparent') : 'none',
                    backgroundColor: activeId === item.id ? 'var(--accent-glow)' : 'transparent',
                    marginBottom: '4px',
                    fontSize: '0.9rem',
                    color: activeId === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: activeId === item.id ? (isAr ? 700 : 600) : (isAr ? 500 : 400),
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {item.label}
                </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};
