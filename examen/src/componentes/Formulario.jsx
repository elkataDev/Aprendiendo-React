import React, { useState } from 'react'

function Formulario() {

    // Definimos formulario simple

    const [formulario, setFormulario] = useState({
        nombre: '',
        emai: '',
        edad: ''
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormulario({
            ...formulario,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://6971f19032c6bacb12c51fd4.mockapi.io/Formulario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formulario)
            });
            if (response.ok) console.log('Enviado');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={formulario.nombre || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        edad:
                        <input
                            type="number"
                            min={1}
                            name="edad"
                            value={formulario.edad || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formulario.email || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type='submit'>Enviar Formulario</button>
            </form>
        </>
    )
}

export default Formulario