import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Ordenadores from './Pages/Ordenadores'
import ListaProductos from './Pages/ListaProductos'
import DetalleProducto from './Pages/DetalleProducto'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Cuenta from './Pages/Cuenta'
import RutaProtegida from './componentes/RutaProtegida'

function App() {

  const [login, setLogin] = useState(false); // varible para autenticar

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
            <Route path=':id' element={<DetalleProducto />} />
          </Route>


          { /* Props hijo a padre (login --> app) */}
          <Route path="/login" element={<Login loginCorrecto={setLogin} />} />

          {/* Ruta Protegida */}
          <Route path="/cuenta" element={<RutaProtegida logeado={login}> <Cuenta /> </RutaProtegida>} /> {/* hijo a padre (rutaProtegida --> app) */}

          {/* ruta 404  Tiene que ser siempre la ultima */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
