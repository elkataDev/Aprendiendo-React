import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Ordenadores from './Pages/Ordenadores'

function App() {


  return (
    <>
      <div>
        <Menu />
        <Routes>

          {/* ruta basica */}
          <Route path='/' element={<Inicio />} />

          {/* ruta anidada*/}
          <Route path='/ordenadores' element={<Ordenadores />}>
            <Route index element={<ListaProductos />} />
            {/* ruta Dinámica */}
            <Route path='/tienda/:id' element={<DetalleProducto />} />
          </Route>


        </Routes>
      </div>
    </>
  )
}

export default App
