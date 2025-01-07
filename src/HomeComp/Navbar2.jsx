import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Navbar2Dropdown from './Navbar2Dropdown';
import { useSelector } from 'react-redux';


const Navbar2 = () => {
const [checkDropdown, setcheckDropdown] = useState(false)       
    const {page}=useSelector(state=>state.construction)
    // console.log(page,"Page")
    console.log(checkDropdown, "checkDropdown")
    return (
        <div className='w-full h-[60px] flex justify-between items-center md:px-[20px] lg:px-[100px] bg-[rgb(31,66,93)] hidden md:flex sticky top-[60px] left-0 z-10'>

            <div className='flex items-center'>
                <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='Watsapp'>
                    <a href="https://wa.me/+923454014436" target="_blank" rel="noopener noreferrer">
                        <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/watsapp_pyr5pq.png" alt="watsapp" />
                    </a>
                </div>
                <div className='w-[40px] h-[40px] ml-[] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='Linkedin'>
                    <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/linkedin_egzsvk.png" alt="linkedin" />
                </div>
                <a href="https://www.facebook.com/p/Al-Hamd-General-Engineering-Services-Lahore-100065319076543/" target='blank'>
                    <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='Facebook'>
                        <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/facebook_oozfbi.png" alt="facebook" />
                    </div>
                </a>
                <div className='w-[35px] h-[35px] ml-1 cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='Instagram'>
                    <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/instagram_ygvf9t.png" alt="instagram" />
                </div>
            </div>

            <ul className='flex'>
                <a href="/">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Home
                        <div className={`w-0 transition-all duration-700 ${page === 1 ? "w-full" : ""} h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full`}></div>
                    </li>
                </a>

                {/* ------------------------------------Dropdowns----------------------------------- */}
                <li onMouseOver={() => setcheckDropdown(true)} onMouseOut={() => setcheckDropdown(false)} className='ml-7 cursor-pointer relative flex items-center'><span className='text-white font-[600]'>Projects</span>
                    <div className='ml-1 text-white font-[600]'><IoMdArrowDropdown /></div>
                    {
                        checkDropdown && (<Navbar2Dropdown />)
                    }

                </li>

                <a href="/services">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Services
                        <div className={`w-0 transition-all duration-700 ${page === 3 ? "w-full" : ""} h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full`}></div>
                    </li>
                </a>
                <a href="/about">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>About Us
                        <div className={`w-0 transition-all duration-700 ${page === 4 ? "w-full" : ""} h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full`}></div>
                    </li>
                </a>
                <a href="/contact">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Contact Us
                        <div className={`w-0 transition-all duration-700 ${page === 5 ? "w-full" : ""} h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full`}></div>
                    </li>
                </a>
                <a href="/gallery">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Gallery
                        <div className={`w-0 transition-all duration-700 ${page === 6 ? "w-full" : ""} h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full`}></div>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default Navbar2