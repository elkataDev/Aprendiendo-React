import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'


function Menu() {
    return (

        // Menu 
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Inicio</NavLink>
            <NavLink to="/ordenadores" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Ordenadores</NavLink>
            <NavLink to="/moviles" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Moviles</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Login</NavLink> {/* Login */}
        </nav>
    )
}

export default Menu