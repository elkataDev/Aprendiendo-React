import React from 'react'
import { Link } from 'react-router-dom'
function Inicio() {
  return (
    <>
      <div> Pagina de Inicio</div>

      <Link to={'/usuarios'}>Usuarios</Link>
    </>
  )
}

export default Inicio