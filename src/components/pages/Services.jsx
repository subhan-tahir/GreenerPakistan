import React from 'react'
import Header from '../Navbar/Header'
import Hero from '../Herosection/hero'
import ServiceCards from '../servicePagsComts/ServiceCards'
import AboutHero from '../aboutPagsComts/AboutHero'
import Empower from '../servicePagsComts/Empower'

const Services = () => {
  return (
  <>
  <Header />
  <AboutHero title="Services"/>
  <ServiceCards />
  <Empower />
  </>
  )
}

export default Services
