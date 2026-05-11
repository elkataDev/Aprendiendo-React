import React from 'react'
import { Navigate } from 'react-router-dom';

function RutaProtegida({ logeado, children }) {

    if (!logeado) {
        // Si no está autenticado, redirigimos al login
        return <Navigate to="/login" replace />;
    }
    // Si está autenticado, mostramos el componente (en este caso Cuenta)
    return children;
}

export default RutaProtegida