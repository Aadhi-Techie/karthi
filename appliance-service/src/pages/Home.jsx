import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="hero-badge">⚡ Same-day service available</span>
            <h1 className="hero-title">
              Appliance broke?<br />
              <em>We fix it today.</em>
            </h1>
            <p className="hero-sub">
              Professional fridge, washing machine & AC repair in Madurai
              and surrounding areas. Genuine parts, transparent pricing, 90-day warranty.
            </p>
            <div className="hero-ctas">
              <Link to="/booking" className="btn-primary">Book a service →</Link>
              <a href="tel:+919750885764" className="btn-outline">📞 Call now</a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card">
              <span className="hero-card-icon">🧊</span>
              <div>
                <p className="hero-card-title">Fridge not cooling</p>
                <p className="hero-card-sub">Fixed in 2–4 hrs</p>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">🫧</span>
              <div>
                <p className="hero-card-title">WM not spinning</p>
                <p className="hero-card-sub">Same-day fix</p>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">✅</span>
              <div>
                <p className="hero-card-title">500+ happy customers</p>
                <p className="hero-card-sub">This month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <p className="stat-number">5+</p>
            <p className="stat-label">Years experience</p>
          </div>
          <div>
            <p className="stat-number">500+</p>
            <p className="stat-label">Repairs done</p>
          </div>
          <div>
            <p className="stat-number">100+</p>
            <p className="stat-label">Happy customers/month</p>
          </div>
          <div>
            <p className="stat-number">90 days</p>
            <p className="stat-label">Service warranty</p>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA CHIPS ── */}
      <section className="hero" style={{ padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <p className="dark-section section-label">WE COME TO YOU</p>
          <h2 className="dark-section section-title" style={{ marginBottom: '1.2rem' }}>
            Serving Madurai & 30 km around
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['Madurai', 'Dindigul', 'Sivagangai', 'Kariapatti', 'Aruppukottai',
              'Melur', 'Usilampatti', 'Natham', 'Batlagundu', 'Vadipatti'].map(a => (
              <span key={a} style={{
                background: 'rgba(59,130,246,.15)', color: '#60A5FA',
                fontSize: '.85rem', fontWeight: 600,
                padding: '.4rem 1rem', borderRadius: '50px',
                border: '1px solid rgba(59,130,246,.25)'
              }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE KARTHIKEYAN ── */}
      <section className="hero" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div className="dark-section" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">WHY KARTHIKEYAN</p>
            <h2 className="section-title">You call — I come. Simple.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              No middlemen. No call centres. When you reach out, you're talking
              directly to the technician who shows up at your door.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
            {[
              { icon: '🤝', title: 'Direct line', desc: 'Call Karthikeyan directly — no waiting, no middlemen.' },
              { icon: '💰', title: 'Transparent pricing', desc: 'Quote before work starts. No hidden charges.' },
              { icon: '🔧', title: 'Genuine parts', desc: 'Only OEM & quality spare parts. No counterfeits.' },
              { icon: '🛡️', title: '90-day warranty', desc: 'Every repair guaranteed for 90 days.' },
            ].map(item => (
              <div key={item.title} className="hero-card" style={{ flexDirection: 'column', textAlign: 'center', padding: '1.5rem' }}>
                <span style={{ fontSize: '1.8rem', marginBottom: '.6rem' }}>{item.icon}</span>
                <p className="hero-card-title" style={{ marginBottom: '.4rem' }}>{item.title}</p>
                <p className="hero-card-sub">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="stats-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--ink-1)', marginBottom: '.6rem' }}>
          Appliance giving trouble right now?
        </h2>
        <p style={{ color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
          Same-day slots available in Madurai & surrounding areas. Book online or call directly.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/booking" className="btn-primary">Book a service →</Link>
          <a href="tel:+919750885764" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            border: '2px solid var(--border)', color: 'var(--ink-2)',
            padding: '.7rem 1.6rem', borderRadius: '50px',
            fontSize: '.95rem', fontWeight: 600, textDecoration: 'none'
          }}>📞 +91 97508 85764</a>
        </div>
      </section>
    </>
  )
}
