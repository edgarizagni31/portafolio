import React from 'react'
import { NavItem } from '../components/NavItem';

import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className = 'navbar'>
           <h1 className = 'navbar__logo'> &lt;edgarizagni /&gt; </h1> 
           <div className = 'navbar__list'>
                <NavItem route = '/' text = 'inicio' />
                <NavItem route = '/sobre-mi' text = 'sobre mí' />
                <NavItem route = '/proyectos' text = 'proyectos' />
                <NavItem route = '/contacto' text = 'contacto'/>
           </div>
        </nav>
    )
}
