import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Properties', href: '#properties' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How to Move In', href: '#move-in' },
  { label: 'Tours', href: '#tours' },
  { label: 'Contact', href: '#contact' },
]

export function BrandMark() {
  return (
    <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#E2D4BA" />
      <path d="M32 12 10 30h6v20h14V38h4v12h14V30h6L32 12z" fill="#AE8A4F" />
      <circle cx="32" cy="30" r="3.4" fill="#F7F2E9" />
    </svg>
  )
}

export default function Header({ navigate, navOpen, setNavOpen }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a
            className="brand"
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Quality Family Homes — back to top"
          >
            <BrandMark />
            <span>
              <span className="brand__name">Quality Family Homes</span>
              <span className="brand__tag">Fort Mill · South Carolina</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="nav__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn--primary btn--sm nav__cta" onClick={() => navigate('register')}>
              Register Now
            </button>
            <button
              type="button"
              className="nav__toggle"
              aria-expanded={navOpen}
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen((open) => !open)}
            >
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>

        <nav className={`mobile-nav ${navOpen ? 'mobile-nav--open' : ''}`} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <button type="button" className="btn btn--primary" onClick={() => navigate('register')}>
            Register Now
          </button>
        </nav>
      </div>
    </header>
  )
}
