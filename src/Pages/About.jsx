import React, { useEffect } from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import AboutComp1 from '../AboutComp.jsx/AboutComp1'
import Footer from '../HomeComp/Footer'
import { pageNumber } from '../Redux/Slice'
import { useDispatch } from 'react-redux'

const About = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(pageNumber(4))
  },[])
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <AboutComp1/>
        <Footer/>
    </div>
  )
}

export default About