import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'

const Hsection = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className='w-full h-[70vh]'>
        <div className='w-full h-[80vh]'>
          <img className='w-full h-full' src="https://wallpapers.com/images/hd/construction-background-qf7iizvernadg5jw.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hsection