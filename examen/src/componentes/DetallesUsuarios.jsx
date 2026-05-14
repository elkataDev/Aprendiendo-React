import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { listaUsuarios } from './Usuarios'

function DetallesUsuarios() {

  const { id: idUsuarioSeleccionado } = useParams();



  const usuario = listaUsuarios.find(usuario => usuario.id === parseInt(idUsuarioSeleccionado));

  if (!usuario) {
    return <p>Usuario no existe</p>
  }

  return (
    <>
      <h1>Detalles del usuario</h1>
      <p>Id: {usuario.id}</p>
      <p>Nombre: {usuario.nombre}</p>
      
    <Link to='/usuarios'>Volver atras</Link>
    </>
  )
}

export default DetallesUsuarios