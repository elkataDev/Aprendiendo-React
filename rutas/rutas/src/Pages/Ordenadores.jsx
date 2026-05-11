import React from 'react'
import { Outlet } from 'react-router-dom'

function Ordenadores() {
    return (
        <>
            <h2>Zotac Tech</h2>
            {/* Cargamos todos los Productos */}
            <main className='tienda-content'>
                <Outlet />
            </main>

        </>
    )
}

export default Ordenadores