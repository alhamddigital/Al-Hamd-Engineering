import React from 'react'
import { FaPhone } from "react-icons/fa";

const Navbar1 = () => {
    return (
        <div className='flex justify-between items-center border border-red-500 px-[100px]'>

            <div className='w-[120px]'>
                <img className='w-full' src="https://res.cloudinary.com/dqfjfh5wm/image/upload/v1732788965/fr82i0vhs2yxfrnicxqx.png" alt="" />
            </div>

            <div className='flex'>
                <div>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <h1>Call Us Anytime</h1>
                    <h1>03219635875</h1>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <h1>Call Us Anytime</h1>
                    <h1>03219635875</h1>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <h1>Call Us Anytime</h1>
                    <h1>03219635875</h1>
                </div>
            </div>

        </div>
    )
}

export default Navbar1