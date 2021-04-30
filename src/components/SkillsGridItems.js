import React from 'react'

export const SkillsGridItem  = ({text, img}) => {
    return (
        <div className = 'skill'>
           <img src = { img } className = 'skill__img' alt = { text }/>
           <p className = 'skill__text'> { text }</p> 
        </div>
    )
}
