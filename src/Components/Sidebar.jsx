import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { projectsData } from './CompaniesArray';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = ({ setCheckMenu }) => {
  const [selectedMillIndex, setselectedMillIndex] = useState(null)
  const handleParentMills = (index) => {
    if (selectedMillIndex != null) {
      setselectedMillIndex(null)
    } else {
      setselectedMillIndex(index)
    }
  }

  const handleMill = (object) => {
    localStorage.setItem("plant", JSON.stringify(object))
  }
  return (
    <div className='w-full h-screen block md:hidden fixed top-0 left-0 bg-[rgb(0,0,0,0.6)] z-10'>

      <div className='w-full sm:w-[300px] h-screen bg-[rgb(31,66,93)] absolute top-0 right-0 p-2 overflow-y-scroll'>
        <div onClick={() => setCheckMenu(false)} className='w-max text-2xl fixed top-2 right-4 cursor-pointer text-white'><RxCross1 /></div>
        <h1 className='text-xl text-white'>Al Hamd Engineering</h1>

        <div className='mt-2'>
          <ul>
            <li className='font-[600] mt-1 text-white'><a href="/">Home</a></li>
            <li className='font-[600] mt-1 text-white'><a href="/services">Services</a></li>

            <li className='mt-1'><span className='font-[600] text-white'>Projects</span>
              <div className='ml-5'>
                {
                  projectsData.map((e, i) => {
                    return (
                      <>
                        <div onClick={() => handleParentMills(i)} key={i} className={`flex items-center text-white p-1 rounded mt-1 ${selectedMillIndex == i ? "bg-[rgb(30,56,83)]" : ""}`}>
                          <div>{e.name}</div>
                          <div className='ml-1 text-white'>{selectedMillIndex == i ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                        </div>

                        <a href="/projects">
                          <div className={`sm:w-max ml-3 bg-[rgb(253,183,0)] rounded mt-1 ${selectedMillIndex == i ? "block" : "hidden"}`}>
                            {
                              e.plants.map((ele, i) => {
                                return (
                                  <div onClick={() => handleMill(ele)} key={i} className=' p-1 text-white'>{ele.name}</div>
                                )
                              })
                            }
                          </div>
                        </a>

                      </>
                    )
                  })
                }
              </div>
            </li>

            <li className='font-[600] mt-1 text-white'><a href="/about">About Us</a></li>
            <li className='font-[600] mt-1 text-white'><a href="/contact">Contact Us</a></li>
            <li className='font-[600] mt-1 text-white'><a href="/gallery">Gallery</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar 