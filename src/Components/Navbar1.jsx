import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Navbar1 = () => {
    return (
        <div className='w-full flex justify-between items-center py-[6px] md:px-[40px] lg:px-[100px]'>

            <div className='w-[120px]'>
                <img className='w-full' src="https://res.cloudinary.com/dqfjfh5wm/image/upload/v1732788965/fr82i0vhs2yxfrnicxqx.png" alt="" />
            </div>

            <div className='flex'>
                <div>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <p className='mt-1'>Call Us Anytime</p>
                    <p>03219635875</p>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><FiClock /></div>
                    <p className='mt-1'>Opening Time</p>
                    <p>08:00 - 07:00</p>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><MdEmail /></div>
                    <p className='mt-1'>Email Us</p>
                    <p>alhamddigitalservices@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar1