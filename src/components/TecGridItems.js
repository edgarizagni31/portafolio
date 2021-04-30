import React from 'react'

export const TecGridItem  = ({ text, img }) => {
    return (
        <div className = 'tec'>
           <img src = { img } className = 'tec__img' alt = { text }/>
           <p className = 'tec__text'> { text }</p> 
        </div>
    )
}
