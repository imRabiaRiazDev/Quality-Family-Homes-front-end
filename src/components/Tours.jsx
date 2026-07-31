import { CalendarDays, Video, Building2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const FACTS = [
  {
    icon: CalendarDays,
    title: 'Weekdays, 10am – 4pm',
    text: 'Tours are held on weekdays. Rooms move fast, so reserving your spot early is smart.',
  },
  {
    icon: Building2,
    title: 'In-person by default',
    text: 'Walk through the home and see your room before you commit.',
  },
  {
    icon: Video,
    title: 'Video tours available',
    text: 'Can’t make it in person? We’ll send a video call walkthrough instead.',
  },
]

export default function Tours({ navigate }) {
  return (
    <section className="section tours" id="tours">
      <div className="container">
        <div className="tours__grid">
          <Reveal>
            <p className="eyebrow">Tours &amp; availability</p>
            <h2>See your future home before you say yes.</h2>
            <p className="lead">
              Book a tour on a weekday and get a real feel for the house, the room, and the neighborhood — before you
              make a decision.
            </p>

            <div className="tours__facts">
              {FACTS.map(({ icon: Icon, title, text }) => (
                <div className="tour-fact" key={title}>
                  <div className="tour-fact__icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className="btn btn--primary" onClick={() => navigate('register')}>
              Register for a tour <ArrowRight size={18} />
            </button>
          </Reveal>

          <Reveal delay={140}>
            <div className="tours__visual">
              <img src="/images/durand/dining.png" alt="Dining area at 2263 Durand Rd, Fort Mill" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
