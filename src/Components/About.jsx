import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { constructionAbout } from '../Redux/Slice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const dispatch = useDispatch()
    const aboutRef = useRef()
    const leftDiv=useRef()
    const rightDiv=useRef()
    const headingRef=useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(constructionAbout(aboutRef.current.getBoundingClientRect().top))
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        vertical: true,  // Enables vertical sliding
        verticalSwiping: true  // Enables vertical swipe gesture
    };


    const sliderArray = [
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603735/alliance_3_o8hz88.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603736/alliance_4_luoedi.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603737/allaince_1_ysbjkh.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603737/allaince_2_eiqiar.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603737/alliance_5_uwvwj3.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732603737/alliance_6_yduzkg.jpg",
    ]

    return (
        <>
            <div ref={aboutRef} id='consAbout' className='w-full min-h-screen px-3 lg:px-[100px] py-4 md:py-9 overflow-hidden'>
                <h1 ref={headingRef} className='text-center text-[30px]'>About Us</h1>

                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-3 md:mt-7 lg:mt-9 gap-9'>
                    
                    <div ref={leftDiv} className='flex flex-col justify-center customShadow rounded-xl px-3 md:px-9 pb-4'>
                        <p className='text-justify mt-5 lg:mt'><span className='text-red-500 text-xl'>Al-Hamd General Engineering Services(AGES)</span> began consruction in 1998. Over the years, The company has undertaken many challenging projects and accumulated skills, know-how and experiences and build solutions, project management services, building trades and related engineering work.</p>
                        <p className='text-justify mt-5 lg:mt'>AGES comprises of highly professional managers, engineers, and other field staff related to the civil engineering discipline, committed to delivering innovative solutions, ensuring quality standards, and exceeding client expectations.</p>
                        <p className='text-justify mt-5'>Over the year Al-Hamd has earned respect and trust of its clientage by completing some of Pakistan's landmark projects involving, power and sugar industry projects, high-rise and architectural works.</p>
                        <p className='text-justify mt-5'>Today, Al-Hamd General Engineering Services is one of the Leading company to construct Sugar and Power House industry in Pakistan. Through the strength and expertise of our people, Al-Hamd Construction Company has sustained its business success providiing innovative construction solutions to complex infrastructure projects across Pakistan for over 19 years.</p>
                    </div>

                    <div ref={rightDiv} className='w-full'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {
                                    sliderArray.map((e, i) => {
                                        return (
                                                <div key={i} className='w-[100%] h-[220px] md:h-[400px] lg:h-[500px]'>
                                                    <img className='w-full h-full object-cover' src={e} />
                                                </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About