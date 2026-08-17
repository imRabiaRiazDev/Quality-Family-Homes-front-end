import { ArrowLeft } from 'lucide-react'
import { BrandMark } from './Header'

const TERMS = {
  title: 'Terms & Conditions',
  intro: 'Welcome to Quality Family Homes. These Terms & Conditions govern your use of our website and services.',
  sections: [
    {
      heading: '1. About our services',
      body: 'Quality Family Homes helps tenants lease fully furnished rooms in shared homes across Fort Mill, South Carolina, Charlotte, North Carolina, and Winston-Salem, North Carolina. All room listings are subject to availability and are managed in accordance with our application and screening process.',
    },
    {
      heading: '2. Room listings and pricing',
      body: 'Listed prices are per room and billed monthly, unless a bi-weekly or other arrangement is agreed upon in writing. Prices shown on property listing pages are subject to change and may vary based on lease term, room type, and availability. The exact monthly number for a room is confirmed directly by our team.',
    },
    {
      heading: '3. Applications and screening',
      body: 'All prospective tenants must submit an application before moving in. Each application requires a background check and proof of income. Our screening focuses on eviction history and criminal background. Application fees and one-time move-in costs are disclosed before any payment is due.',
    },
    {
      heading: '4. Deposits and payments',
      body: 'To secure a room, a security deposit and first month’s rent are required. For bi-weekly setups, the security deposit plus the first two weeks of rent apply. One-time move-in costs (such as administration and cleaning fees) are separate from the security deposit and rent.',
    },
    {
      heading: '5. Lease terms',
      body: 'Our standard lease is for a 12-month term. Shorter lease terms may be available at a higher rate, and longer terms may be available at a reduced rate. Exact terms are confirmed in the lease agreement before move-in.',
    },
    {
      heading: '6. Conduct and house rules',
      body: 'Tenants share common areas, including the kitchen and living room. We ask all residents and their guests to be courteous with shared spaces, keep noise down during late hours, and respect fellow housemates. Pets and couples are considered on a case-by-case basis.',
    },
    {
      heading: '7. Tours',
      body: 'Tours are available on weekdays between 10am and 4pm. In-person walkthroughs are the default, and video tours are available for those who cannot visit in person. Tour dates and times are confirmed by our team.',
    },
    {
      heading: '8. Limitation of liability',
      body: 'Quality Family Homes provides information on this website for general guidance. While we aim to keep details accurate and current, we do not guarantee that listings, prices, or availability are always up to date. To the fullest extent permitted by law, we are not liable for any loss or damage arising from use of this website or reliance on its content.',
    },
    {
      heading: '9. Changes to these terms',
      body: 'We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and continued use of the website constitutes acceptance of the updated terms.',
    },
    {
      heading: '10. Contact',
      body: 'Questions about these Terms & Conditions can be sent to Quality Family Homes at jmdarville102@gmail.com or by calling (803) 670-0814.',
    },
  ],
}

const PRIVACY = {
  title: 'Privacy Policy',
  intro: 'Quality Family Homes respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.',
  sections: [
    {
      heading: '1. Information we collect',
      body: 'We collect information you provide directly, such as your name, email address, phone number, and any message you send through our registration form. We may also collect basic technical information, such as browser type and pages visited, to help us improve the website.',
    },
    {
      heading: '2. How we use your information',
      body: 'We use the information you provide to respond to your inquiries, schedule tours, process registrations, and communicate with you about available rooms and your application. We may also use it to improve our services and website.',
    },
    {
      heading: '3. Text messaging',
      body: 'If you provide your phone number, you may receive text messages from Quality Family Homes about your inquiry, including responses, follow-ups, and tour-related communications. Message frequency varies, and message and data rates may apply. You can opt out at any time by replying STOP to any message you receive. For assistance, reply HELP.',
    },
    {
      heading: '4. Sharing of information',
      body: 'We do not sell your personal information. Mobile information and SMS consent information will not be shared or sold to third parties or affiliates for marketing or promotional purposes. We may share information with service providers who help us operate our website and manage our rentals (such as listing platforms), and we may disclose information where required by law.',
    },
    {
      heading: '5. Data security',
      body: 'We take reasonable steps to protect the information you share with us. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    },
    {
      heading: '6. Your choices',
      body: 'You may request access to, correction of, or deletion of your personal information at any time. You may also opt out of marketing communications by contacting us or using the unsubscribe instructions in any message you receive.',
    },
    {
      heading: '7. Third-party links',
      body: 'Our website may link to third-party websites, such as property listing platforms. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any site you visit.',
    },
    {
      heading: '8. Children’s privacy',
      body: 'Our services are intended for adults, and we do not knowingly collect personal information from children under 18 years of age.',
    },
    {
      heading: '9. Changes to this policy',
      body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
    },
    {
      heading: '10. Contact',
      body: 'If you have questions about this Privacy Policy or how your information is handled, contact Quality Family Homes at jmdarville102@gmail.com or call (803) 670-0814.',
    },
  ],
}

export default function Legal({ view, navigate }) {
  const doc = view === 'terms' ? TERMS : PRIVACY

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

      <div className="legal">
        <div className="legal__card">
          <h1>{doc.title}</h1>
          <p className="legal__updated">Last updated: July 31, 2026</p>
          <p>{doc.intro}</p>

          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
