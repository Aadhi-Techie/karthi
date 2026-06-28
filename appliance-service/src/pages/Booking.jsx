import { useState } from 'react'

const APPLIANCES = ['Fridge / Refrigerator', 'Washing Machine', 'AC / Air Conditioner']
const BRANDS = ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'IFB', 'Voltas', 'Daikin', 'Blue Star', 'Other']
const AREAS = [
  'Madurai', 'Dindigul', 'Sivagangai', 'Kariapatti', 'Aruppukottai',
  'Melur', 'Usilampatti', 'Natham', 'Batlagundu', 'Vadipatti',
  'Tirumangalam', 'Thiruppuvanam', 'Other (nearby area)',
]

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    appliance: '', brand: '', issue: '',
    area: '', preferDate: '', preferTime: '',
    address: '',
  })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-form-card" style={{ maxWidth: 500, margin: '3rem auto' }}>
          <div className="booking-success">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2>Booking Confirmed!</h2>
            <p style={{ marginBottom: '1rem' }}>
              Thanks <strong>{form.name}</strong>! Karthikeyan will call you on{' '}
              <strong>{form.phone}</strong> within 30 minutes to confirm your slot.
            </p>
            <a href="tel:+919750885764" className="btn-call-big" style={{ display: 'inline-flex', marginTop: '1rem' }}>
              📞 Call now if urgent
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <div className="booking-inner">

        {/* FORM */}
        <div className="booking-form-card">
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ink-1)', marginBottom: '.3rem' }}>
            Book a service
          </h2>
          <p style={{ fontSize: '.88rem', color: 'var(--ink-3)', marginBottom: '.5rem' }}>
            Fill in the details below. Karthikeyan will call to confirm within 30 min.
          </p>

          <form onSubmit={submit}>
            {/* Your details */}
            <p className="form-section-label">Your details</p>
            <div className="form-row">
              <div className="form-group">
                <label>Full name <span className="required">*</span></label>
                <input name="name" value={form.name} onChange={handle} placeholder="Ravi Kumar" required />
              </div>
              <div className="form-group">
                <label>Phone number <span className="required">*</span></label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="98765 43210" required type="tel" />
              </div>
            </div>
            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label>Email (optional)</label>
              <input name="email" value={form.email} onChange={handle} placeholder="ravi@email.com" type="email" />
            </div>

            {/* Appliance details */}
            <p className="form-section-label" style={{ marginTop: '1.5rem' }}>Appliance details</p>
            <div className="form-row">
              <div className="form-group">
                <label>Appliance type <span className="required">*</span></label>
                <select name="appliance" value={form.appliance} onChange={handle} required>
                  <option value="">Select appliance</option>
                  {APPLIANCES.map(a => <option key={a}>{a}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Brand name</label>
                <select name="brand" value={form.brand} onChange={handle}>
                  <option value="">Select brand (optional)</option>
                  {BRANDS.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label>Describe the issue <span className="required">*</span></label>
              <textarea name="issue" value={form.issue} onChange={handle}
                placeholder="E.g. Fridge not cooling, making loud noise... any details help!" required />
            </div>

            {/* Location */}
            <p className="form-section-label" style={{ marginTop: '1.5rem' }}>Your location</p>
            <div className="form-row">
              <div className="form-group">
                <label>Area / Town <span className="required">*</span></label>
                <select name="area" value={form.area} onChange={handle} required>
                  <option value="">Select your area</option>
                  {AREAS.map(a => <option key={a}>{a}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Preferred time</label>
                <select name="preferTime" value={form.preferTime} onChange={handle}>
                  <option value="">Any time</option>
                  <option>Morning (8am – 11am)</option>
                  <option>Afternoon (11am – 3pm)</option>
                  <option>Evening (3pm – 8pm)</option>
                </select>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label>Full address <span className="required">*</span></label>
              <textarea name="address" value={form.address} onChange={handle}
                placeholder="Door no., Street, Area, Madurai / Dindigul / Sivagangai..."
                required style={{ minHeight: 70 }} />
            </div>

            <button type="submit" className="btn-submit">Confirm booking →</button>
          </form>
        </div>

        {/* SIDEBAR */}
        <aside className="booking-sidebar">
          <div className="sidebar-card">
            <h3>Why choose us?</h3>
            <ul className="sidebar-list">
              <li>✅ Same-day service available</li>
              <li>🔧 Karthikeyan comes personally</li>
              <li>💰 Transparent pricing</li>
              <li>🛡️ 90-day service warranty</li>
              <li>🔩 Genuine spare parts</li>
              <li>📞 30-min confirmation call</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>We cover</h3>
            <ul className="sidebar-list">
              <li>📍 Madurai city</li>
              <li>📍 Dindigul</li>
              <li>📍 Sivagangai</li>
              <li>📍 Kariapatti</li>
              <li>📍 Aruppukottai</li>
              <li>📍 30 km radius & more</li>
            </ul>
          </div>

          <div className="sidebar-call-card">
            <p className="sidebar-call-label">Prefer to call?</p>
            <p className="sidebar-call-hours">Mon–Sat, 8am–8pm</p>
            <a href="tel:+919750885764" className="btn-call-big">
              📞 +91 97508 85764
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
