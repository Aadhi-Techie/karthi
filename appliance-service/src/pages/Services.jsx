import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: '🧊',
    name: 'Fridge / Refrigerator repair',
    time: '2–4 hours',
    price: '₹299 – ₹2,499',
    problems: [
      'Not cooling', 'Compressor issue',
      'Water leaking', 'Ice maker not working',
      'Freezer not working', 'Loud noise / vibration',
      'Door seal broken', 'Temperature not maintaining',
    ],
  },
  {
    icon: '🫧',
    name: 'Washing machine repair',
    time: '1–3 hours',
    price: '₹299 – ₹2,999',
    problems: [
      'Not spinning', 'Drum not rotating',
      'Water not draining', 'Excessive vibration',
      'Door not opening', 'Error codes',
      'Not filling water', 'Leaking water',
    ],
  },
  {
    icon: '❄️',
    name: 'AC service & repair',
    time: '1–2 hours',
    price: '₹399 – ₹3,499',
    problems: [
      'Not cooling', 'Gas refill needed',
      'Water dripping inside', 'Not turning on',
      'Remote not working', 'Noisy operation',
      'Filter cleaning', 'Annual service',
    ],
  },
]

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <p className="section-label">OUR SERVICES</p>
        <h1 className="section-title">Fast, reliable appliance repair</h1>
        <p className="section-sub">
          Fast, reliable appliance repair across Chennai. Transparent pricing,
          genuine parts, 90-day warranty on all repairs.
        </p>
      </div>

      <div className="services-list">
        {SERVICES.map(s => (
          <div className="service-card" key={s.name}>
            <div className="service-left">
              <div className="service-icon">{s.icon}</div>
              <h2 className="service-name">{s.name}</h2>
              <p className="service-meta">🕐 {s.time}</p>
              <p className="service-meta">💰 {s.price}</p>
              <Link to="/booking" className="service-cta">Book this service →</Link>
            </div>
            <div className="service-problems">
              <p className="problems-label">COMMON PROBLEMS WE FIX:</p>
              <div className="problems-grid">
                {s.problems.map(p => (
                  <span key={p} className="problem-item">{p}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
