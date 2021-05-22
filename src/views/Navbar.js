import React from 'react'
import { NavItem } from '../components/NavItem';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsGrid, BsHouseDoor, BsCardText } from 'react-icons/bs';

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
           <div className = 'navbar__list--responsive'>
                <NavItem  route = '/' text = { <BsHouseDoor className = 'navbar__icon'/> } />
                <NavItem  route = '/sobre-mi' text = { <BsCardText className = 'navbar__icon' /> }/>
                <NavItem  route = '/proyectos' text = { <BsGrid className = 'navbar__icon' /> }/>
                <NavItem  route = '/contacto' text = { <FaTelegramPlane className = 'navbar__icon' /> }/>
           </div>
        </nav>
    )
}
