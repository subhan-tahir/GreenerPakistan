import React from 'react'
import Header from '../Navbar/Header'
import AboutHero from '../aboutPagsComts/AboutHero'
import EnergyCalculator from '../Energy/EnergyCalculator'

const EnergyLoad = () => {
  return (
<>
<Header />
<AboutHero title={"Energy Load Calculator"}/>
<EnergyCalculator />
</>
  )
}

export default EnergyLoad
