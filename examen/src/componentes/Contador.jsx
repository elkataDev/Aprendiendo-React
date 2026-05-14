import React from 'react'
import { useState } from 'react'

function Contador() {

    // Variables Contador Ejercicio 2
    const [count, setCount] = useState(0) // Contador
    const color = count > 0 ? "green" : count < 0 ? "red" : "black" // Condicion Color

    return (
        <>
    {/**
       * Ejercicio 2
       * Un contador con dos botones (sumar y restar)
       * Condicion de color:
       * Positivo: green  Negativo: red  0: Black       
       */}

            <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
                sumar
            </button>


            <button type="button" className="counter" onClick={() => setCount((count) => count - 1)}>
                Restar
            </button>

            <p style={{ border: "1px solid white", color }}>{count}</p>

        </>
    )
}

export default Contador