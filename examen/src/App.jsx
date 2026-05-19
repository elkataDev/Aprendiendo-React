import { useState } from 'react'
import './App.css'
import UserCard from './componentes/UserCard'
import { Route, Routes } from 'react-router-dom' // Importante 
import Contador from './componentes/Contador'
import Inicio from './Paginas/Inicio'
import Usuarios from './componentes/Usuarios'
import DetallesUsuarios from './componentes/DetallesUsuarios'
import Error404 from './Paginas/Error404'
import Formulario from './componentes/Formulario'

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


      {/**EJERCICIO 4 – Formulario y API
       * Formulario con campos: nombre, email .
       * Validaciones con regex:
       * Email : : const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       * Nombre: : const regexNombre = /^[a-zA-ZÀ-ÿ\s]{2,40}$/
       * Validar email con formato correcto
       * Nombres de las variables a utilizar : nombre, email, edad.
       * Al enviar:
       * Mostrar errores si existen
       * Enviar los datos a una API simulada (MockAPI)
       * Endpoint a utilizar : https://6970b24178fec16a63fea11f.mockapi.io/usuarios
       * Mostrar la respuesta en consola */}

      <Formulario />


      {/** EJERCICIO 3 – Rutas con React Router
         * Configura estas rutas:
         * / → Página de inicio
         * /usuarios → Lista de usuarios con enlaces a detalles
         * /usuarios/:id → Detalle del usuario mostrando el id de la URL
         * Los usuarios deben de ser datos estáticos dentro del componente
         */}

      <Routes>

        <Route path='/' element={<Inicio />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/usuarios/:id' element={<DetallesUsuarios />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </>
  )
}

export default App
