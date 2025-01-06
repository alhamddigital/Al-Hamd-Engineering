import React from 'react'
import { projectsData } from '../Components/CompaniesArray'
import { Link } from 'react-router-dom'

const AboutComp1 = () => {
    const array = ["Sugar Mills", "Power Plant", "Switch Yard", "Water Treatment Plant", "Ethonal Plants", "Chemical Plants", "Steel Mills", "Cement Plants", "Feed Mills", "Warehouse/Shell/Godown", "Steel Structure", "Roads", "Hospitals", "Textiles", "Sports Complex", "Offices", "Schools", "Houses/Hostal", "Mosques", "Paper Plant"]
    const handleProject = (object) => {
        localStorage.setItem("mainProject", JSON.stringify(object))
    }
    return (
        <div className='px-3 lg:px-[100px]'>
            <div>
                <p className='text-justify mt-5 lg:mt'>
                    <span className='text-red-500 text-xl'>Al-Hamd General Engineering Services (AGES)</span> commenced its journey in 1998. Over the past two decades of excellence, the company has embraced numerous challenging projects, gaining expertise, knowledge, and experience in delivering innovative solutions, managing projects efficiently, and excelling in construction trades and associated engineering services.
                </p>
                <p className='text-justify mt-5 lg:mt'>
                    AGES boasts a team of highly skilled professionals, including managers, engineers, and field experts in the civil engineering domain, dedicated to providing creative solutions, upholding superior quality standards, and surpassing client expectations.
                </p>
                <p className='text-justify mt-5'>
                    Over the years, Al-Hamd has garnered the trust and respect of its clients by successfully completing some of Pakistan's iconic projects, including those in the power and sugar industries, high-rise developments, and architectural masterpieces.
                </p>
                <p className='text-justify mt-5'>
                    Today, Al-Hamd General Engineering Services stands as a leading company in the construction of sugar mills and powerhouses in Pakistan. With nearly 20 years of expertise and a highly capable team, the company continues to deliver cutting-edge construction solutions for complex infrastructure projects nationwide.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>

                <div className=''>
                    <p className='text-3xl font-[600] text-[rgb(31,66,93)]'>What We Do</p>
                    <ul className='ml-3'>
                        {
                            projectsData.map((e, i) => {
                                return (
                                    <Link to="/servicesprojects">
                                        <li onClick={() => handleProject(e)} className='list-disc mt-[4px] font-[600] cursor-pointer hover:text-red-500 duration-300' key={i}>{e.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='col-span-2 mt-5 sm:mt-0'>
                    <div className='w-max rounded-full border border-gray-300 px-4 py-1'>ABOUT OUR COMPANY</div>
                    <p className='text-[33px] leading-[40px] sm:text-[50px] font-[600] text-[rgb(31,66,93)] sm:leading-[55px] mt-2 sm:mt-5'>Trusted Partner in<br /> Construction and Design</p>
                    <div className='w-full h-[300px] mt-5 relative'>
                        <img className='w-full h-full' src="https://buildgo.themeori.com/wp-content/uploads/2024/09/portfolio-8.jpg" alt="" />
                        <div className='w-full h-full absolute top-0 left-0 bg-[rgb(0,0,0,0.6)] flex px-3 sm:px-[50px] items-center text-white text-4xl font-[600]'>2 Decades of<br /> Excellence</div>
                    </div>
                    <p className='mt-9 text-justify'>Our remarkable journey began with an unwavering commitment to excellence, and that steadfast commitment remains deeply embedded at the very core of our daily operations even today. Over the years, we have grown and evolved from being a small, modest local business into a reliable, trusted partner for both residential and commercial projects, providing exceptional services and building strong, lasting relationships along the way.</p>
                </div>

            </div>

        </div>
    )
}

export default AboutComp1