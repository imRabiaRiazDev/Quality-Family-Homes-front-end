import { useState } from 'react'
import { ArrowLeft, Home, MessageSquareText, CheckCircle2 } from 'lucide-react'
import { BrandMark } from './Header'

const initialForm = { name: '', email: '', phone: '', message: '', smsConsent: false }

export default function Register({ navigate }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (form.phone.trim() && !/^[+()\-.\s0-9]{7,}$/.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <div className="subpage">
      <div className="subpage__bar">
        <div className="container subpage__bar-inner">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); navigate('home') }}>
            <BrandMark />
            <span>
              <span className="brand__name">Quality Family Homes</span>
              <span className="brand__tag">Fort Mill · South Carolina</span>
            </span>
          </a>
          <button type="button" className="back-link" onClick={() => navigate('home')}>
            <ArrowLeft size={16} /> Back to home
          </button>
        </div>
      </div>

      <div className="form-shell">
        <div className="form-card">
          {submitted ? (
            <div className="form-success">
              <div className="form-success__icon">
                <CheckCircle2 size={36} />
              </div>
              <h2>Thanks, {form.name.split(' ')[0] || 'friend'}!</h2>
              <p>
                Your request has been received. Our team will reach out to you shortly to help you find the right
                room.
              </p>
              <button type="button" className="btn btn--primary" onClick={() => navigate('home')}>
                Back to home
              </button>
            </div>
          ) : (
            <>
              <div className="form-card__head">
                <p className="eyebrow">Register</p>
                <h1>Let’s find your room.</h1>
                <p>Tell us a little about yourself and how we can help.</p>
              </div>

              <form className="form-grid" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? true : undefined}
                  />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? true : undefined}
                  />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    Phone number <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(803) 555-0123"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={errors.phone ? true : undefined}
                  />
                  {errors.phone && <span className="field__error">{errors.phone}</span>}
                </div>

                <div className="sms-note">
                  <MessageSquareText size={18} />
                  <span>
                    By checking the box, you agree to receive SMS messages from Quality Family Homes. You can
                    opt out at any time by replying <strong>STOP</strong>. For help, reply <strong>HELP</strong>.
                    View our <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('privacy') }}>
                      Privacy Policy
                    </a>{' '}
                    and <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('terms') }}>
                      Terms &amp; Conditions
                    </a>.
                  </span>
                </div>

                <div className="field">
                  <label className="consent-check">
                    <input
                      id="smsConsent"
                      name="smsConsent"
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={handleChange}
                    />
                    <span>
                      I agree to receive SMS messages from Quality Family Homes regarding my rental inquiry,
                      including responses, follow-ups, room availability, tour scheduling, application
                      information, and customer support. Message frequency varies. Message and data rates may
                      apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for help. SMS
                      consent is optional and is not a condition of purchasing or using our services.
                    </span>
                  </label>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Which property are you interested in? When would you like to tour?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary">
                    <Home size={18} /> Submit registration
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
