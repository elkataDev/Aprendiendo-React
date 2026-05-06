import React, { useState } from 'react'
import Hijo5 from './Hijo5';

function Ejercicio5() {

  const [post, setpost] = useState([]); // array de post
  const [postSeleccionado, setPostSeleccionado] = useState(null);

  const cargarPost = async () => {
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"); // ?_limit=5 coje los 5 primeros 

      if (!respuesta.ok) throw new Error("Error al obtener el post");
      const datos = await respuesta.json();
      setpost(datos); // guardo los post

    } catch (error) {
      console.error("Error al cagar:", error);
    }
  }

  const manejarPostSeleccionado = (post) => {
    setPostSeleccionado(post);
  }

  return (
    <>
      <button onClick={cargarPost}>Cargar Post</button>
      {/**
       *  Al hacer click en el boton, la variable "post" tendra contenido 
       *  El hijo recibira los post --> postRecibidos={post}
       */}

      <Hijo5
        postRecibidos={post}
        postSeleccionadoHijo={manejarPostSeleccionado} />


      {postSeleccionado && (
        <div>
          <h2>Detalles del Post Seleccionado</h2>
          <p><strong>ID:</strong> {postSeleccionado.id}</p>
          <p><strong>User ID:</strong> {postSeleccionado.userId}</p>
          <h3>{postSeleccionado.title}</h3>
          <p>{postSeleccionado.body}</p>
          <button onClick={() => setPostSeleccionado(null)}>Cerrar</button>
        </div>
      )}
    </>
  )
}

export default Ejercicio5