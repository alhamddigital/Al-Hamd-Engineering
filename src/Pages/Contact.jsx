import React, { useEffect } from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Footer from '../HomeComp/Footer'
import Contact1 from '../ContactComp/Contact1'
import { useDispatch } from 'react-redux'
import { pageNumber } from '../Redux/Slice'

const Contact = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(pageNumber(5))
  },[])
  return (
    <>
        <Navbar1/>
        <Navbar2/>
        <Contact1/>
        <Footer/>
    </>
  )
}

export default Contact