import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ loginCorrecto }) {
    // Inicializamos el Hook
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. Lógica de autenticación (simulación)
        if (usuario === 'admin' && password === '1234') {
            console.log('Inicio de sesión exitoso.');

            loginCorrecto(true); // Autenticado Correctamente

            // 2. Navegación programática: Redirigir a la página de Cuenta
            // El argumento es la ruta a la que se desea ir
            // navigate('/cuenta');                
            // O para reemplazar la entrada en el historial (el usuario no puede volver con el botón atrás) no volverá a la página anterior, sino a la que había antes de esa.
            navigate('/cuenta', { replace: true });

        } else {
            alert('Credenciales inválidas.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h3> Iniciar Sesión</h3>
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login