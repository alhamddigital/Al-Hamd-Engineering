import React, { useEffect, useMemo, useRef, useState } from 'react'
import {projectsData} from "./CompaniesArray"
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Navbar from "./Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { constructionHome } from '../Redux/Slice'
import { ToastContainer } from 'react-toastify'

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className='w-[20px] h-full lg:w-[30px] lg:h-[100%] flex items-center justify-center bg-white rounded absolute top-0 left-0 z-[1]'onClick={onClick}>
      <FaChevronLeft />
    </div>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <div
      className='w-[20px] h-full lg:w-[30px] lg:h-[100%] flex items-center justify-center bg-white rounded absolute top-0 right-0 z-[1]'onClick={onClick}>
      <FaChevronRight />
    </div>
  )
}

const HeroSection = () => {
  const {selectedMill}=useSelector(state=>state.construction)
  const [selectedPlant, setselectedPlant] = useState()
  const [hoveredIndex, sethoveredIndex] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedCompany,setselectedCompany]=useState(null)
  const [progress, setProgress] = useState(0)
  const [dropDownAbove,setdropDownAbove]=useState(false)

  const dropDownRef=useRef()
  const dropDownRefParent=useRef()
  const homeRef = useRef()
  const dispatch=useDispatch()

  useEffect(()=>{
    setselectedPlant(selectedMill)
  },[selectedMill])

  const settings = {
    className: 'center',
    centerMode: false,
    infinite: true,
    slidesToShow: 6,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: current => setActiveSlide(current),
    responsive: [
      {
        // For screens 320px and up
        breakpoint: 320,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        // For screens 768px and up
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Show 4 slides at 768px
        }
      },
      {
        // For screens 1024px and up
        breakpoint: 1024,
        settings: {
          slidesToShow: 6, // Show 6 slides at 1024px
        }
      }
    ]
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      dispatch(constructionHome(homeRef.current.getBoundingClientRect().top))
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const totalScroll = docHeight - winHeight
      const scrollPercentage = Math.round((scrollTop / totalScroll) * 100)
      setProgress(scrollPercentage)
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  

  const handlePlants = object => {
    setselectedPlant(object)
  }

  const handleDropdowns=(idx)=>{
    
    if(hoveredIndex === null){
      sethoveredIndex(idx)
    }else{
      sethoveredIndex(null)
    }
    setselectedCompany(idx)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hoveredIndex !== null &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        sethoveredIndex(null);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [hoveredIndex]);



const handleSlideIndex= (idx)=>{
  setActiveSlide(idx)
}


  return (
    <>
        <div
          className='h-[5px] bg-blue-600 fixed z-20 top-0 left-0 transition-all duration-300'
          style={{ width: `${progress}%` }}
        ></div>
        {/* <Navbar /> */}
      <div id='consHome' ref={homeRef} className='constructionHeroSec w-full py-1 md:p-3'>

        <div className='w-full h-full'>

          {/* --------------------------------Grid------------------------------- */}

          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 px-2 md:gap-5'>

            <div ref={dropDownRef} className='dropdown-sidebar w-full md:h-[70vh] lg:h-[95vh] px-1 bg-gradient-to-l hidden md:block from-[rgb(4,39,53)] to-[rgb(32,130,85)] overflow-y-scroll'>
              {projectsData.map((object, i) => {
                return (
                    <div key={i}  id='consHome' onClick={()=>handleDropdowns(i)} className='w-full h-max mt-1 text-xl cursor-pointer relative'>
                      
                      <div className={`w-full flex itemx-center cursor-pointer py-[2px] rounded ${selectedCompany === i ? "bg-gradient-to-r from-[rgb(4,39,53)] to-[rgb(32,130,85)] " : ""} hover:bg-gradient-to-r from-[rgb(4,39,53)] to-[rgb(32,130,85)]  hover:font-[480] text-white`}>
                        <div className='mt-[3px]'>
                          {hoveredIndex == i ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <h1 className='ml-1 md:text-[11px] lg:text-[15px]'>{object?.name}</h1>
                      </div>

                      {/* ---------------------------DropDown-------------------------- */}
                      <div key={i} className={` dropdownChild  ${ hoveredIndex == i ? 'h-max' : 'h-0'} ${ hoveredIndex == i ? 'h-max' : 'h-0'}  absolute top-9 left-0 w-full ${dropDownAbove ? "bg-red-500" : ""} rounded overflow-hidden bg-gradient-to-r from-[rgb(227,63,201)] to-[rgb(44,11,102)] duration-700 z-10`}>
                        {object?.plants?.map((ele, i) => {
                          return (
                              <div key={i} onClick={() => handlePlants(ele)} className={`text-white mt-1 pl-3 pr-4 py-[2px] cursor-pointer ${selectedPlant?.name == ele.name ? 'bg-gradient-to-l from-[rgb(227,63,201)] to-[rgb(44,11,102)]' : ''} rounded text-[14px] hover:bg-gradient-to-l from-[rgb(227,63,201)] to-[rgb(44,11,102)] text-nowrap hover:text-white font-[500]`}>
                                {ele?.name}
                              </div>
                          )
                        })}
                      </div>
                    </div>
                )
              })}
            </div>

            {/* --------------------------------Second Column------------------------------ */}

            <div className='w-full h-full md:col-span-3 lg:col-span-4'>
              {selectedPlant ? (
                <>
                  <div className='w-full h-[200px] sm:h-[300px] md:h-[270px] lg:h-[510px]  relative'>
                    <img
                      className='w-full h-full object-cover'
                      src={selectedPlant?.images[activeSlide]}
                      alt=''
                    />
                    <div className='bg-[rgb(255,208,6)] lg:text-3xl tracking-[1px] px-2 sm:px-6 rounded py-1 sm:py-2 text-white absolute bottom-1 right-1 sm:bottom-3 sm:right-3 lg:bottom-9 lg:right-5'>{selectedPlant?.name}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className='w-full h-full'>
                    <video className='w-full h-full object-cover' src="https://res.cloudinary.com/dqfjfh5wm/video/upload/v1732194177/video_a9k8ui.mp4" autoPlay loop muted></video>
                  </div>
                </>
              )}

              {/* ----------------------------Slider------------------------------ */}

              <div className="w-full slider-container mt-[10px]">
                {selectedPlant && selectedPlant.images && selectedPlant.images.length > 0 && (
                  <Slider {...settings}>
                    {selectedPlant.images.map((pic, i) => (
                      <div className="ml-2 lg:ml-3 cursor-pointer" key={i}>
                        <div
                          onClick={()=>handleSlideIndex(i)}
                          className="w-[96%] h-[60px] sm:h-[100px] md:h-[90px] lg:h-[110px] overflow-hidden"
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={pic}
                            alt={`Plant image ${i}`}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>

              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
