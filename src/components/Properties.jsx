import { ArrowUpRight, MapPin, Bed, Bath, Ruler, Info } from 'lucide-react'
import properties from '../data/properties'
import Reveal from './Reveal'

function PropertyCard({ property, index }) {
  return (
    <Reveal as="article" delay={index * 90}>
      <a
        className="property-card"
        href={property.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${property.name} — view full listing on Hemlane`}
      >
        <div className="property-card__media">
          <div className="property-card__arch">
            <img src={property.image} alt={`${property.name}, ${property.address}`} loading="lazy" />
          </div>
          <span className="property-card__badge">{property.status}</span>
          <span className="property-card__price">
            {property.price}
            {property.priceNote}
          </span>
        </div>

        <div className="property-card__body">
          <span className="property-card__city">
            <MapPin size={13} /> {property.address}
          </span>
          <h3>{property.name}</h3>

          <div className="property-card__facts">
            <span className="property-card__fact">
              <Bed size={14} /> {property.beds} bed
            </span>
            <span className="property-card__fact">
              <Bath size={14} /> {property.baths} bath
            </span>
            {property.sqft && (
              <span className="property-card__fact">
                <Ruler size={14} /> {property.sqft.toLocaleString()} sq ft
              </span>
            )}
            <span className="property-card__fact">{property.type}</span>
          </div>

          <p className="property-card__blurb">{property.blurb}</p>

          <div className="property-card__chips">
            {property.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className="property-card__foot">
            <span className="property-card__view">
              View property <ArrowUpRight size={16} />
            </span>
            <span className="property-card__lease">{property.leaseNote}</span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export default function Properties() {
  return (
    <section className="section section--sand" id="properties">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Available rooms</p>
          <h2>Choose the home that fits your life.</h2>
          <p className="lead">
            Browse our current rooms across Fort Mill, Charlotte, and Winston-Salem. Select any property to open its
            full listing with complete photos, lease options, and requirements.
          </p>
        </Reveal>

        <div className="properties__grid">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <Reveal
          style={{ marginTop: '2rem' }}
          className="property-hint"
        >
          <p className="property-card__lease" style={{ textAlign: 'center', margin: 0, fontSize: '0.88rem' }}>
            <Info size={14} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
            Each card opens that property&rsquo;s official listing page, where you&rsquo;ll find full details, more
            photos, and application information.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
