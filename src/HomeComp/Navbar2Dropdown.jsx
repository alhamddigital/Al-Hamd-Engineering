import React, { useState } from 'react'
import { projectsData } from '../Components/CompaniesArray'
import { useDispatch, useSelector } from 'react-redux'
import { plantsDispatch } from '../Redux/Slice'
import { Link } from 'react-router-dom'

const Navbar2Dropdown = () => {
    const dispatch=useDispatch()
    const {selectedPlant}=useSelector(state=>state.construction)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const handleMouseEnter = (index) => {
        setActiveDropdown(index)
    }
    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }
    const handleProjects=(object)=>{
        localStorage.setItem("plant",JSON.stringify(object))
        dispatch(plantsDispatch(object))
    }
    return (
        <>
            <div className='w-[200px] h-[80vh] bg-white rounded absolute top-[20px] left-0 z-10 duration-500'>
                {
                    projectsData.map((e, i) => {
                        return (
                            <div key={i} onMouseOver={() => handleMouseEnter(i)} onMouseOut={handleMouseLeave} className='px-1 py-1 text-white bg-[rgb(31,66,93)] hover:bg-[rgb(253,183,0)] relative group'>
                                {e.name}
                                {
                                    activeDropdown == i && (
                                        <div className='w-[300px] bg-white absolute top-0 right-[198px] invisible group-hover:visible duration-700'>
                                            {
                                                e.plants.map((ele, i) => {
                                                    return (
                                                        <a href="/projects">
                                                            <div onClick={()=>handleProjects(ele)} className='p-1 bg-[rgb(31,66,93)] hover:bg-[rgb(253,183,0)]'>
                                                                {ele.name}
                                                            </div>
                                                        </a>
                                                    )
                                                })}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Navbar2Dropdown
