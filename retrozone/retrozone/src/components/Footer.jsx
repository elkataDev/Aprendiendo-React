import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h3>RetroZone</h3>
                <p>2026 RetroZone. Todos los derechos reservados</p>
                <p>Correo: support@retrozone.com</p>
                <p>Teléfono: +334 666 666 666</p>
            </div>

            <div className="footer-link">
                <nav>
                    <NavLink to="/" className={({ isActive }) => { isActive ? 'link-active' : 'link' }}>Start</NavLink>
                    <NavLink to="/tienda" className={({ isActive }) => { isActive ? 'link-active' : 'link' }}>Levels</NavLink>
                    <NavLink to="/admin" className={({ isActive }) => { isActive ? 'link-active' : 'link' }}>Config</NavLink>
                </nav>
            </div>

            <div className="footer-social">
                <h4>Síguenos</h4>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
            </div>
        </footer>
    )
}

export default Footer