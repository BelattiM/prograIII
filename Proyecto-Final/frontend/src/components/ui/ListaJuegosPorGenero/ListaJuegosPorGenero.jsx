import './ListaJuegosPorGenero.css'
import React, { useState, useEffect, useRef } from 'react';
import imgAccion from './../../../assets/images/GenerosJuegos/juegoAccion.png'
import imgAventura from './../../../assets/images/GenerosJuegos/juegoAventura.png'
import imgDeportes from './../../../assets/images/GenerosJuegos/juegoDeportes.png'
import imgPlataforma from './../../../assets/images/GenerosJuegos/juegoPlataforma.png'
import imgRPG from './../../../assets/images/GenerosJuegos/juegoRPG.png'
import imgEstrategia from './../../../assets/images/GenerosJuegos/juegoEstrategia.png'
import imgOtro from './../../../assets/images/GenerosJuegos/juegoOtro.png'


function ListaJuegosPorGenero(){
    
    const scrollRef = useRef(null);
    
    const handleScrollIzquierda = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const handleScrollDerecha = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const imagenesGenero = {
        'Accion': imgAccion,
        'Aventura': imgAventura,
        'Estrategia': imgEstrategia,
        'Plataformas': imgPlataforma,
        'RPG (Juegos de rol)': imgRPG,
        'Deportes': imgDeportes,
        'Otro': imgOtro
    };

    return (
        <div className='ListaJuegosPorGenero'>
            <h2>Explora por Categoria</h2>
            <div className='contenedorScroll'>
                <button className="flecha izquierda" onClick={handleScrollIzquierda}>◄</button>
                <div className='contenedorGenero' ref={scrollRef}>
                    {Object.entries(imagenesGenero).map(([genero, imagen]) => (
                        <div key={genero} className="card-genero">
                            <img src={imagen} alt={genero} className="imagen-genero" />
                            <p className='titulo-genero'>{genero}</p>
                        </div>
                    ))}
                </div>
                <button className="flecha derecha" onClick={handleScrollDerecha}>►</button>
            </div>
        </div>
    );
}

export default ListaJuegosPorGenero