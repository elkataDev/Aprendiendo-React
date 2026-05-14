import { useState } from 'react'
import './App.css'
import UserCard from './componentes/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/**
       * Ejercicio 1
       * Aqui se renderiza el componente pasandole los props al hijo (app --> hijo) de padre a hijo
       */}

      <UserCard nombre={"antonio"} email={"antonioHernandez123@gmail.com"} edad={12}></UserCard>
      <UserCard nombre={"maria"} email={"mariaHernandez123@gmail.com"} edad={15}></UserCard>
      <UserCard nombre={"juan"} email={"juanHernandez123@gmail.com"} edad={20}></UserCard>
    </>
  )
}

export default App
