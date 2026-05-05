import React from 'react'
import Ejercicio1 from './Ejercicio1'

function Hijo1({ usuario }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px', borderRadius: '8px' }}>
      <h3>Datos del Usuario (Hijo)</h3>
      <p><strong>Nombre:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
    </div>
  )
}

export default Hijo1