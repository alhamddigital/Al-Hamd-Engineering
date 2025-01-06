import React, { useEffect, useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Sidebar from '../Components/Sidebar';

const Navbar1 = () => {
    const [checkMenu, setCheckMenu] = useState(false)
    const handleMenu = () => {
        setCheckMenu(!checkMenu)
    }

    useEffect(() => {
        if (checkMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [checkMenu]);

    return (
        <div className='w-full h-[60px] flex justify-between items-center md:px-[20px] pl-1 pr-2 lg:px-[100px] sticky top-0 left-0 bg-white z-10'>

            <div className='flex items-center'>

                <div className='w-[120px] cursor-pointer'>
                    <a href="/">
                        <img className='w-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1735543701/consLogo_z95qoy.png" alt="" />
                    </a>
                </div>

                <h1 className='hidden lg:block sm:text-3xl sm:ml-5 font-[600] text-[rgb(226,31,47)] text-nowrap'>Al Hamd Engineering</h1>
            </div>

            <div className='flex hidden md:flex'>
                <div className='flex items-center'>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <div className='ml-3'>
                        <p className='mt-1'>Call Us Anytime</p>
                        <p>03219635875</p>
                    </div>
                </div>
                <div className='ml-5 flex items-center'>
                    <div className='text-[rgb(226,31,47)]'><FiClock /></div>
                    <div className='ml-3'>
                        <p className='mt-1'>Opening Time</p>
                        <p>08:00 - 07:00</p>
                    </div>
                </div>
                <div className='ml-5 flex items-center'>
                    <div className='text-[rgb(226,31,47)]'><MdEmail /></div>
                    <div className='ml-3'>
                        <p className='mt-1'>Email Us</p>
                        <p>@gmail.com</p>
                    </div>
                </div>
            </div>

            <div onClick={handleMenu} className='text-3xl block md:hidden cursor-pointer'>
                <FiMenu />
            </div>

            {checkMenu && <Sidebar setCheckMenu={setCheckMenu} />}

        </div>
    )
}

export default Navbar1