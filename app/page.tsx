'use client'

import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  ExternalLink,
  FileCheck2,
  Globe2,
  Headphones,
  Hotel,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Palmtree,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  X,
} from 'lucide-react'

const MS_FORM_EMBED_URL = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=37oxz-G5vUCqyRrIvtoCgzZ93Fp6_plOiN6r6qlpTBJUOENQMTVQT1RIMTFIRDdKQTFTWkpPWDFPSy4u&embed=true'
const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20of%20the%20booklanka-AQYVl96zUAUrYIOEWbDwkecPiWd6tG.png'

const benefits = [
  { icon: Building2, title: 'Unified Business Profile', text: 'Register once and manage multiple hotels, villas, and experiences under one account with team permissions.' },
  { icon: SlidersIcon, title: 'Direct Control, Zero Friction', text: 'Update inventory, activity slots, seasonal pricing, and cancellation policies without external aggregators.' },
  { icon: Palmtree, title: 'Built for Sri Lankan Tourism', text: 'Get local onboarding support, tailored payout structures, and exposure to high-intent travellers.' },
  { icon: Sparkles, title: 'Priority Launch Placement', text: 'Pre-launch partners receive featured placement across BookLanka.com on launch day.' },
]

const faqs = [
  ['Can I list both accommodations and activities under one account?', 'Yes. Xtranet uses a unified business profile architecture so you can manage property listings and activities seamlessly.'],
  ['Does it cost anything to register for early onboarding?', 'No. Registration and onboarding are 100% free for all eligible Sri Lankan suppliers.'],
  ['When will BookLanka Xtranet go live?', 'We are launching in the coming months. Early registrants get first access to set up their inventory.'],
  ['Do we need to verify each listing individually?', 'No. Once your main Business Profile is reviewed and approved, you can publish and manage properties and activities easily.'],
]

function SlidersIcon(props: React.ComponentProps<typeof BarChart3>) {
  return <BarChart3 {...props} />
}

function Logo({ footer = false }: { footer?: boolean }) {
  return <img src={LOGO_URL} alt="BookLanka.com" className={footer ? 'h-10 w-auto brightness-0 invert' : 'h-10 w-auto'} />
}

function DashboardMockup() {
  return (
    <div className="dashboard-window" aria-label="Preview of the BookLanka Xtranet dashboard">
      <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>Xtranet dashboard</span><div className="window-avatar">BL</div></div>
      <div className="window-content">
        <aside><div className="mini-logo"><span>BL</span><b>Xtranet</b></div><div className="side-active"><LayoutDashboard size={14} /> Overview</div><div><Building2 size={14} /> Listings</div><div><Users size={14} /> Team access</div><div><BarChart3 size={14} /> Analytics</div><div className="side-spacer" /><div><Headphones size={14} /> Support</div></aside>
        <div className="dashboard-main"><div className="dash-heading"><div><p>Good morning, partner</p><h3>Your business at a glance</h3></div><button>+ Add listing</button></div>
          <div className="metric-grid"><div className="metric"><span>Active properties & activities</span><strong>12</strong><small className="up">+3 this month</small></div><div className="metric"><span>Direct bookings</span><strong>84</strong><small className="up">+18.2% this month</small></div><div className="metric approval"><span>Business profile</span><strong><Check size={15} /> Approved</strong><small>Verified 12 Aug 2026</small></div></div>
          <div className="dash-lower"><div className="chart-card"><div className="card-label"><span>Booking performance</span><small>Last 30 days</small></div><div className="chart"><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><div className="chart-line" /></div></div><div className="destination-card"><div className="card-label"><span>Top destinations</span><small>View all</small></div>{['Ella', 'Galle', 'Colombo', 'Sigiriya'].map((place, i) => <div className="destination" key={place}><span className={`dest-dot d${i}`} /><span>{place}</span><strong>{[32, 24, 18, 13][i]}%</strong></div>)}</div></div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [iframeVisible, setIframeVisible] = useState(false)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const isPlaceholder = MS_FORM_EMBED_URL.includes('YOUR_FORM_ID_HERE')

  // Lazy-load the iframe only when the form section is near the viewport.
  // MS Forms often hangs if the iframe tries to load during initial page render.
  useEffect(() => {
    if (isPlaceholder) return
    const el = formSectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframeVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' } // start loading 400px before it scrolls into view
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [isPlaceholder])

  return <main>
    <header className="site-header"><div className="nav-wrap"><a href="#top" className="brand"><Logo /><span className="portal-badge">Partner Portal</span></a><button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#why-partner" onClick={() => setMenuOpen(false)}>Why Partner</a><a href="#who-can-join" onClick={() => setMenuOpen(false)}>Who Can Join</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a className="visit-link" href="https://booklanka.com" target="_blank" rel="noreferrer">Visit BookLanka.com <ExternalLink size={14} /></a><a className="nav-cta" href="#register-form" onClick={() => setMenuOpen(false)}>Register as a Partner <ArrowRight size={15} /></a></nav></div></header>

    <section id="top" className="hero"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" /><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Launching soon — priority onboarding now open</div><h1>Grow your Sri Lankan business, <em>directly.</em></h1><p className="hero-lead">Join BookLanka Xtranet — our upcoming all-in-one partner portal. Manage your accommodations and activities under one unified business profile, take control of your rates and availability, and connect directly with travellers exploring Sri Lanka.</p><div className="hero-actions"><a className="button primary" href="#register-form">Apply for early access <ArrowRight size={18} /></a><a className="button secondary" href="#how-it-works">Explore how it works <ArrowRight size={17} /></a></div><div className="hero-proof"><div className="avatar-stack"><span>SP</span><span>AK</span><span>NM</span><span>+</span></div><p><strong>Local partners are joining early</strong><br /><span>Be ready for launch day.</span></p></div></div><div className="hero-visual"><div className="visual-label"><span className="pulse" /> A first look at Xtranet</div><DashboardMockup /><div className="float-card float-one"><div className="float-icon green"><Check size={15} /></div><span>Profile approved<br /><strong>Ready to go</strong></span></div><div className="float-card float-two"><div className="float-icon pink"><MapPin size={15} /></div><span>Explore Sri Lanka<br /><strong>One profile, everywhere</strong></span></div></div></div></section>

    <section className="trust-strip"><div className="container trust-inner"><span>Built for the people who make Sri Lanka unforgettable</span><div><span><ShieldCheck size={17} /> Secure onboarding</span><span><Globe2 size={17} /> Local-first support</span><span><LockKeyhole size={17} /> No joining fees</span></div></div></section>

    <section id="why-partner" className="section"><div className="container"><div className="section-intro"><span className="section-kicker">Why BookLanka Xtranet</span><h2>More control. More reach.<br /><span>One trusted partner.</span></h2><p>Everything you need to showcase your business and build direct relationships with travellers — without the middleman friction.</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }, i) => <article className="benefit-card" key={title}><div className={`icon-box icon-${i}`}><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href="#register-form">Learn more <ArrowRight size={15} /></a></article>)}</div></div></section>

    <section id="who-can-join" className="section join-section"><div className="container join-grid"><div className="join-copy"><span className="section-kicker">Who can join</span><h2>Your business belongs <span>here.</span></h2><p>Whether you host guests or create unforgettable moments, BookLanka Xtranet gives you the tools to grow on your terms.</p><div className="join-note"><div className="note-icon"><MapPin size={17} /></div><span>From Ella to Jaffna, we are building the definitive home for Sri Lankan tourism.</span></div></div><div className="join-cards"><article className="join-card accommodation"><div className="join-card-top"><div className="join-icon"><Hotel size={23} /></div><span>01</span></div><h3>Accommodation providers</h3><p>Hotels, boutique villas, resorts, guesthouses, eco-lodges, and homestays across Sri Lanka.</p><div className="tag-row"><span>Properties</span><span>Rooms</span><span>Stays</span></div></article><article className="join-card experiences"><div className="join-card-top"><div className="join-icon"><Waves size={23} /></div><span>02</span></div><h3>Activity & experience operators</h3><p>Wildlife safaris, cultural tours, water sports, whale watching, hiking guides, and local experiences.</p><div className="tag-row"><span>Activities</span><span>Tours</span><span>Experiences</span></div></article></div></div></section>

    <section id="how-it-works" className="section process-section"><div className="container"><div className="section-intro centered"><span className="section-kicker">Simple by design</span><h2>From application to <span>live listings.</span></h2><p>Our local supply team will be with you every step of the way.</p></div><div className="steps"><div className="step-line" />{[['01', 'Submit your business details', 'Fill out the official registration form below in under 2 minutes.', FileCheck2], ['02', 'Business profile verification', 'Our supply team reviews your details and contacts you via email or WhatsApp.', Users], ['03', 'Priority Xtranet access', 'Receive your official invitation before public launch and set up your team.', Sparkles]].map(([number, title, text, Icon]) => <div className="step" key={number as string}><div className="step-number">{number as string}</div><div className="step-icon"><Icon size={22} /></div><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></div></section>

    <section id="register-form" className="register-section" ref={formSectionRef}><div className="container register-grid"><div className="register-copy"><span className="section-kicker">Early partner access</span><h2>Put your business on the map.</h2><p>Tell us a little about your business and our partner team will be in touch. It takes less than two minutes.</p><ul className="check-list"><li><Check size={16} /> Instant confirmation after submitting</li><li><Check size={16} /> Dedicated onboarding manager</li><li><Check size={16} /> Priority account setup before launch</li></ul><div className="support-card"><div className="support-head"><div className="support-icon"><Headphones size={18} /></div><div><strong>Need help onboarding?</strong><span>Our partner team is here to help.</span></div></div><a href="mailto:partners@booklanka.com"><Mail size={15} /> partners@booklanka.com</a><a href="https://wa.me/94112345678" target="_blank" rel="noreferrer"><Waves size={15} /> +94 11 234 5678 <small>WhatsApp</small></a></div></div><div className="form-shell"><div className="form-header"><div><span className="secure-label"><LockKeyhole size={13} /> Official supplier registration</span><strong>Secured by Microsoft 365</strong></div><a href={MS_FORM_EMBED_URL} target="_blank" rel="noreferrer">Open full screen <ExternalLink size={14} /></a></div><div className="iframe-wrap">{isPlaceholder ? <div className="form-placeholder"><div className="placeholder-icon"><FileCheck2 size={25} /></div><h3>Your registration form goes here</h3><p>Connect your Microsoft Form by updating <code>MS_FORM_EMBED_URL</code> at the top of this page.</p><div className="placeholder-progress"><span /><span /><span /></div><a className="button primary" href="mailto:partners@booklanka.com?subject=BookLanka%20Xtranet%20Partner%20Registration">Contact partner support <ArrowRight size={16} /></a></div> : <>{!loaded && <div className="iframe-loading"><div className="spinner" /><span>Loading secure form…</span></div>}{iframeVisible && <div className="iframe-crop"><iframe src={MS_FORM_EMBED_URL} title="BookLanka Xtranet supplier registration form" width="100%" height="900" frameBorder="0" marginHeight={0} marginWidth={0} scrolling="no" style={{ border: 'none', maxWidth: '100%' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen onLoad={() => setLoaded(true)} /></div>}</>}</div><div className="form-foot"><ShieldCheck size={14} /> Your information is kept private and used only for partner onboarding.</div></div></div></section>

    <section id="faq" className="section faq-section"><div className="container faq-grid"><div className="faq-intro"><span className="section-kicker">Questions, answered</span><h2>Good to know<br /><span>before you join.</span></h2><p>Still curious? Reach our partner support team and we will help you get started.</p><a href="mailto:partners@booklanka.com" className="text-link">Talk to partner support <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

    <footer className="footer"><div className="container"><div className="footer-top"><div><Logo footer /><p>The partner portal for Sri Lankan tourism.<br />Built to help local businesses go further.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#why-partner">Why Partner</a><a href="#who-can-join">Who Can Join</a><a href="#how-it-works">How It Works</a></div><div><strong>Connect</strong><a href="https://booklanka.com" target="_blank" rel="noreferrer">BookLanka.com <ExternalLink size={13} /></a><a href="mailto:partners@booklanka.com">Partner support</a><a href="#faq">FAQs</a></div></div></div><div className="footer-bottom"><span>© 2026 BookLanka. All rights reserved.</span><span>Made for Sri Lanka <span className="footer-dot">•</span> <a href="https://booklanka.com" target="_blank" rel="noreferrer">booklanka.com</a></span></div></div></footer>
  </main>
}
