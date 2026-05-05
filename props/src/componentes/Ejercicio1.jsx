import React, { useState } from 'react'
import Hijo1 from './Hijo1';

function Ejercicio1() {

  const [usuario, setUsuario] = useState(null); //Donde se guarda el usuario
  const [idUsuario, setIdUsuario] = useState(1); //id del usuario seleccionado (por defecto 1)

  const cargarUsuario = async () => {
    try {
      const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`); // fecth a la api con el id de usuario

      if (!respuesta.ok) throw new Error("Usuario no encontrado");
      const datos = await respuesta.json();
      setUsuario(datos); // Guardamos los datos en el estado
    } catch (error) {
      console.error("Error cargando usuario:", error);
    }
  };

  return (

    <div className='ejercicio-contenedor'>
      <h2>Ejercicio 1: Props Padre a hijo</h2>
      <p>Haz clic para traer un usuario desde la API y pasarlo al componente hijo.</p>

      <div style={{ marginBottom: "20px" }}>
        <label>Escribe un ID (1 al 10): </label>
        <input
          type="number"
          value={idUsuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          min="1"
          max="10"
        />
        <button onClick={cargarUsuario} style={{ marginLeft: "10px" }}>
          Cargar Usuario {idUsuario}
        </button>
      </div>

      {usuario ? (
        <Hijo1 usuario={usuario} />
      ) : (
        <p>No hay usuario seleccionado.</p>
      )}
    </div>

  )
}

export default Ejercicio1