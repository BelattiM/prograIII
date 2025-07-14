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

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.id;

function ScrollListaJuegos({ titulo, juegos, scrollRef, handleScroll, onAgregarJuego, onBorrarJuego }) {
    const mostrarAgregar = titulo === 'Pendientes' || titulo === 'Jugando' ;
    return (
        <>
            <h3 className='titulo-lista'>{titulo}</h3>
            <div className='contenedorScroll'>
                <button className="flecha izquierda" onClick={() => handleScroll(scrollRef, -1)}>◄</button>
                <div className='contenedorLista' ref={scrollRef}>
                    {mostrarAgregar && (
                        <div className="card-juego card-agregar" onClick={onAgregarJuego}>
                            <img src={imgAgregar} alt="Agregar juego" className="imagen-genero" />
                            <span>+</span>
                            <p>Agregar juego</p>
                        </div>
                    )}
                    {juegos.map(juego => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;
                        return (
                            <div key={juego.id} className="card-juego">
                                <p className='borrar-juego-usuario'>Borrar de la lista</p>
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                <p className='titulo-juego'>{juego.titulo}</p>
                                {titulo === 'Completados' && (
                                    <>
                                        <p className='calificacion-juego'>Calificación: {juego.calificacion ?? '-'}/10</p>
                                        <p className='tiempo-juego'>Tiempo de juego: {juego.tiempoDeJuego ?? '0'}hs</p>
                                    </>
                                )}
                                <p className='borrar-juego-usuario' onClick={() => onBorrarJuego(juego.id, userId)}>Borrar de la lista</p>
                            </div>
                        );
                    })}
                </div>
                <button className="flecha derecha" onClick={() => handleScroll(scrollRef, 1)}>►</button>    
            </div>
        </>
    );
}

export default ScrollListaJuegos;
