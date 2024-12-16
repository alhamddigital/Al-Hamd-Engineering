import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'

const Hsection = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className='w-full h-[80vh] consHerosection p-[1px] overflow-hidden '>
        <div className='w-full w-full md:w-[600px] mt-[100px] ml-2 md:mt-[100px] md:ml-[100px]'>
          <h1 className='text-[rgb(255,255,255)] text-[27px] sm:text-5xl font-[600]'>Constructing Dreams<br/> into Reality</h1>
          <p className='text-white mt-5 sm:text-xl'>Delivering innovative, sustainable, and reliable construction solutions tailored to meet modern infrastructure and industry needs</p>
        </div>
      </div>
    </>
  )
}

export default Hsection