import { Phone, Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const CARDS = [
  {
    icon: Phone,
    title: 'Call us',
    line: '(803) 670-0814',
    href: 'tel:+18036700814',
    sub: 'Questions, pricing, or to check availability.',
  },
  {
    icon: Mail,
    title: 'Email us',
    line: 'jmdarville102@gmail.com',
    href: 'mailto:jmdarville102@gmail.com',
    sub: 'We’ll get back to you with the details you need.',
  },
  {
    icon: MapPin,
    title: 'Where we are',
    line: 'Fort Mill, South Carolina',
    href: null,
    sub: 'Serving Fort Mill, Charlotte & Winston-Salem.',
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Contact</p>
          <h2>We’re here to help you find home.</h2>
          <p className="lead">Reach out any time — we’ll help you find the right room and answer every question.</p>
        </Reveal>

        <div className="contact__grid">
          {CARDS.map(({ icon: Icon, title, line, href, sub }, index) => (
            <Reveal className="contact__card" key={title} delay={index * 90}>
              <div className="contact__icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              {href ? (
                <p>
                  <a href={href}>{line}</a>
                </p>
              ) : (
                <p>{line}</p>
              )}
              <p>{sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
