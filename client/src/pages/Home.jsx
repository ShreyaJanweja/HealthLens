import { Link } from 'react-router-dom'

/* ─── SVG Icons ─── */
const UploadIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const BrainIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9.5 2A2.5 2.5 0 017 4.5v1A2.5 2.5 0 004.5 8H4a2 2 0 00-2 2v4a2 2 0 002 2h.5A2.5 2.5 0 017 18.5v1a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5v-1a2.5 2.5 0 012.5-2.5H20a2 2 0 002-2v-4a2 2 0 00-2-2h-.5A2.5 2.5 0 0117 5.5v-1A2.5 2.5 0 0114.5 2h-5z"
      stroke="currentColor" strokeWidth="1.8"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChatIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ─── Feature Data ─── */
const features = [
  {
    icon: <UploadIcon />,
    iconColor: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.15)',
    borderHover: 'rgba(59,130,246,0.3)',
    title: 'Upload Any Report',
    desc: 'PDF or image — blood tests, X-rays, prescriptions. Any medical document accepted instantly.',
  },
  {
    icon: <BrainIcon />,
    iconColor: '#14b8a6',
    iconBg: 'rgba(20,184,166,0.15)',
    borderHover: 'rgba(20,184,166,0.3)',
    title: 'AI Explanation',
    desc: 'Get a plain-English breakdown of every value and term. Zero jargon, pure clarity.',
  },
  {
    icon: <ShieldIcon />,
    iconColor: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.15)',
    borderHover: 'rgba(245,158,11,0.3)',
    title: 'Urgency Detection',
    desc: 'Color-coded verdict: Normal, Mild Concern, or Serious — so you know what to do next.',
  },
  {
    icon: <ChatIcon />,
    iconColor: '#a855f7',
    iconBg: 'rgba(168,85,247,0.15)',
    borderHover: 'rgba(168,85,247,0.3)',
    title: 'Symptom Chatbot',
    desc: 'Ask follow-up questions 24/7. AI-guided answers about your symptoms and conditions.',
  },
]

/* ─── Step Data ─── */
const steps = [
  { num: '01', title: 'Upload Report',      desc: 'Drop your PDF or image file' },
  { num: '02', title: 'OCR Extraction',     desc: 'Text pulled out instantly' },
  { num: '03', title: 'AI Explains It',     desc: 'Jargon-free summary in seconds' },
  { num: '04', title: 'Urgency Verdict',    desc: 'Normal / Mild / Serious' },
]

/* ─── Stats ─── */
const stats = [
  { value: '< 30s', label: 'Analysis Time' },
  { value: '95%+',  label: 'OCR Accuracy' },
  { value: '3',     label: 'Urgency Levels' },
  { value: 'Free',  label: 'No Signup Needed' },
]

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ════════════ HERO ════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px' }}>

        {/* Glow orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Main center orb */}
          <div className="orb-float" style={{
            position: 'absolute', top: '30%', left: '50%',
            width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }} />
          {/* Left blue orb */}
          <div style={{
            position: 'absolute', top: '20%', left: '10%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
          {/* Right purple orb */}
          <div style={{
            position: 'absolute', bottom: '15%', right: '10%',
            width: 350, height: 350, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.025,
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="anim-fade-up" style={{ position: 'relative', zIndex: 1, maxWidth: 780, margin: '0 auto' }}>

          {/* Badge */}
          <div className="anim-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)',
            color: '#2dd4bf', fontSize: 13, fontWeight: 600,
            padding: '8px 18px', borderRadius: 100, marginBottom: 32,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#2dd4bf',
              animation: 'pulse-ring 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            Powered by Groq AI — Results in under 30 seconds
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up-1" style={{
            fontSize: 'clamp(44px, 8vw, 78px)',
            fontWeight: 800, lineHeight: 1.07,
            letterSpacing: '-2px', marginBottom: 28,
            color: '#f1f5f9',
          }}>
            Understand Your<br />
            <span className="gradient-text">Medical Reports</span><br />
            In Seconds
          </h1>

          {/* Subheading */}
          <p className="anim-fade-up-2" style={{
            fontSize: 18, color: '#94a3b8', maxWidth: 540, margin: '0 auto 40px',
            lineHeight: 1.75, fontWeight: 400,
          }}>
            Upload any medical document and get a clear, jargon-free AI explanation
            with urgency detection and a built-in symptom chatbot.
          </p>

          {/* CTA Buttons */}
          <div className="anim-fade-up-3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/analyzer" className="btn-primary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Analyze My Report — Free
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              How It Works
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Urgency badges */}
          <div className="anim-fade-up-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ color: '#475569', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Detects:</span>
            {[
              { label: 'Normal',            bg: 'rgba(34,197,94,0.12)',  color: '#4ade80', border: 'rgba(34,197,94,0.25)',  dot: '#4ade80' },
              { label: 'Mild Concern',      bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', border: 'rgba(245,158,11,0.25)', dot: '#fbbf24' },
              { label: 'Serious — See Doctor', bg: 'rgba(239,68,68,0.12)', color: '#f87171', border: 'rgba(239,68,68,0.25)', dot: '#f87171' },
            ].map(b => (
              <span key={b.label} style={{
                background: b.bg, color: b.color, border: `1px solid ${b.border}`,
                fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 100,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: b.dot, display: 'inline-block' }} />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ STATS BAR ════════════ */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {stats.map(s => (
            <div key={s.label} className="stat-pill">
              <div style={{ fontSize: 28, fontWeight: 800, color: '#2dd4bf', lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section style={{ padding: '60px 24px 100px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-block', background: 'rgba(20,184,166,0.1)',
            border: '1px solid rgba(20,184,166,0.25)', color: '#2dd4bf',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16,
          }}>Features</span>
          <h2 style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-1px', lineHeight: 1.15 }}>
            Everything You Need,<br />
            <span className="gradient-text">Nothing You Don't</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} className="feature-card"
              onMouseEnter={e => e.currentTarget.style.borderColor = f.borderHover}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: f.iconBg, color: f.iconColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, border: `1px solid ${f.iconBg}`,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section id="how-it-works" style={{ padding: '60px 24px 100px', background: 'rgba(13,23,48,0.6)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              display: 'inline-block', background: 'rgba(20,184,166,0.1)',
              border: '1px solid rgba(20,184,166,0.25)', color: '#2dd4bf',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16,
            }}>Process</span>
            <h2 style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-1px' }}>
              How It Works
            </h2>
          </div>

          {/* Steps grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, position: 'relative' }}>
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                {/* Connector dot */}
                {i < steps.length - 1 && (
                  <div style={{
                    display: 'none', // shown via CSS on lg
                  }} className="hidden lg:block" />
                )}
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section style={{ padding: '80px 24px 100px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, rgba(59,130,246,0.08) 100%)',
          border: '1px solid rgba(20,184,166,0.2)',
          borderRadius: 28, padding: 'clamp(40px, 6vw, 72px)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative corner orb */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 240, height: 240, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 14, letterSpacing: '-0.5px' }}>
            Ready to understand your report?
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, maxWidth: 420, margin: '0 auto 36px' }}>
            Free to use. No signup required. Your privacy is protected.
          </p>
          <Link to="/analyzer" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Analyze My Report
          </Link>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px', textAlign: 'center', color: '#334155', fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <polyline points="2,12 6,12 8,4 10,20 12,10 14,14 16,12 22,12"
              stroke="#1e3a5f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontWeight: 700, color: '#1e3a5f' }}>HealthLens</span>
        </div>
        2025 HealthLens — Built for educational purposes — Not a substitute for medical advice
      </footer>

    </div>
  )
}
