import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { productos } from '../Productos/Productos'
import './DetalleProducto.css'

function DetalleProducto() {
    /* 
       1. Obtenemos el "id" de la URL. 
       Si la URL es /producto/3, id valdrá "3".
       Usamos ": idProductoSeleccionado" para renombrar la variable y que sea más descriptiva.
    */
    const { id: idProductoSeleccionado } = useParams();

    /* 
       2. Inicializamos la función navigate. 
       Nos servirá para mover al usuario a otras páginas mediante código.
    */
    const navigate = useNavigate();

    /* 
       3. Buscamos el producto específico en nuestro array.
       - prod.id es un número (del JSON).
       - idProductoSeleccionado es un string (de la URL).
       Por eso usamos parseInt() para que la comparación (===) sea correcta.
    */
    const producto = productos.find(prod => prod.id === parseInt(idProductoSeleccionado))

    /* Se comprueba si el producto seleccionado existe */
    if (!producto) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Producto no encontrado</h2>;

    return (
        <div className="detalle-container">
            <div className="img-box">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="info-box">
                <h2>{producto.nombre}</h2>
                <h3 className="precio">Precio: ${producto.precio}</h3>
                <p>{producto.descripcion}</p>

                {/* 
                   Botón de navegación:
                   navigate(-1) funciona como el botón "atrás" del navegador,
                   llevando al usuario a la página donde estaba antes.
                */}
                <button className="btn-volver" onClick={() => navigate(-1)}>
                    ⬅ Back to Select
                </button>
            </div>
        </div>
    )
}

export default DetalleProducto