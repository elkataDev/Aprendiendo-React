import { useState } from 'react'
import './App.css'
import UserCard from './componentes/UserCard'
import { Route, Routes } from 'react-router-dom' // Importante 
import Contador from './componentes/Contador'
import Inicio from './Paginas/Inicio'
import Usuarios from './componentes/Usuarios'
import DetallesUsuarios from './componentes/DetallesUsuarios'

function App() {


  return (
    <>

      {/**
       * Ejercicio 1
       * Aqui se renderiza el componente pasandole los props al hijo (app --> hijo) de padre a hijo
       */}

      <UserCard nombre={"antonio"} email={"antonioHernandez123@gmail.com"} edad={12}></UserCard>
      <UserCard nombre={"maria"} email={"mariaHernandez123@gmail.com"} edad={15}></UserCard>
      <UserCard nombre={"juan"} email={"juanHernandez123@gmail.com"} edad={20}></UserCard>


      {/* Ejercicio 2 */}
      <Contador />


      {/** EJERCICIO 3 – Rutas con React Router
         * Configura estas rutas:
         * / → Página de inicio
         * /usuarios → Lista de usuarios con enlaces a detalles
         * /usuarios/:id → Detalle del usuario mostrando el id de la URL
         * Los usuarios deben de ser datos estáticos dentro del componente
         */}

      <Routes>

        <Route path='/' element={<Inicio />} />
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/usuarios/:id' element={<DetallesUsuarios/>}/>

      </Routes>

    </>
  )
}

export default App
