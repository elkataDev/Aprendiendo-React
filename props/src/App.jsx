import { useState } from 'react'
import Inicio from './componentes/Inicio'

import './App.css'
import Ejercicio1 from './componentes/Ejercicio1'
import Ejercicio2 from './componentes/Ejercicio2'
import Ejercicio3 from './componentes/Ejercicio3'
import Ejercicio4 from './componentes/Ejercicio4'
import Ejercicio5 from './componentes/Ejercicio5'

function App() {
  const [seccion, setSeccion] = useState('inicio')

  return (
    <>
      {seccion === 'inicio' && (
        <Inicio cambiarSeccion={setSeccion} />
      )}

      {seccion === 'ejercicio1' && (
        <div className="area-ejercicio">
          {/* Botón para volver atrás */}
          <button onClick={() => setSeccion('inicio')} style={{ marginBottom: '20px' }}>
            ⬅ Volver al Menú
          </button>

          <Ejercicio1 />
        </div>
      )}

      {seccion === 'ejercicio2' && (
        <div className="area-ejercicio">
          {/* Botón para volver a atrás */}
          <button onClick={() => setSeccion('inicio')} style={{ marginBottom: '20px' }}>
            ⬅ Volver al Menú
          </button >

          <Ejercicio2 />
        </div >
      )}

      {seccion === 'ejercicio3' && (
        <div className='area-ejercicio'>
          <button onClick={() => setSeccion('inicio')} style={{ marginBottom: '20px' }}>
            ⬅ Volver al Menú
          </button>
          <Ejercicio3 />
        </div>
      )}

      {seccion === 'ejercicio4' && (
        <div className='area-ejercicio'>
          <button onClick={() => setSeccion('inicio')} style={{ marginBottom: '20px' }}>
            ⬅ Volver al Menú
          </button>
          <Ejercicio4 />
        </div>
      )}

      {seccion === 'ejercicio5' && (
        <div className='area-ejercicio'>
          <button onClick={() => setSeccion('inicio')} style={{ marginBottom: '20px' }}>
            ⬅ Volver al Menú
          </button>
          <Ejercicio5 />
        </div>
      )}
    </>
  )
}

export default App
