import React from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import Footer from '../HomeComp/Footer'
import AllImages from '../GalleryComp.jsx/AllImages'

const Gallery = () => {
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