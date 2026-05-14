import { useState } from 'react'
import './App.css'
import UserCard from './componentes/UserCard'

function App() {

  // Variables Contador Ejercicio 2
  const [count, setCount] = useState(0) // Contador
  const color = count > 0 ? "green" : count < 0 ? "red" : "black" // Condicion Color

  return (
    <>

      {/**
       * Ejercicio 1
       * Aqui se renderiza el componente pasandole los props al hijo (app --> hijo) de padre a hijo
       */}

      <UserCard nombre={"antonio"} email={"antonioHernandez123@gmail.com"} edad={12}></UserCard>
      <UserCard nombre={"maria"} email={"mariaHernandez123@gmail.com"} edad={15}></UserCard>
      <UserCard nombre={"juan"} email={"juanHernandez123@gmail.com"} edad={20}></UserCard>

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

      <p style={{ border: "1px solid white", color}}>{count}</p>



    </>
  )
}

export default App
