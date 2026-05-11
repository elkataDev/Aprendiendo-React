import React from 'react'
import './Inicio.css'

function Inicio() {
    return (
        <>
            <h2>Zotac Tech</h2>

            {/* Contenedor 3 productos */}
            <div className='contenedor'>

                {/* Card 1 */}
                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>

                {/* card 2 */}

                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>

                {/* Card 3 */}

                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>
            </div>

            {/* Contenedor 2 de 3 productos */}
            <div className='contenedor'>

                {/* Card 1 */}
                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>

                {/* card 2 */}

                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>

                {/* Card 3 */}

                <div className="card">
                    <img src="https://via.placeholder.com/300x150" alt="Imagen de portada" className="card-img" />
                    <div className="card-body">
                        <h3 className="card-title">PC 1</h3>
                        <p className="card-text">Esta es un PC gamer.</p>
                        <button className="card-button">Leer más</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Inicio