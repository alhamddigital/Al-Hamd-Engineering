import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { projectsData } from './CompaniesArray';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = ({ setCheckMenu }) => {
  const [selectedMillIndex, setselectedMillIndex] = useState(null)
  const { page } = useSelector(state => state.construction)
  
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
  console.log(page, "sidebar page")
  return (
    <div className='w-full h-[100vh] block md:hidden fixed top-0 left-0 bg-[rgb(0,0,0,0.6)] z-10'>

      <div className='w-[320px] h-screen bg-[rgb(31,66,93)] absolute top-0 right-0 p-2 overflow-y-scroll'>
        <div onClick={() => setCheckMenu(false)} className='w-max text-2xl fixed top-2 right-4 cursor-pointer text-white'><RxCross1 /></div>
        <h1 className='text-xl text-white'>Al Hamd Engineering</h1>

        <div className='mt-2'>
          <ul>

            <a href="/">
              <li className={`font-[600] ${page === 1 ? "bg-red-500" : ""} text-white rounded p-1`}>Home</li>
            </a>

            <a href="/services">
              <li className={`font-[600] ${page === 3 ? "bg-red-500" : ""} text-white rounded p-1`}>Services</li>
            </a>

            <a href="/about">
              <li className={`font-[600] ${page === 4 ? "bg-red-500" : ""} text-white rounded p-1`}>About Us</li>
            </a>

            <a href="/contact">
              <li className={`font-[600] ${page === 5 ? "bg-red-500" : ""} text-white rounded p-1`}>Contact Us</li>
            </a>

            <a href="/gallery">
              <li className={`font-[600] ${page === 6 ? "bg-red-500" : ""} text-white rounded p-1`}>Gallery</li>
            </a>


            <li className='mt-1'><span className={`w-full block p-1 rounded font-[600] text-white ${page === 2 ? "bg-red-500" : ""}`}>Projects</span>
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
                          <div className={`sm:w-max ml-3 bg-[#540368] rounded mt-1 ${selectedMillIndex == i ? "block" : "hidden"}`}>
                            {
                              e.plants.map((ele, i) => {
                                return (
                                  <div onClick={() => handleMill(ele)} key={i} className=' p-1 text-white border-b border-red-500 '>{ele.name}</div>
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

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar 