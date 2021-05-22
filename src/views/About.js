import { TecGrid } from '../components/TecGrid';
import { tecs } from '../helpers/tecs'

import '../styles/about.css';

export const About = () => {
    return (
        <section className = 'about'>
            <article className = 'about__interests'> 
                <h2 className = 'about__title'>Intereses</h2>
                <p className = 'about__desc' >
                    Me encanta el desarrollo web estoy muy interesado actualmente en aprender PHP como mi primer 
                    lenguaje de back end, además conocer más sobre base de datos. <br />
                    Soy una persona autodidacta, día a día me dedico tiempo en aprender nuevas habilidades
                    que me ayuden a mejorar como desarrollador.
                </p>
            </article>
            <article className = 'about__technologies'>
                <h2 className = 'about__title'>Tecnologías</h2>
                <TecGrid  tecs = { tecs }/>
            </article>
        </section>
    )
}
