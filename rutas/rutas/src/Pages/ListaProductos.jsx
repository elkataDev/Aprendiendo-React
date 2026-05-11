import React from 'react'
import { Link } from 'react-router-dom'
import { productos } from '../Productos/Productos'
import './ListaProductos.css'

function ListaProductos() {
    return (
        <div>
            <section className='grid-productos'>
                {productos.map(producto => (
                    <div key={producto.id} className='card'>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: {producto.precio}</p>   

                        {/* 
                           ESTA ES LA LÍNEA CLAVE:
                           Crea un enlace dinámico usando las comillas ``.
                           Si el id es 1, la ruta será: /ordenadores/1
                        */}

                        <Link to={`/ordenadores/${producto.id}`} className='btn-detalles'> Ver Detalles </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default ListaProductos