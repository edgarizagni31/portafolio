import React from 'react'
import { SkillsGrid } from '../components/SkillsGrid';

import '../styles/about.css';

export const About = () => {
    return (
        <section className = 'about'>
            <article className = 'about__interests'> 
                <h2 className = 'about__title'>Intereses</h2>
                <p className = 'about__desc' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores odio earum dolore sint ipsam repudiandae, eius repellat asperiores! Dolor saepe sit ex non. Itaque incidunt repellendus laboriosam reprehenderit quo distinctio voluptate quidem dignissimos magni eum beatae ipsum consectetur quod harum ab enim accusamus, quibusdam dolorum minus dolore. Perspiciatis, sit!
                </p>
            </article>
            <article className = 'about__technologies'>
                <h2 className = 'about__title'>Habilidades</h2>
                <SkillsGrid />
            </article>
        </section>
    )
}
