import React from 'react'
import { projects } from '../helpers/projects';
import { ProjectsGridItem } from './ProjectsGridItem';

export const ProjectsGrid = () => {
    return (
        <article className = 'projects__content'>
            { 
                projects.map( ( project  ) => (
                    <ProjectsGridItem  project = { project }  key = { project.id } />
                ))
            }
        </article>
    )
}
