import React from 'react'

function UserCard({ nombre, email, edad }) {

    
    /**
     * Ejericio 1
     * Crea un componente UserCard que reciba las props: nombre, email y edad. Reutiliza el 
     * componente 3 veces con datos distintos.
     */

    return (
        <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
            {nombre}
            {email}
            Edad: {edad}</div>
    )
}

export default UserCard