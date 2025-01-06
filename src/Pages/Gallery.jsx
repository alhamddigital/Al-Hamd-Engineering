import React, { useEffect } from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Footer from '../HomeComp/Footer'
import AllImages from '../GalleryComp.jsx/AllImages'
import { useDispatch } from 'react-redux'
import { pageNumber } from '../Redux/Slice'

const Gallery = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(pageNumber(6))
  },[])
  return (
    <>
      <Navbar1/>
      <Navbar2/>
      <AllImages/>
      <Footer/>
    </>
  )
}

export default Gallery