import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const ServicesProjectsComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const [object, setObject] = useState({});

    useEffect(() => {
        // Get the object from localStorage and parse it
        const storedObject = localStorage.getItem("mainProject");
        if (storedObject) {
            setObject(JSON.parse(storedObject));
        }
    }, []);

    // Check if the object is loaded and has the necessary properties
    const images = object?.plants?.[0]?.images || []; // Fallback to an empty array if no images are found

    const handleProjects=(object)=>{
            localStorage.setItem("plant",JSON.stringify(object))
            // dispatch(plantsDispatch(object))
        }

    return (
        <>
            <div className='w-full px-3 md:px-[40px] lg:px-[100px] py-5 lg:py-[60px] overflow-hidden'>
                <h1 className='text-4xl text-center'>{object?.name}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 gap-[20px] md:gap-[60px]'>

                    <div>
                        <p className='text-2xl lg:text-4xl font-[600]'>{object.name} Construction Services by Al Hamd Engineering</p>
                        <p className='mt-5 text-justify'>{object.description2}</p>
                        <h1 className='font-[600] mt-3'>Here is a selection of projects we have successfully completed</h1>
                        <ul className='mt-3 px-4'>
                            {
                                object?.plants?.map((e, i) => {
                                    return (
                                        <Link to="/projects">
                                            <li onClick={()=>handleProjects(e)} key={i} className='list-disc mt-[2px] hover:text-red-500 duration-300 cursor-pointer'>{e.name}</li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-full h-max mt-4 sm:mt-0'>
                            <Slider {...settings}>
                                {images.length > 0 ? (
                                    images.map((e, i) => (
                                        <div className='w-[100%] h-[220px] md:h-[400px]' key={i}>
                                            <img src={e} className='w-full h-full object-cover' alt="" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full h-[220px] md:h-[400px] lg:h-[500px] flex justify-center items-center">
                                        <p>No images available</p>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ServicesProjectsComp;
