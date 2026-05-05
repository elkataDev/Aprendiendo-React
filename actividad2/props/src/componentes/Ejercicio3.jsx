import React, { useState } from 'react'

function Ejercicio3() {

  const [post, setPost] = useState(null); // donde se guarda el post
  const [idPost, setIdPost] = useState(1); // id del post

  const cargarPost = async () => {
    try {
      const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      if (!respuesta.ok) throw new Error("Post no encontrado");

      const datos = await respuesta.json();
      setPost(datos); // Guardamos el post
    } catch (error) {
      console.error("Error cargando el post:", error);
    }
  };

  //Funcion para "Ocultar" el post
  const ocultarPost = () => {
    setPost(null);
  };

  return (
    <>
      <label>Introduce del 1 al 10</label>
      <input
        type="number"
        value={idPost}
        min={1}
        max={10}
        onChange={(e) => { setIdPost(e.target.value) }}
      />

      {/**
     * Si NO HAY POST se muestra el boton de cargar el post
     * si HAY POST se muestra el boton de ocultar post 
     */}

      {!post ? (
        <button onClick={cargarPost} style={{ marginLeft: "20px" }}>
          Mostrar post {idPost}
        </button>
      ) : (
        <button onClick={ocultarPost} style={{ marginLeft: "20px" }}>
          Ocultar Post
        </button>
      )}
      {post && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </>
  )
}

export default Ejercicio3