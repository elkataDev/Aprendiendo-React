import React, {useState} from 'react'

function Hijo5({postRecibidos, postSeleccionadoHijo}) {

    // Si no hay contenido no muestra nada

    if (!postRecibidos || postRecibidos.length === 0) {
        return <p>No hay posts cargados.</p>;
    }
    return (
        <div>
            <h2>Lista de los post:</h2>
            <ul>
                {postRecibidos.map(post => ( // con .map se recorre cada post igual que si fuera un for 
                    <li key={post.id}>
                        <button onClick={() => postSeleccionadoHijo(post)}> {post.id}. {post.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Hijo5