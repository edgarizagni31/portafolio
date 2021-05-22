import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/home.css';

export const Home = () => {
    return (
        <header className = 'header'>
           <h1 className = 'header__title'>Hola, soy Edgar Ochoa</h1> 
           <p className = 'header__sub'>Frontend Developer</p>
           <p className = 'header__desc'>
                Soy un estudiante de ingeniería informatica, siempre me gusta aprender cosas
                nuevas, eso me lleva a estar en constante aprendizaje y crecimiento personal.
                Me gusta diseñar interfaces y darles una funcionalidad.
           </p>
           <Link className = 'header__btn' to = './sobre-mi'>saber más</Link>
        </header>
    )
}
