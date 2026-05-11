import { Routes, Route } from 'react-router-dom'
import './style.css'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Tienda from './pages/Tienda.jsx'
import ListaProductos from './pages/ListaProductos.jsx'
import NotFound from './pages/NotFound.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import RutaProtegida from './pages/RutaProtegida.jsx'
import Admin from './pages/Admin.jsx'

function App() {

  const soyAdmin = false; //Simulacion de estado de autenticación
  const soyAdmin2 = true; //Simulacion de estado de autenticación

  return (
    <div className='app'>
      <Menu />
      <Routes>
        {/* ruta basica*/}
        <Route path='/' element={<Home />} />

        {/* ruta anidada*/}
        <Route path='/tienda' element={<Tienda />}>
          <Route index element={<ListaProductos />} />
          {/* ruta Dinámica */}
          <Route path='/tienda/:id' element={<DetalleProducto />}></Route>
        </Route>

        
        {/*Admin (Protegida Sin Acceso)*/}
        <Route path='/adminSinAcceso' element={
          <RutaProtegida esAdmin={soyAdmin}>
            <Admin />
          </RutaProtegida>
        }></Route>
        {/*Admin (Protegida)*/}
        <Route path='/admin' element={
          <RutaProtegida esAdmin={soyAdmin2}>
            <Admin />
          </RutaProtegida>
        }></Route>
        {/* ruta 404 */}
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App

