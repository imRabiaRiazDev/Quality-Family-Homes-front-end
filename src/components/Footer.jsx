import { Phone, Mail, MapPin } from 'lucide-react'
import { BrandMark } from './Header'

const EXPLORE = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Properties', href: '#properties' },
  { label: 'Why We’re Better', href: '#why-us' },
  { label: 'How to Move In', href: '#move-in' },
  { label: 'Tours', href: '#tours' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              className="brand"
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <BrandMark />
              <span>
                <span className="brand__name" style={{ color: 'var(--cream-soft)' }}>
                  Quality Family Homes
                </span>
                <span className="brand__tag" style={{ color: 'var(--brass-soft)' }}>
                  Fort Mill · South Carolina
                </span>
              </span>
            </a>
            <p>
              Fully furnished private room rentals with flexible leases across Fort Mill, Charlotte, and
              Winston-Salem. Move in with just your bags.
            </p>
            <div className="footer__contact">
              <span>
                <Phone size={16} /> <a href="tel:+18036700814">(803) 670-0814</a>
              </span>
              <span>
                <Mail size={16} /> <a href="mailto:jmdarville102@gmail.com">jmdarville102@gmail.com</a>
              </span>
              <span>
                <MapPin size={16} /> Fort Mill, South Carolina
              </span>
            </div>
          </div>

          <nav aria-label="Footer — explore">
            <h3>Explore</h3>
            <ul className="footer__links">
              {EXPLORE.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — legal">
            <h3>Legal</h3>
            <ul className="footer__legal-links">
              <li>
                <a href="#/terms">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#/register">Register Now</a>
              </li>
            </ul>
          </nav>

          <div>
            <h3>Get started</h3>
            <p style={{ color: '#b8ab95', fontSize: '0.88rem', margin: '0 0 1rem' }}>
              Ready to find your room? Register and we’ll reach out with next steps.
            </p>
            <button type="button" className="btn btn--primary btn--sm" onClick={() => navigate('register')}>
              Register Now
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Quality Family Homes. All rights reserved.</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </footer>
  )
}
