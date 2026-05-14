import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const listaUsuarios = [
    { id: 1, nombre: "antonio" },
    { id: 2, nombre: "juan" },
    { id: 3, nombre: "maria" }
];


function Usuarios() {

    const navigate = useNavigate();

    return (
        <>
            {listaUsuarios.map((usuario) => (
                <Link key={usuario.id} to={`/usuarios/${usuario.id}`}>
                    {usuario.nombre}
                </Link>
            ))}

            {/** Dos opciones validas para volver hacia atras (opcional) */}

            {/**<button type='button' onClick={() => navigate(-1)}>Inicio</button>*/}

            {/** <Link to='/'>Ir al Inicio</Link> */}

            <Link to='/'>Ir al Inicio</Link>

        </>
    )
}

export default Usuarios