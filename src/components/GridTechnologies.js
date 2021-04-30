import React from 'react'
import { technologies } from '../helpers/technologies'
import { ItemTechnologies } from './ItemTechnologies'

export const GridTechnologies = () => {
    return (
        <section className = "grid">
            {
                technologies.map( t => (
                    <ItemTechnologies text = { t.text } iconUrl = { t.iconUrl } />
                ))
            }            
        </section>
    )
}
