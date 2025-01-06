import React, { useEffect } from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Hsection from '../HomeComp/Hsection'
import About from '../HomeComp/About'
import Values from '../HomeComp/Values'
import Clients from '../HomeComp/Clients'
import Contact from "../HomeComp/Contact"
import Footer from '../HomeComp/Footer'
import { useDispatch } from 'react-redux'
import { pageNumber } from '../Redux/Slice'

const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(pageNumber(1))
  },[])
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