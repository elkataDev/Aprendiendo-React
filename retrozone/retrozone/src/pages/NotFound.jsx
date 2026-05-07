import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="error-page">
            <div className="error-content">
                <span className="error-icon">🎮</span>
                <h1>404</h1>
                <h2>GAME OVER</h2>
                <h2>El nivel que buscas no existe o está bloqueado. Insert Coin to continue.</h2>
                <Link to={`/tienda`}> Respawn en Tienda </Link>
            </div>
        </div>
    )
}

export default NotFound