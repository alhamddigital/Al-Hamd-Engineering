import React, { useEffect, useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoMdHome } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false)
  const [activeLink, setactiveLink] = useState('home')
  const [checkSidebar, setSidebar] = useState(false)
  const [currentCategory, setcurrentCategory] = useState("home")
  const {
    consHomeTop,
    consAboutTop,
    consValuesTop,
    consClientTop,
    consContactTop
  } = useSelector(state => state.construction)

  useEffect(() => {
    if (consHomeTop < window.innerHeight) {
      setactiveLink('home')
    }

    if (consAboutTop < window.innerHeight) {
      setactiveLink('about')
    }

    if (consValuesTop < window.innerHeight) {
      setactiveLink('values')
    }

    if (consClientTop < window.innerHeight) {
      setactiveLink('client')
    }

    if (consContactTop < window.innerHeight) {
      setactiveLink('contact')
    }
  }, [consHomeTop])


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.97) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOverlay = (event) => {
    if (event.target.classList.contains("overlay")) {
      setSidebar(false)
    }
  }

  const handleCross = () => {
    setSidebar(false)
  }

  const handleHamburger = () => {
    setSidebar(!checkSidebar)
  }

  useEffect(() => {
    if (checkSidebar) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [checkSidebar]);

  console.log(consContactTop, 'consContactTop')
  // console.log(checkSidebar,"checkSidebar")


  return (
    <>
      <div
        className={`w-full h-[60px] ${
          scrolled ? 'customShadow' : ''
        } sticky top-0 left-0 mx-auto flex bg-white justify-between items-center px-2 sm:px-9 z-20`}
      >
        <div className='flex items-center'>
          <div className='logosAnimation w-[100px]'>
            <a href='/'>
              <img
                className='w-full h-full cursor-pointer'
                src="https://res.cloudinary.com/dqfjfh5wm/image/upload/v1732788965/fr82i0vhs2yxfrnicxqx.png"
                alt=''
              />
            </a>
          </div>

        </div>

        <ul className='w-[500px] justify-between hidden lg:flex'>
          <li onClick={() => setactiveLink('home')} className={`cursor-pointer px-2 py-[6px] font-[500] ${activeLink == 'home' ? 'bg-[rgb(199,96,105)] text-white' : ''} hover:bg-[rgb(199,96,105)] hover:text-white  rounded`}>
            <a href='#consHome'>Home</a>
          </li>
          <li onClick={() => setactiveLink('about')} className={`cursor-pointer px-2 py-[6px] font-[500] ${  activeLink == 'about' ? 'bg-[rgb(199,96,105)] text-white' : ''} hover:bg-[rgb(199,96,105)] hover:text-white  rounded`}>
            <a href='#consAbout'>About Us</a>
          </li>
          <li onClick={() => setactiveLink('values')} className={`cursor-pointer px-2 py-[6px] font-[500] ${activeLink == 'values' ? 'bg-[rgb(199,96,105)] text-white' : ''} hover:bg-[rgb(199,96,105)] hover:text-white  rounded`}>
            <a href='#consValues'>Values</a>
          </li>
          <li onClick={() => setactiveLink('client')} className={`cursor-pointer px-2 py-[6px] font-[500] ${activeLink == 'client' ? 'bg-[rgb(199,96,105)] text-white' : ''} hover:bg-[rgb(199,96,105)] hover:text-white  rounded`}>
            <a href='#consClient'>Clients</a>
          </li>
          <li onClick={() => setactiveLink('contact')} className={`cursor-pointer px-2 py-[6px] font-[500] ${activeLink == 'contact' ? 'bg-[rgb(199,96,105)] text-white' : ''} hover:bg-[rgb(199,96,105)] hover:text-white  rounded`}>
            <a href='#consContact'>Contact Us</a>
          </li>
        </ul>
        <div onClick={handleHamburger} className='cursor-pointer text-3xl lg:hidden'>
          <HiOutlineBars3 />
        </div>
      </div>

      {/* -------------------------Sidebar------------------------ */}
      <div onClick={handleOverlay} className={`overlay w-full h-screen z-20 bg-[rgba(0,0,0,0.6)] ${checkSidebar ? "visible" : "invisible"} fixed top-0 left-0 cursor-crosshair`}>
        <div className='w-[280px] sm:w-[300px] h-screen bg-[rgb(249,250,251)] absolute top-0 right-0 cursor-auto'>
          <div onClick={handleCross} className='w-[35px] h-[35px] absolute top-2 right-2 rounded-full border-2 border-black text-black flex justify-center items-center text-2xl cursor-pointer hover:bg-black hover:text-white'><RxCross2 /></div>
          <h1 className='ml-2 text-xl mt-4'>Al Hamd General Engineering Services</h1>

          <ul className='px-1 mt-3'>
            <li onClick={handleCross} className={`flex items-center mt-1 ${activeLink === "home" ? "bg-[rgb(255,208,6)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1 rounded`}>
              <a href="#consHome" className='flex items-center text-black w-full'>
                Home
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${activeLink === "about" ? "bg-[rgb(255,208,6)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1 rounded`}>
              <a href="#consAbout" className='flex items-center text-black w-full'>
                About
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${activeLink === "values" ? "bg-[rgb(255,208,6)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1 rounded`}>
              <a href="#consValues" className='flex items-center text-black w-full'>
                Values
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${activeLink === "client" ? "bg-[rgb(255,208,6)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1 rounded`}>
              <a href="#consClient" className='flex items-center text-black w-full'>
                Client
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${activeLink === "contact" ? "bg-[rgb(255,208,6)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1 rounded`}>
              <a href="#consContact" className='flex items-center text-black w-full'>
                Contact
              </a>
            </li>

          </ul>

        </div>
      </div>

    </>
  )
}

export default Navbar
