import { Outlet } from 'react-router-dom' //donde cargaremos todas las zapatillas

function Tienda() {
    return (
        <div className="tienda-layout">
            <header className='tienda-header'>
                <h2>Catálogo</h2>
                <small>Descarga digital instantánea o envío físico 🚀</small>
            </header>
            {/* Cargamos todos los juegos */}
            <main className='tienda-content'>
                <Outlet />
            </main>
        </div>
    )
}

export default Tienda