import React from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Hsection from '../HomeComp/Hsection'
import About from '../HomeComp/About'
import Values from '../HomeComp/Values'
import Clients from '../HomeComp/Clients'
import Contact from "../HomeComp/Contact"
import Footer from '../HomeComp/Footer'

const Home = () => {
  return (
    <>
      <Hsection/>
      <About/>
      <Values/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home