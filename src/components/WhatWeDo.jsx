import { BedDouble, Check, Armchair, Wifi, WashingMachine, Car } from 'lucide-react'
import Reveal from './Reveal'

const INCLUDES = [
  { icon: BedDouble, label: 'Bed, dresser & closet' },
  { icon: Armchair, label: 'Desk & chair for work' },
  { icon: Wifi, label: 'Wi-Fi & all utilities' },
  { icon: WashingMachine, label: 'On-site washer & dryer' },
  { icon: Car, label: 'Parking for one vehicle' },
  { icon: Check, label: 'Shared kitchen & living room' },
]

export default function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <div className="wwd__grid">
          <Reveal className="wwd__text">
            <p className="eyebrow">What we do</p>
            <h2>Private rooms, furnished and ready — on a lease that works for you.</h2>
            <p>
              Quality Family Homes helps working professionals lease rooms in quiet, well-kept homes across the
              Carolinas. Every tenant gets their own private bedroom — the only difference between our options is
              whether the bathroom is private or shared.
            </p>
            <p>
              Each room is fully furnished and move-in ready. You share a kitchen and living room with vetted,
              respectful housemates in a clean, quiet house where people look out for each other.
            </p>
            <ul className="wwd__list">
              {INCLUDES.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={18} /> {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="wwd__visual" delay={120}>
            <div className="wwd__frame">
              <img src="/images/ebert/kitchen.jpg" alt="Shared kitchen at a Quality Family Homes property" />
            </div>
            <div className="wwd__card">
              <strong>Clean &amp; respectful</strong>
              <span>
                Courteous shared spaces, quiet in the late hours, and housemates who are screened before they move in.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
