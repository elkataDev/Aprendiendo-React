import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <h1>Error 404</h1>
            <h2>La pagina que buscas o intentas acceder no existe o esta bloqueada</h2>
            <Link to={`/`}> Volver Inicio </Link> {/* Vuelve al inicio */}
        </>
    )
}

export default NotFound