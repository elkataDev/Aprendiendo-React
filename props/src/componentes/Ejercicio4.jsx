import React, { useState } from 'react';

function Ejercicio4() {
  // El estado inicial debe ser un array vacio
  const [posts, setPosts] = useState([]);

  const cargarPost = async () => {
    const nuevosPosts = [];

    for (let i = 1; i <= 5; i++) {
      try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
        if (!respuesta.ok) throw new Error("Error al cargar");
        
        const datos = await respuesta.json();
        nuevosPosts.push(datos);
      } catch (error) {
        console.error("No se cargó el post:", error);
      }
    }

    // Actualizamos el estado
    setPosts(nuevosPosts);
  };

  return (
    <>
      <button onClick={cargarPost}>Generar 5 posts</button> 
      
      <ul>
        {/* Usamos map para mostrar la lista */}
        {posts.map((post) => (
          <li>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Ejercicio4;