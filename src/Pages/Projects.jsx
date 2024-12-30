import React from 'react'
import Navbar1 from '../HomeComp/Navbar1'
import Navbar2 from '../HomeComp/Navbar2'
import ProjectsDescription from '../Components/ProjectsDescription'
import Footer from '../HomeComp/Footer'

const Projects = () => {
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <ProjectsDescription/>
            <Footer />
        </>
    )
}

export default Projects