import React, { useState } from 'react'
import { projectsData } from './CompaniesArray'
import { useDispatch, useSelector } from 'react-redux'
import { plantsDispatch } from '../Redux/Slice'

const ProjectsDropdowns = () => {
    const dispatch=useDispatch()
    const {selectedPlant}=useSelector(state=>state.construction)
    console.log(selectedPlant)
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
            <div className='w-[200px] bg-white rounded border-2 border-gray-200 absolute top-[40px] left-0 z-10 invisible group-hover:visible duration-500'>
                {
                    projectsData.map((e, i) => {
                        return (
                            <div key={i} onMouseOver={() => handleMouseEnter(i)} onMouseOut={handleMouseLeave} className='px-1 py-1 border-b border-gray-200 hover:bg-gray-200 relative group'>
                                {e.name}
                                {
                                    activeDropdown == i && (
                                        <div className='w-[300px] bg-white border border-gray-200 absolute top-0 left-[198px] invisible group-hover:visible duration-700'>
                                            {
                                                e.plants.map((ele, i) => {
                                                    return (
                                                        <a href="/projects">
                                                            <div onClick={()=>handleProjects(ele)} className='p-1 hover:bg-gray-200'>
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

export default ProjectsDropdowns