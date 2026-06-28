import { Link } from 'react-router-dom'

const AREAS = [
  'Madurai', 'Dindigul', 'Sivagangai', 'Kariapatti', 'Aruppukottai',
  'Melur', 'Usilampatti', 'Natham', 'Batlagundu', 'Vadipatti',
  'Tirumangalam', 'Thiruppuvanam', 'Paramakudi', 'Manamadurai',
  'Devakottai', 'Sattur', 'Rajapalayam',
]

export default function About() {
  return (
    <div className="about-page">

      {/* ── STORY SECTION ── */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-text">
            <p className="section-label">ABOUT KARTHIKEYAN</p>
            <h1 className="section-title">Madurai's trusted solo technician</h1>
            <p>
              I'm <strong>Karthikeyan</strong> — the person who picks up your call,
              comes to your door, fixes your appliance, and follows up after.
              No team of strangers. Just me, directly.
            </p>
            <p>
              I started as a technician at a local repair shop — <strong>2 full years</strong> learning
              every brand, every model, every common failure pattern. After that, I went solo.
              <strong> 3+ years as an independent technician</strong>, serving Madurai and
              the surrounding 30 km — Dindigul, Sivagangai, Kariapatti, Aruppukottai and more.
            </p>
            <p>
              When you call KK Appliance, <strong>Karthikeyan picks up.</strong> When the
              technician arrives at your home, <strong>it's Karthikeyan.</strong> That kind
              of accountability is hard to find — and it's what my customers come back for.
            </p>
            <Link to="/booking" className="btn-primary" style={{ display: 'inline-block', marginTop: '.5rem' }}>
              Book a repair →
            </Link>
          </div>

          {/* Karthikeyan single card — no fake team */}
          <div className="kk-card">
            <div className="kk-avatar">👨‍🔧</div>
            <h2 className="kk-name">Karthikeyan K.</h2>
            <p className="kk-role">Founder & Solo Technician</p>
            <div className="kk-tags">
              <span className="kk-tag">Fridge specialist</span>
              <span className="kk-tag">Washing machine</span>
              <span className="kk-tag">AC service</span>
              <span className="kk-tag">5+ yrs experience</span>
              <span className="kk-tag">Madurai based</span>
            </div>
            <p className="kk-quote">
              "When you call, I pick up. When I arrive, you know exactly who's
              in your home. That's the KK Appliance promise."
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <p className="about-stat-num">5+</p>
            <p className="about-stat-label">Years in business</p>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-num">500+</p>
            <p className="about-stat-label">Repairs completed</p>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-num">95%</p>
            <p className="about-stat-label">Customer satisfaction</p>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-num">90 days</p>
            <p className="about-stat-label">Warranty on all repairs</p>
          </div>
        </div>
      </section>

      {/* ── WHY SOLO IS BETTER ── */}
      <section className="about-why">
        <div className="about-why-inner">
          <div className="dark-section">
            <p className="section-label">WHY SOLO WORKS</p>
            <h2 className="section-title">The solo advantage</h2>
            <p className="section-sub">
              Big companies send whoever's free. I send me — every time.
            </p>
          </div>
          <div className="about-why-grid">
            <div className="why-card">
              <div className="why-icon">📞</div>
              <h3 className="why-title">Direct accountability</h3>
              <p className="why-desc">
                You call Karthikeyan. He shows up. No surprises, no substitutes,
                no "let me check with the team."
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3 className="why-title">Lower prices</h3>
              <p className="why-desc">
                No company overheads, no middlemen commissions. You pay for the
                skill and the parts — nothing else.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔒</div>
              <h3 className="why-title">Trust & safety</h3>
              <p className="why-desc">
                You know who's coming into your home. Same person every time —
                Karthikeyan, not a stranger from a roster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE AREAS ── */}
      <section className="about-coverage">
        <div className="coverage-inner">
          <p className="section-label">SERVICE AREA</p>
          <h2 className="section-title">Madurai & 30 km coverage</h2>
          <p className="section-sub">
            Serving Madurai city and all surrounding areas within 30 km —
            Dindigul, Sivagangai, Kariapatti, Aruppukottai and more.
          </p>
          <div className="coverage-areas">
            {AREAS.map(a => <span key={a} className="area-chip">{a}</span>)}
          </div>
          <p className="coverage-note">
            Don't see your area? Just call — we likely cover it! 📞{' '}
            <a href="tel:+919750885764" style={{ color: 'var(--clr-primary)', fontWeight: 600 }}>
              +91 97508 85764
            </a>
          </p>
        </div>
      </section>

    </div>
  )
}
