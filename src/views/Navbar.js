import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className = 'navbar'>
           <h1 className = 'navbar__logo'> &lt;edgarizagni /&gt; </h1> 
           <div className = 'navbar__list'>
                <NavLink 
                    exact
                    activeClassName = 'navbar__item--active' 
                    className = 'navbar__item' 
                    to = '/' 
                >
                    inicio
                </NavLink>
                <NavLink
                    exact 
                    activeClassName = 'navbar__item--active' 
                    className = 'navbar__item' 
                    to = '/sobre-mi'
                >
                    sobre mí
                </NavLink>
                <NavLink 
                    exact
                    activeClassName = 'navbar__item--active' 
                    className = 'navbar__item' 
                    to = '/proyectos'
                >
                    proyectos
                </NavLink>
                <NavLink 
                    exact
                    activeClassName = 'navbar__item--active' 
                    className = 'navbar__item'  
                    to = '/contacto'
                >
                    contacto
                </NavLink>
           </div>
        </nav>
    )
}
