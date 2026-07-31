import Reveal from './Reveal'

const STEPS = [
  {
    title: 'Apply',
    text: 'Submit the short application so we can start your background check. The check is $50, and we’ll need a proof of income.',
  },
  {
    title: 'Tour your home',
    text: 'See it in person on a weekday between 10am and 4pm — or over a video call if you can’t make it in person.',
  },
  {
    title: 'Move in',
    text: 'Pay the security deposit and first month’s rent, and your furnished room is yours. Bi-weekly setups pay the deposit plus the first two weeks.',
  },
]

const FEES = [
  { label: 'Background check', value: '$50' },
  { label: 'Administration', value: '$125' },
  { label: 'Cleaning', value: '$175' },
]

export default function MoveIn() {
  return (
    <section className="section section--sand" id="move-in">
      <div className="container">
        <div className="movein__grid">
          <Reveal>
            <p className="eyebrow">How to move in</p>
            <h2>Three simple steps from “looking” to “home.”</h2>
            <p className="lead">
              No surprises, no long waits. Here’s exactly what to expect once you find a room you like.
            </p>

            <div className="steps">
              {STEPS.map((step, index) => (
                <div className="step" key={step.title}>
                  <span className="step__num">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="fees">
              <div className="fees__head">
                <h3>One-time move-in costs</h3>
                <p>Separate from your security deposit and first month’s rent</p>
              </div>
              <div className="fees__list">
                {FEES.map((fee) => (
                  <div className="fees__row" key={fee.label}>
                    <span>{fee.label}</span>
                    <span>{fee.value}</span>
                  </div>
                ))}
              </div>
              <p className="fees__note">
                Screening focuses on eviction and criminal history — credit score isn’t the primary factor. Visit a
                listing page or call the team for the exact monthly number for the room you want.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
