import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { listaUsuarios } from './Usuarios'

function DetallesUsuarios() {

  const { id: idUsuarioSeleccionado } = useParams();

  const usuario = listaUsuarios.find(usuario => usuario.id === parseInt(idUsuarioSeleccionado));

  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate('404');
    }
  }
  ), [usuario, navigate];


  if (!usuario) {
    return null;
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