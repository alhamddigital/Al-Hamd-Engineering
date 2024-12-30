import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contact1 = () => {
    return (
        <div className='w-full min-h-screen px-2 py-5 lg:px-[150px] lg:py-[60px]'>
            <h1 className='text-center text-3xl font-[600]'>Contact Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-9 mt-5 lg:mt-9'>

                <div>
                    <h1 className='text-2xl font-[600]'>Have a Question ?</h1>
                    <div className='flex items-center mt-5'>
                        <div className=' text-red-500'><FaPhoneFlip /></div>
                        <p className='ml-2'>+654654654645</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <div className='text-red-500 text-xl'><MdEmail /></div>
                        <p className='ml-2'>@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <div className='text-red-500 text-xl'><MdLocationPin /></div>
                        <p className='ml-2'>55-A Muhafiz Town,Lahore,Pakistan</p>
                    </div>
                    <p className='mt-3'>Feel free to contact us in case of any query and we would love to get back to you on top priority</p>
                    <div className='mt-6'>
                        <iframe
                            className='w-[100%] h-[240px] sm:h-[300px]'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.099748746778!2d74.21628!3d31.454743000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff5f02fed4b5%3A0xdbaba95cc008c0f6!2sAl%20Hamd%20General%20Engineering%20Services!5e0!3m2!1sen!2sus!4v1729843374665!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Bahria Town Map"
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label className='font-[600]'>Name <span className='text-red-500'>*</span></label>
                        <input className='w-full border border-[rgb(191,191,191)] p-2 mt-3' placeholder='Enter Name' type="text" />
                    </div>
                    <div className='mt-5'>
                        <label className='font-[600]'>Email <span className='text-red-500'>*</span></label>
                        <input className='w-full border border-[rgb(191,191,191)] p-2 mt-3' placeholder='Enter Email' type="text" />
                    </div>
                    <div className='mt-5'>
                        <label className='font-[600]'>Subject <span className='text-red-500'>*</span></label>
                        <input className='w-full border border-[rgb(191,191,191)] p-2 mt-3' placeholder='Let us know how we can help you' type="text" />
                    </div>
                    <div className='mt-5'>
                        <label className='font-[600] block'>Your Message <span className='text-red-500'>*</span></label>
                        <textarea className='border border-[rgb(191,191,191)] mt-3 w-full p-2' placeholder='Leave a comment...' rows={5} name="" id=""></textarea>
                    </div>
                    <button className='bg-blue-500 text-white rounded px-3 py-2 cursor-pointer mt-5'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Contact1