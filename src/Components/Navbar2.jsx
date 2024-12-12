import React from 'react'

const Navbar2 = () => {
    return (
        <div className='flex justify-between items-center px-[100px] py-[15px] mt-2 bg-[rgb(31,66,93)]'>

            <div className='flex items-center mt-5'>
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
                <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Home
                    <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                </li>
                <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Services
                    <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                </li>
                <li className='ml-7 font-[600] text-white cursor-pointer group relative'>Projects
                    <div className='w-0 transition-all duration-700 h-[4px] absolute top-7 left-0 bg-[rgb(226,31,47)] group-hover:w-full'></div>
                </li>
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