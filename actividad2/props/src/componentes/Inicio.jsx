import React from 'react'

function Inicio({ cambiarSeccion }) {
  return (
    <div className="contenedor-principal">

      <h1><strong>Antonio Espínola Ramírez</strong></h1>

      <div className="contenedor-botones">
        <button onClick={() => cambiarSeccion('inicio')}>
          Inicio
        </button>

        <button onClick={() => cambiarSeccion('ejercicio1')}>
          Ejercicio 1
        </button>

        <button onClick={() => cambiarSeccion('ejercicio2')}>
          Ejercicio 2
        </button>

        <button onClick={() => cambiarSeccion('ejercicio3')}>
          Ejercicio 3
        </button>

        <button onClick={() => cambiarSeccion('ejercicio4')}>
          Ejercicio 4
        </button>

        <button onClick={() => cambiarSeccion('ejercicio5')}>
          Ejercicio 5
        </button>

      </div>
    </div>
  )
}

export default Inicio