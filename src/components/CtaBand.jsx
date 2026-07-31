import { ArrowRight, Phone } from 'lucide-react'
import Reveal from './Reveal'

export default function CtaBand({ navigate }) {
  return (
    <section className="section cta">
      <div className="container cta__inner">
        <Reveal>
          <h2>Your room is waiting.</h2>
          <p>
            Register to tour a home or ask us a question. Rooms move fast — reserve your spot before it’s gone.
          </p>
        </Reveal>
        <Reveal className="cta__actions" delay={120}>
          <button type="button" className="btn btn--primary" onClick={() => navigate('register')}>
            Register Now <ArrowRight size={18} />
          </button>
          <a className="btn btn--light" href="tel:+18036700814">
            <Phone size={18} /> (803) 670-0814
          </a>
        </Reveal>
      </div>
    </section>
  )
}
