import { useNavigate } from 'react-router-dom'

function Usuarios() {
    const navigate = useNavigate();
    return (
        <div className="usuarios-container">
            <h1>🔒 Esta zona solo es para usuarios registrados 🔒</h1>
            <button className="btn-volver" onClick={() => navigate("/")}>Ir al Inicio</button>
        </div>
    )
}

export default Usuarios