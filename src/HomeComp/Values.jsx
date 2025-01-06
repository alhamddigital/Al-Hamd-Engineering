import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
// import { constructionValues } from '../Redux/Slice'

const Values = () => {
  const dispatch = useDispatch()
  const valuesRef = useRef()

  const leftDiv = useRef()
  const rightDiv = useRef()
  const headingRef = useRef()

  // useEffect(() => {
  //   gsap.fromTo(
  //     leftDiv.current,
  //     { x: '-200%' },
  //     {
  //       x: '0',
  //       scrollTrigger: {
  //         trigger: leftDiv.current,
  //         start: 'Top 70%',
  //         end: 'Top 60%',
  //         scrub: 1,
  //         markers: false
  //       }
  //     }
  //   )

  //   gsap.fromTo(
  //     rightDiv.current,
  //     { x: '-300%' },
  //     {
  //       x: '0',
  //       scrollTrigger: {
  //         trigger: rightDiv.current,
  //         start: 'Top 90%',
  //         end: 'Top 70%',
  //         scrub: 1,
  //         markers: false
  //       }
  //     }
  //   )

  //   gsap.fromTo(
  //     headingRef.current,
  //     { fontSize: '2px' },
  //     {
  //       fontSize: '24px',
  //       scrollTrigger: {
  //         trigger: headingRef.current,
  //         start: 'Top 100%',
  //         end: 'Top 60%',
  //         scrub: 1,
  //         markers: false
  //       }
  //     }
  //   )
  // }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      dispatch(
        constructionValues(valuesRef.current.getBoundingClientRect().top)
      )
    })
  }, [])

  return (
    <>
      <div
        ref={valuesRef}
        id='consValues'
        className='w-full px-3 lg:px-[100px] py-8 lg:py-[20px]'
      >
        <h1
          ref={headingRef}
          className='text-3xl text-center font-[600] text-[rgb(30,118,234)]'
        >
          Our Values
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-4 sm:mt-9 gap-5 lg:gap-[60px]'>
          <div ref={leftDiv} className='bg-[rgb(30,118,234)] py-5 px-3'>
            <h1 className='text-white text-2xl'>STRENGTH</h1>
            <p className='text-white mt-2 text-justify'>
            We prioritize durability and resilience, using the highest quality materials and precise engineering to create structures built to last. Our focus on strength ensures reliability in every project, delivering robust solutions that withstand the test of time. From foundations to finishes, we are committed to crafting buildings that are as enduring as they are exceptional.
            </p>
            <h1 className='text-white text-2xl mt-6'>PERFORMANCE</h1>
            <p className='text-white mt-2 text-justify'>
            Our performance-driven approach combines advanced construction techniques, skilled craftsmanship, and meticulous attention to detail. We strive to exceed expectations, optimizing functionality and efficiency in every project. By staying at the forefront of industry standards and innovation, we deliver seamless execution and exceptional results that inspire confidence and satisfaction for our clients.
            </p>
            <h1 className='text-white text-2xl mt-6'>PASSION</h1>
            <p className='text-white mt-2 text-justify'>
            Passion is the cornerstone of our work, fueling creativity and dedication in every project we undertake. We transform ideas into reality with an unwavering commitment to excellence. Your vision inspires us to push boundaries, delivering innovative and beautiful structures that reflect our love for construction and our desire to create spaces that truly matter.
            </p>
          </div>

          <div
            ref={rightDiv}
            className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'
          >
            <div className='w-full'>
              <img
                className='w-full h-full object-cover'
                src='https://www.letsbuild.com/wp-content/uploads/2023/07/Depositphotos_170347820_s-2019-1.jpg'
                alt=''
              />
            </div>
            <div className='w-full'>
              <img
                className='w-full h-full object-cover'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOcWC_Obv-rHbdc43QqsmMeF_SB_yLKBlDA&s'
                alt=''
              />
            </div>
            <div className='w-full hidden lg:block'>
              <img
                className='w-full h-full object-cover'
                src='https://eu-images.contentstack.com/v3/assets/blt2ded89bf530e7d7a/blt2599905615d33667/656075d8a7ead1040adae4f0/Screen_20Shot_202023-11-16_20at_2012.27.40_20PM.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale'
                alt=''
              />
            </div>
            <div className='w-full hidden lg:block'>
              <img
                className='w-full h-full object-cover'
                src='https://aic-builds.org/wp-content/uploads/2023/09/The-Value-of-Ethics-in-Construction-Workforce-Management.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Values
