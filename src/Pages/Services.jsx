import React, { useEffect } from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Footer from '../HomeComp/Footer'
import ServicesCom from '../ServicesComp/ServicesCom'
import { useDispatch } from 'react-redux'
import { pageNumber } from '../Redux/Slice'

const Services = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(pageNumber(3))
  },[])
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <ServicesCom/>
        <Footer/>
    </div>
  )
}

export default Services