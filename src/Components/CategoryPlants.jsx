import React, { useEffect, useState } from 'react';
import { projectsData } from "./CompaniesArray"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { handleCompanies } from '../Redux/Slice';

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="px-3 py-[6px] absolute right-3 -top-[30px] transform -translate-y-1/2 cursor-pointer bg-[rgb(28,165,124)] text-white rounded shadow-lg">
      Next
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="px-3 py-[6px] absolute left-0 -top-[30px] transform -translate-y-1/2 cursor-pointer bg-[rgb(28,165,124)] text-white rounded shadow-lg">
      Previous
    </div>
  );
};

const CategoryPlants = () => {
  const [plantIndex, setPlantIndex] = useState(null);
  const dispatch = useDispatch();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const handlePlants = (obj) => {
    dispatch(handleCompanies(obj));
  };

  const toggleDropdown = (event, index) => {
    event.stopPropagation(); // Prevent event propagation to window
    setPlantIndex(plantIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside
      if (!event.target.classList.contains("dropdown-container")) {
        setPlantIndex(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='w-full h-max block md:hidden'>
        <style>{`.slick-slider { overflow: visible !important; }`}</style>
        <div className="slider-container mt-[60px] md:mt-[80px] px-2">
          <Slider {...settings}>
            {projectsData.map((e, i) => {
              return (
                <div className='w-full h-max relative dropdown-container' key={i}>
                  <div
                    onClick={(event) => toggleDropdown(event, i)}
                    className='w-[140px] h-[35px] flex justify-center z-50 items-center cursor-pointer rounded text-nowrap text-white bg-[rgb(28,160,216)]'>
                    {e.name}
                  </div>
                  {/* Dropdown */}
                  <div
                    className={`${plantIndex === i ? "h-max block" : "h-0 p-0 hidden"} bg-gradient-to-l from-[rgb(4,39,53)] to-[rgb(32,130,85)] rounded mt-2`}>
                    {e.plants.map((ele, index) => {
                      return (
                        <ul key={index}>
                          <li
                            onClick={() => handlePlants(ele)}
                            className='text-white cursor-pointer text-[15px] mt-[2px] px-[3px] py-[2px] rounded hover:bg-gradient-to-r from-[rgb(4,39,53)] to-[rgb(32,130,85)]'>
                            {ele.name}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CategoryPlants;


