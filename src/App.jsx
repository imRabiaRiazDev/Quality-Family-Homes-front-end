import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Properties from './components/Properties'
import WhyUs from './components/WhyUs'
import MoveIn from './components/MoveIn'
import Tours from './components/Tours'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Register from './components/Register'
import Legal from './components/Legal'

const TITLES = {
  home: 'Quality Family Homes — Furnished Room Rentals in the Carolinas',
  register: 'Register — Quality Family Homes',
  terms: 'Terms & Conditions — Quality Family Homes',
  privacy: 'Privacy Policy — Quality Family Homes',
}

const VIEWS = ['home', 'register', 'terms', 'privacy']

function viewFromPath(path) {
  const clean = path.replace(/^\/+|\/+$/g, '')
  return VIEWS.includes(clean) ? clean : 'home'
}

export default function App() {
  const [view, setView] = useState(() => viewFromPath(window.location.pathname))
  const [navOpen, setNavOpen] = useState(false)

  const navigate = useCallback((next) => {
    setView(next)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
    const url = next === 'home' ? '/' : `/${next}`
    if (window.location.pathname !== url) {
      window.history.pushState(null, '', url)
    }
  }, [])

  useEffect(() => {
    const onPop = () => {
      setView(viewFromPath(window.location.pathname))
      setNavOpen(false)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.title = TITLES[view] || TITLES.home
  }, [view])

  if (view === 'register') {
    return <Register navigate={navigate} />
  }

  if (view === 'terms' || view === 'privacy') {
    return <Legal view={view} navigate={navigate} />
  }

  return (
    <>
      <Header navigate={navigate} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero navigate={navigate} />
        <WhatWeDo />
        <Properties />
        <WhyUs />
        <MoveIn />
        <Tours navigate={navigate} />
        <CtaBand navigate={navigate} />
        <Contact />
      </main>
      <Footer navigate={navigate} />
    </>
  )
}
