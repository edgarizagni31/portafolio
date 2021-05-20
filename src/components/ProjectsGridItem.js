import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { AiFillChrome } from 'react-icons/ai';

import { TecGrid } from './TecGrid';

export const ProjectsGridItem = ({ project } ) => {
    const {  title, desc, url, repo, tecs } = project;
    return ( 
        <article className = 'project__card'>
            <h3 className = 'project__title'>{ title }</h3>
            <p className = 'project__desc'> { desc } </p>
            <TecGrid  tecs = {tecs} key = { title }/>
            <div className = 'project__btns' >
                <a href = { repo } className = 'project__url' target='__blank'> 
                    <div className = 'div'>
                        <GoMarkGithub  className = 'div__icon'/>  
                        <p>Código</p>
                    </div>
                </a> 
                <a href = { url } className = 'project__repo' target='__blank'> 
                    <div className = 'div'>
                        <AiFillChrome  className = 'div__icon'/>  
                        <p> Proyecto </p>  
                    </div>
                </a>
            </div> 
        </article>
    )
}
