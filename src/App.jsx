import React from 'react'
import Header from './components/Navbar/Header'
import Hero from './components/Herosection/hero'
import AboutGreener from './components/AboutGreener'
import './App.css'
import CustomizedCards from './components/Custimzedcards/CustomizedCards'
import HouseWorker from './components/HouseWorker'
import Counter from './components/counterGreener/Counter'
import Packages from './components/packages/Packages'
import GeoMessage from './components/GeoMessage'
import AutoSlider from './components/AutoSlider'
import Footer from './components/footer/Footer'
import Routing from './Routing'


const App = () => {
  return (
    <>
    {/*Navbar */}
   
    <Routing />
    </>
  )
}

export default App