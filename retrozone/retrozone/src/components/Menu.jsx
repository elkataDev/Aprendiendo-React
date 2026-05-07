import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'

function Menu() {
    return (
        <nav>
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
                <img src={logo} alt="RetroZone Logo" style={{ height: '40px', marginRight: '10px' }} />
                <span style={{ fontFamily: "'Press Start 2P', cursive", color: '#ff00ff', fontSize: '1rem' }}>RetroZone</span>
            </div>
            <NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Start </NavLink>
            <NavLink to="/tienda" className={({ isActive }) => isActive ? 'link-active' : 'link'}> Levels </NavLink>
            <NavLink to="/adminSinAcceso" className={({ isActive }) => isActive ? 'link-active' : 'link'}> Config </NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'link-active' : 'link'}> Admin </NavLink>
        </nav>
    )
}

export default Menu