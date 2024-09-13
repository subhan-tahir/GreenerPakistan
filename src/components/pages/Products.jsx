import React from 'react'
import Header from '../Navbar/Header'
import AboutHero from '../aboutPagsComts/AboutHero'
import ServiceCards from '../servicePagsComts/ServiceCards'
import OurWork from '../aboutPagsComts/OurWork'
import Packages from '../packages/Packages'
import Counter from '../counterGreener/Counter'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'

const Products = () => {
  return (
    <>
    <Header />
    <AboutHero title={"Products"}/>
    <ServiceCards />
    <OurWork />
    <Packages />
    <Counter />
    <AutoSlider />
    <Footer />
    
    </>
  )
}

export default Products
