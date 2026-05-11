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
                        <Link to={`/ordenadores/${producto.id}`} className='btn-detalles'> Ver Detalles </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default ListaProductos