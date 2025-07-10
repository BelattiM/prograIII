import React from 'react';
import imgAccion from './../../assets/images/GenerosJuegos/juegoAccion.png';
import imgAventura from './../../assets/images/GenerosJuegos/juegoAventura.png';
import imgDeportes from './../../assets/images/GenerosJuegos/juegoDeportes.png';
import imgPlataforma from './../../assets/images/GenerosJuegos/juegoPlataforma.png';
import imgRPG from './../../assets/images/GenerosJuegos/juegoRPG.png';
import imgEstrategia from './../../assets/images/GenerosJuegos/juegoEstrategia.png';
import imgOtro from './../../assets/images/GenerosJuegos/juegoOtro.png';
import imgAgregar from './../../assets/images/AgregarJuego.png';

const imagenesGenero = {
    'Accion': imgAccion,
    'Aventura': imgAventura,
    'Estrategia': imgEstrategia,
    'Plataformas': imgPlataforma,
    'RPG (Juegos de rol)': imgRPG,
    'Deportes': imgDeportes,
    'Otro': imgOtro
};

function ScrollListaJuegos({ titulo, juegos, scrollRef, handleScroll, onAgregarJuego }) {
    const mostrarAgregar = titulo === 'Pendientes';
    return (
        <>
            <h3 className='titulo-lista'>{titulo}</h3>
            <div className='contenedorScroll'>
                <button className="flecha izquierda" onClick={() => handleScroll(scrollRef, -1)}>◄</button>
                <div className='contenedorLista' ref={scrollRef}>
                    {juegos.map(juego => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;
                        return (
                            <div key={juego.id} className="card-juego">
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                <p className='titulo-juego'>{juego.titulo}</p>
                                <p className='genero-juego'>{juego.genero}</p>
                            </div>
                        );
                    })}
                    {mostrarAgregar && (
                        <div className="card-juego card-agregar" onClick={onAgregarJuego}>
                            <img src={imgAgregar} alt="Agregar juego" className="imagen-genero" />
                            <span>+</span>
                            <p>Agregar juego</p>
                        </div>
                    )}
                </div>
                <button className="flecha derecha" onClick={() => handleScroll(scrollRef, 1)}>►</button>    
            </div>
        </>
    );
}

export default ScrollListaJuegos;
