import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magnifier from "react-magnifier";

const ProjectsDescription = () => {
  const [project, setProject] = useState(JSON.parse(localStorage.getItem("plant") || {}))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
  };



  return (
    <div className='w-full h-full py-2 sm:py-[40px] px-1 md:px-[40px] lg:px-[100px] overflow-hidden'>

      <p className='text-center text-2xl sm:text-4xl font-[600] text-[rgb(31,66,93)]'>{project.name}</p>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 mt-3 sm:mt-9 md:gap-[30px] lg:gap-[80px]'>

        <div>
          <h1 className='text-xl text-[rgb(31,66,93)] font-[600]'>Innovative Engineering at Its Best</h1>
          <p className='text-justify mt-1'><span className='text-[rgb(102,102,102)] font-[600]'>Al Hamd Engineering Services </span>showcases world-class expertise in every project, reflecting excellence and unwavering commitment. Each plant is designed and constructed with a focus on functionality, efficiency, and sustainability. These plants are a testament to modern engineering, redefining industry standards with innovation and precision.</p>

          <h1 className='text-xl text-[rgb(31,66,93)] font-[600] mt-5'>High-Quality Standards</h1>
          <p className='text-justify mt-1'>Every project incorporates the use of high-quality materials and advanced technologies, which are hallmarks of Al Hamd Engineering Services. From energy-efficient solutions to state-of-the-art automation systems, we ensure that every detail is executed with perfection. These plants are renowned for their production capacity and operational efficiency.</p>

          <h1 className='text-xl text-[rgb(31,66,93)] font-[600] mt-5'>A Commitment to Excellence</h1>
          <p className='text-justify mt-1'>Every project by <span className='text-[rgb(102,102,102)] font-[600]'>Al Hamd Engineering Services </span>is a testament to our commitment to client satisfaction and long-term reliability. Our focus is on understanding each client’s specific needs and delivering customized solutions. These plants are not just infrastructure but living examples of industrial growth and technological advancement.</p>
        </div>

        <div className='w-full h-full mt-4 sm:mt-0'>
          <Slider {...settings}>
            {
              project.images.map((e, i) => {
                return (
                  <div className='w-[100%] h-[220px] md:h-[400px]' key={i}>
                    <img src={e} className='w-full h-full object-cover' alt="" />
                  </div>
                )
              })
            }
          </Slider>
        </div>

      </div>

    </div>
  )
}

export default ProjectsDescription