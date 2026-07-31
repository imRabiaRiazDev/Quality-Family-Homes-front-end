import { CalendarRange, ShieldCheck, Sparkles, CreditCard, BedDouble, Home } from 'lucide-react'
import Reveal from './Reveal'

const REASONS = [
  {
    icon: CalendarRange,
    title: 'Flexible leases',
    text: 'Standard 12-month leases, shorter terms available at a slightly higher cost — and longer terms that save you money every month.',
  },
  {
    icon: Home,
    title: 'Utilities & Wi-Fi included',
    text: 'Heat, electricity, gas, water, trash, and high-speed internet are bundled into your rent. One payment, no surprise bills.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted, respectful housemates',
    text: 'Everyone is screened before moving in and shares the same values: a clean, quiet, respectful home where people look out for each other.',
  },
  {
    icon: CreditCard,
    title: 'Credit isn’t the deciding factor',
    text: 'Our review focuses on eviction and criminal history. A less-than-perfect credit score won’t automatically rule you out.',
  },
  {
    icon: BedDouble,
    title: 'Fully furnished rooms',
    text: 'Arrive with just your bags. Each room comes with a bed, desk, chair, dresser, and closet — and a shared kitchen and living room.',
  },
  {
    icon: Sparkles,
    title: 'On-site convenience',
    text: 'Washers and dryers for laundry plus parking for one vehicle per tenant, all included with your room.',
  },
]

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Why we’re better</p>
          <h2>Housing that respects your life — and your wallet.</h2>
          <p className="lead">
            We built a simpler way to rent a room: transparent pricing, honest screening, and a home that’s ready the
            day you arrive.
          </p>
        </Reveal>

        <div className="why__grid">
          {REASONS.map(({ icon: Icon, title, text }, index) => (
            <Reveal className="why__item" key={title} delay={index * 70}>
              <div className="why__icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="why__quote" delay={100}>
          <figure>
            <blockquote>Everyone here is vetted, respectful, and just looking for a clean, affordable place to live.</blockquote>
            <figcaption>Quality Family Homes</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
