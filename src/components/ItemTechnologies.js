import React from 'react'

export const ItemTechnologies = ({text, iconUrl}) => {
    return (
        <div>
           <img src = {iconUrl}/>
           <p> { text }</p> 
        </div>
    )
}
