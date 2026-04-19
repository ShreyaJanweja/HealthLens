import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(20,184,166,0.15)',
            border: '1px solid rgba(20,184,166,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {/* ECG / pulse icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polyline points="2,12 6,12 8,4 10,20 12,10 14,14 16,12 22,12"
                stroke="#2dd4bf" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f1f5f9', letterSpacing: '-0.3px' }}>
            Health<span style={{ color: '#2dd4bf' }}>Lens</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
          {[['/', 'Home'], ['/analyzer', 'Analyzer']].map(([to, label]) => (
            <Link key={to} to={to} style={{
              textDecoration: 'none',
              fontSize: 14, fontWeight: 600,
              color: pathname === to ? '#2dd4bf' : '#94a3b8',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => { if (pathname !== to) e.target.style.color = '#f1f5f9' }}
              onMouseLeave={e => { if (pathname !== to) e.target.style.color = '#94a3b8' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/analyzer" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Try Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'none' }}
          className="block md:hidden"
        >
          {open
            ? <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0d1730', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Link to="/" onClick={() => setOpen(false)} style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <Link to="/analyzer" onClick={() => setOpen(false)} style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 600 }}>Analyzer</Link>
          <Link to="/analyzer" onClick={() => setOpen(false)} className="btn-primary" style={{ justifyContent: 'center', padding: '12px 20px' }}>Try Free</Link>
        </div>
      )}
    </nav>
  )
}
