import React from 'react'
import { ProjectsGrid } from '../components/ProjectsGrid'

import '../styles/projects.css';

export const Projects = () => {
    return (
        <section className = 'projects'>
            <h2 className = 'projects__title'>Proyectos</h2>  
            <ProjectsGrid />       
        </section>
    )
}
