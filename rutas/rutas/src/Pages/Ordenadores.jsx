import React from 'react'
import { Outlet } from 'react-router-dom'

function Ordenadores() {
    return (
        <>
            <h2>Zotac Tech</h2>
            {/* Cargamos todos los Productos */}
            <main className='tienda-content'>
                <Outlet /> {/* Aquí es donde deben aparecerán los componentes de las rutas hijas (ListaProducto y DetalleProducto) */}
            </main>

        </>
    )
}

export default Ordenadores