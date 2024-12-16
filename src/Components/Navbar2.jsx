import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ProjectsDropdowns from './ProjectsDropdowns';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div className='w-full h-[60px] flex justify-between items-center md:px-[20px] lg:px-[100px] bg-[rgb(31,66,93)] hidden md:flex'>

            <div className='flex'>
                <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='watsapp'>
                    <a href="https://wa.me/+923454014436" target="_blank" rel="noopener noreferrer">
                        <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/watsapp_pyr5pq.png" alt="" />
                    </a>
                </div>
                <div className='w-[40px] h-[40px] ml-[] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='instagram'>
                    <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/linkedin_egzsvk.png" alt="" />
                </div>
                <a href="https://www.facebook.com/p/Al-Hamd-General-Engineering-Services-Lahore-100065319076543/">
                    <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='facebook'>
                        <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/facebook_oozfbi.png" alt="" />
                    </div>
                </a>
                <div className='w-[35px] h-[35px] ml-1 cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='linkedin'>
                    <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/instagram_ygvf9t.png" alt="" />
                </div>
            </div>

            <ul className='flex'>
                <a href="/">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Home
                        <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                    </li>
                </a>

                {/* ------------------------------------Dropdowns----------------------------------- */}
                <li className='ml-7 cursor-pointer group relative flex items-center'><span className='text-white font-[600]'>Projects</span>
                    <div className='ml-1 text-white font-[600]'><IoMdArrowDropdown /></div>
                    <div>
                        <ProjectsDropdowns />
                    </div>
                </li>

                <a href="/services">
                    <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Services
                        <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                    </li>
                </a>

                <li className='ml-7 font-[600] text-white cursor-pointer group relative'>About Us
                    <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                </li>
                <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Contact Us
                    <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar2