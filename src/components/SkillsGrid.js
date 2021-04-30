import React from 'react'
import { skills } from '../helpers/skills'
import { SkillsGridItem } from './SkillsGridItems'

export const SkillsGrid = () => {
    return (
        <div className = "skills">
            {
                skills.map( skill => (
                    <SkillsGridItem 
                        key = { skill.id } 
                        text = { skill.text } 
                        img = { skill.img } 
                    />
                ))
            }            
        </div>
    )
}
