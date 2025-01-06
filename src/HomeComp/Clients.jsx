import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
// import { constructionClient } from '../Redux/Slice';

const Clients = () => {

    const clientRef = useRef()
    const dispatch=useDispatch()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(constructionClient(clientRef.current.getBoundingClientRect().top))
        })
    }, [])

    const clientsArray = [
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416767/Tandianwala_Sugar_a8e138.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416767/Shahmurad_sugar_vlqmao.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416767/Shafi-Group-Logo_utplsh.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416764/Izfaar_pharmaceutical_hn4sq3.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdSvhI7dGCgkMid3CAIUHWeGU-dh_oo9Rcw&s",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416764/RYK_h3ozza.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416764/SGM_Sugar_gnb3rb.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416764/Nishat_aseqch.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416764/NDSML_ptbfqk.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416763/Anjum_Textile_y35gil.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416763/Alliance_sugar_vb8qnk.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416763/al_moiz_steel_xvzv7k.png",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416763/Mehran_Sugar_m6fxtc.jpg",
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734416763/dynamic_spinning_k8ic3q.jpg"

    ];

    const leftToRightSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            }

        ]
    };

    const rightToLeftSettings = {
        ...leftToRightSettings,
        rtl: true  // Reverses the direction of the slider
    };

    return (
        <>
            <div ref={clientRef} id='consClient' className='w-full py-4 pb-9 sm:pb-0 lg:py-[50px] px-3 lg:px-9 overflow-hidden'>
                <h1 className='text-3xl text-center font-[600]'>Our Clients</h1>
                
                <div className='lg:w-[70%] text-center mt-9 sm:text-xl mx-auto text-justify sm:text-center'>Our valued clients are at the heart of everything we build. With trust and collaboration, we deliver tailored solutions that exceed expectations, creating long-lasting partnerships and remarkable results.</div>

                {/* Left-to-Right Slider */}
                <div className='w-full md:h-[200px] mt-[45px]'>
                    <div className="slider-container">
                        <Slider  {...leftToRightSettings}>
                            {
                                clientsArray.map((e, i) => {
                                    return (
                                            <div key={i} className='h-[80px] md:h-[100px] lg:h-[120px] lg:mt-9'>
                                                <img className='w-[105px] md:w-[120px] lg:w-[160px] mx-auto h-full' src={e} alt={`Client ${i + 1}`} />
                                            </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>

                {/* Right-to-Left Slider */}
                <div className='w-full md:h-[200px] mt-[40px] md:mt-0 lg:mt-[50px]'>
                    <div className="slider-container">
                        <Slider {...rightToLeftSettings}>
                            {
                                clientsArray.map((e, i) => {
                                    return (
                                            <div key={i} className='h-[80px] md:h-[100px] lg:h-[120px]'>
                                                <img className='w-[105px] md:w-[120px] lg:w-[160px] mx-auto h-full' src={e} alt={`Client ${i + 1}`} />
                                            </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Clients;
