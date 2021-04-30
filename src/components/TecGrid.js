import React from 'react'
import { TecGridItem } from './TecGridItems'

export const TecGrid = ( { tecs }) => {
    return (
        <div className = "tecs">
            {
                tecs.map( tec => (
                    <TecGridItem 
                        key = { tec.id } 
                        text = { tec.text } 
                        img = { tec.img } 
                    />
                ))
            }            
        </div>
    )
}
