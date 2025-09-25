import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import StatsBanner from './components/StatsBanner'
import NukkadSection from './components/NukkadSection'
import ManthanSection from './components/ManthanSection'
import PlaysSection from './components/PlaysSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <StatsBanner />
      <ManthanSection />
      <NukkadSection />
      <PlaysSection />
      <TeamSection />
      <Footer/>
    </>
  )
}
