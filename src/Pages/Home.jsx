import React from 'react'
import HeroSection from '../Components/HeroSection'
import CategoryPlants from '../Components/CategoryPlants'
import About from '../Components/About'
import Values from '../Components/Values'
import Clients from '../Components/Clients'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <CategoryPlants/>
        <About/>
        <Values/>
        <Clients/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home