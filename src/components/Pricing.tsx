import { Check, X, Shield } from 'lucide-react';
import '../App.css';

export interface PricingProps {
  onNavigate: (page: 'docs' | 'pricing') => void;
  lang?: 'ar' | 'en';
}

export const Pricing = ({ onNavigate, lang = 'en' }: PricingProps) => {
  const isAr = lang === 'ar';

  return (
    <div className="pricing-page animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: isAr ? 'center' : 'left', minHeight: 'calc(100vh - 60px)' }} dir={isAr ? 'rtl' : 'ltr'}>

      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          {isAr ? 'اختر الترخيص المناسب لمشروعك' : 'Choose The Right License'}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          {isAr 
            ? 'احصل على مكتبة المحادثة الأقوى في فلاتر ووفر أسابيع من التطوير. اختر الباقة التي تتناسب مع احتياجاتك.' 
            : 'Get the most powerful Flutter chat library and save weeks of development. Choose the package that suits your needs.'}
        </p>
      </div>

      <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', maxWidth: '600px', margin: '0 auto 4rem', textAlign: 'center' }}>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
          <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {isAr ? 'ملاحظة هامة:' : 'Important Note:'}
          </span>
          {isAr 
            ? 'تتم معالجة طلبات الشراء يدوياً من قبل الدعم الفني لتوفير أكبر مساحة من حرية الشراء.' 
            : 'Purchase requests are processed manually by technical support to provide the greatest flexibility in purchasing.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'center' }}>

        {/* Basic License */}
        <div className="pricing-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '3rem 2rem', textAlign: isAr ? 'right' : 'left', position: 'relative' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
            {isAr ? 'الترخيص الأساسي' : 'Basic License'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '2rem' }}>
            {isAr ? 'للمشاريع البسيطة.' : 'For simple projects.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', justifyContent: 'flex-start' }}>
            <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 'bold', opacity: 0.7 }}>$169</span>
            <span style={{ background: 'linear-gradient(90deg, #ef4444, #f97316)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)' }}>
              {isAr ? '🔥 توفير $75' : '🔥 Save $75'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#10b981', textShadow: '0 2px 10px rgba(16, 185, 129, 0.2)' }}>$94</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 'bold' }}>
              {isAr ? '/ مرة واحدة' : '/ one time'}
            </span>
          </div>

          <button style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2.5rem', transition: 'all 0.2s' }} className="btn-outline" onClick={() => window.open('https://t.me/RequestLibrarybot', '_blank')}>
            {isAr ? 'طلب شراء الآن' : 'Request to Buy Now'}
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'كود المصدر بالكامل (Full Source Code)' : 'Full Source Code access'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'استخدام في تطبيقات لا محدودة' : 'Use in unlimited apps'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'استلام المكتبة كملف مضغوط عبر الإيميل' : 'Library delivered as a .zip file via email'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.5 }}><X size={20} color="#ef4444" /><span style={{ color: 'var(--text-secondary)' }}>{isAr ? 'تحديثات وإصلاحات مستمرة' : 'Continuous updates & bug fixes'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.5 }}><X size={20} color="#ef4444" /><span style={{ color: 'var(--text-secondary)' }}>{isAr ? 'الوصول للمستودع وإشعارات التحديثات' : 'Repository access & update notifications'}</span></div>
          </div>
        </div>

        {/* Regular License */}
        <div className="pricing-card" style={{ background: 'var(--card-bg)', border: '2px solid #3b82f6', borderRadius: '24px', padding: '3rem 2rem', textAlign: isAr ? 'right' : 'left', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', [isAr ? 'right' : 'left']: '2rem', background: '#3b82f6', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
            {isAr ? 'الأكثر طلباً' : 'Most Popular'}
          </div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
            {isAr ? 'ترخيص المطورين' : 'Developer License'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '2rem' }}>
            {isAr ? 'للمطورين المستقلين والشركات الناشئة.' : 'For independent developers and startups.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', justifyContent: 'flex-start' }}>
            <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 'bold', opacity: 0.7 }}>$249</span>
            <span style={{ background: 'linear-gradient(90deg, #ef4444, #f97316)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)' }}>
              {isAr ? '🔥 توفير $125' : '🔥 Save $125'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#10b981', textShadow: '0 2px 10px rgba(16, 185, 129, 0.2)' }}>$124</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 'bold' }}>
              {isAr ? '/ مرة واحدة' : '/ one time'}
            </span>
          </div>

          <button style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: 'none', background: '#3b82f6', color: 'white', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2.5rem', transition: 'all 0.2s' }} className="btn-primary" onClick={() => window.open('https://t.me/RequestLibrarybot', '_blank')}>
            {isAr ? 'طلب شراء الآن' : 'Request to Buy Now'}
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'جميع ميزات الترخيص الأساسي' : 'All Basic License features'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'الوصول للمستودع للإطلاع على التحديثات المستمرة' : 'Viewer access to repository (GitHub/GitLab)'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'إشعارات التحديثات المباشرة على الواتساب' : 'Direct update notifications via WhatsApp'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'دعم فني' : 'Technical support'}</span></div>
          </div>
        </div>

        {/* Exclusive Buyout License */}
        <div className="pricing-card premium" style={{ background: 'linear-gradient(145deg, var(--card-bg), var(--premium-card-bg))', border: '2px solid var(--accent-primary)', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: isAr ? 'right' : 'left', position: 'relative', boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }}>
          <div style={{ position: 'absolute', top: '-15px', [isAr ? 'right' : 'left']: '2rem', background: 'var(--accent-primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(168, 85, 247, 0.4)' }}>
            {isAr ? 'استحواذ كامل' : 'Exclusive Acquisition'}
          </div>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={28} color="var(--accent-primary)" /> {isAr ? 'الترخيص الحصري' : 'Buyout License'}</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '2rem' }}>
            {isAr ? 'للشركات الكبرى التي ترغب بامتلاك المكتبة حصرياً.' : 'For large enterprises aiming for exclusive rights.'}
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>$3,499</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              {isAr ? '/ مرة واحدة' : '/ one time'}
            </span>
          </div>

          <button style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: 'none', background: 'var(--accent-primary)', color: 'white', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)', transition: 'transform 0.2s' }} className="btn-primary" onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => window.open('https://t.me/RequestLibrarybot', '_blank')}>
            {isAr ? 'طلب الاستحواذ' : 'Request Acquisition'}
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="var(--accent-primary)" /><span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{isAr ? 'إيقاف عمليات بيع المكتبة تماماً (حصري)' : 'Stop all future sales immediately'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="var(--accent-primary)" /><span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{isAr ? 'نقل مستودعات المكتبة بالكامل' : 'Full transfer of library repositories'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? '30 يوماً من الدعم الفني المباشر للدمج' : '30 Days of direct integration support'}</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /><span style={{ color: 'var(--text-primary)' }}>{isAr ? 'إمكانية طلب ميزات إضافية مخصصة (يتم تسعير كل ميزة بشكل منفصل)' : 'Custom feature requests (each feature is priced separately)'}</span></div>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={() => onNavigate('docs')} style={{ marginTop: '3rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline' }}>
          {isAr ? 'العودة للتوثيق' : 'Back to Documentation'}
        </button>
      </div>
    </div>
  );
};
