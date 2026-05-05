import React, { useState } from 'react'

function Hijo2(props) {
    const enviarNombre = props.enviarNombre; //Contenido que se envia al padre
    const [nombreHijo, setNombreHijo] = useState(null); // nombre para mostrar en el hijo 
    const [idUsuario, setIdUsuario] = useState(1); // id del usuario

    const cargarUsuario = async () => {
        try {
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`);

            if (!respuesta.ok) throw new Error("Usuario no encontrado");
            const datos = await respuesta.json();
            setNombreHijo(datos.name) // Guardo la propiedad name de la api del usuario en concreto idUsuario (muestra en el nombre en el hijo)
            enviarNombre(datos.name)
        } catch (error) {
            console.error("Error cargando usuario:", error);
        }
    }

    return (
        <>
            <label>Introduzca del 1 al 10</label>
            <input
                type="number"
                min={1}
                max={10}
                onChange={(e) => { setIdUsuario(e.target.value) }}
                value={idUsuario}
            />

            <button onClick={cargarUsuario}>Obtener Usuario</button>
            <p>Nombre recibido en Hijo = {nombreHijo}</p>
        </>
    )
}

export default Hijo2