import React from 'react'
import { TecGridItem } from './TecGridItems'

export const TecGrid = ( { tecs }) => {
    return (
        <div className = "tecs">
            {
                tecs.map( tec => (
                    <TecGridItem 
                        key = { tec.id } 
                        tec = { tec }
                    />
                ))
            }            
        </div>
    )
}
