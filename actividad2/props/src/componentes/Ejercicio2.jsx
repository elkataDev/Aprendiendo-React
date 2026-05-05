import React, { useState } from 'react'
import Hijo2 from './Hijo2'

function Ejercicio2() {

  const [usuario, setUsuario] = useState("");

  // Funcion en la que recibe los datos del hijo al padre
  function recibirName(nombre) {
    setUsuario(nombre);
  }
  return (
    <>
      <Hijo2 enviarNombre={recibirName} />
      <p>Nombre recibido en el padre = {usuario}</p>
    </>
  )
}

export default Ejercicio2