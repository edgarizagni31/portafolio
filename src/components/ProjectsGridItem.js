import React from 'react'

export const ProjectsGridItem = ( { img, title, desc } ) => {
    return ( 
        <article className = 'project'>
           <img src = { img } alt = { title } className = 'project__img'/>
           <div >
               <h3 className = 'project__title'>{ title }</h3>
               <p className = 'project__desc'> { desc } </p>
               <button>ir al proyecto</button>
               <button>ir al repositorio</button>
           </div>
        </article>
    )
}
