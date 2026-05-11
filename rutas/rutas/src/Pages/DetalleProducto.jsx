import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { productos } from '../Productos/Productos'

function DetalleProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const producto = productos.find(prod => prod.id === parseInt(id))

    if (!producto) return <h2>Producto no encontrado</h2>;
    return (
        <div className="detalle-container">
            <div className="img-box">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="info-box">
                <h2>{producto.nombre}</h2>
                <h3 className="precio">Precio: ${producto.precio}</h3>
                <p>{producto.descripcion}</p>
                <button className="btn-volver" onClick={() => navigate(-1)}>
                    ⬅ Back to Select
                </button>
            </div>
        </div>
    )
} export default DetalleProducto