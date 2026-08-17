import { ArrowRight, Mail, Phone, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { value: '4', label: 'Homes across the Carolinas' },
  { value: '$600', label: 'Rooms start here, monthly' },
  { value: '24', label: 'Month longest lease term' },
  { value: '10–4', label: 'Weekday tours, by appointment' },
]

export default function Hero({ navigate }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <Reveal className="hero__copy">
            <p className="hero__eyebrow">Quality Family Homes · Fort Mill, SC</p>
            <h1 className="hero__title">
              Move in with <em>just your bags.</em>
            </h1>
            <p className="hero__sub">
              Fully furnished private rooms in quiet, vetted homes across Fort Mill, Charlotte, and Winston-Salem.
              Flexible leases, utilities and Wi-Fi included, and a room that is always your own.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--primary" href="#properties">
                Browse rooms <ArrowRight size={18} />
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => navigate('register')}>
                <CalendarCheck size={18} /> Register for a tour
              </button>
            </div>
            <div className="hero__contact">
              <a href="tel:+18036700814">
                <Phone size={16} /> (803) 670-0814
              </a>
              <a href="mailto:support@qualityfamily.house">
                <Mail size={16} /> support@qualityfamily.house
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__media" delay={120}>
            <div className="hero__arch">
              <img src="/images/durand/cover.png" alt="Furnished bedroom at 2263 Durand Rd, Fort Mill" />
            </div>
            <div className="hero__badge">
              <strong>Furnished</strong>
              <span>Every room includes a bed,<br />desk, chair &amp; closet</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-inner">
            {STATS.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
