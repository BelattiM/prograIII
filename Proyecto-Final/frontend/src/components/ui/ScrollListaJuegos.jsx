import React, {useState} from 'react';
import imgAccion from './../../assets/images/GenerosJuegos/juegoAccion.png';
import imgAventura from './../../assets/images/GenerosJuegos/juegoAventura.png';
import imgDeportes from './../../assets/images/GenerosJuegos/juegoDeportes.png';
import imgPlataforma from './../../assets/images/GenerosJuegos/juegoPlataforma.png';
import imgRPG from './../../assets/images/GenerosJuegos/juegoRPG.png';
import imgEstrategia from './../../assets/images/GenerosJuegos/juegoEstrategia.png';
import imgOtro from './../../assets/images/GenerosJuegos/juegoOtro.png';
import imgAgregar from './../../assets/images/AgregarJuego.png';
import ModalEditarJuegoColeccion from './modales/ModalEditarJuegoColeccion.jsx';


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

function ScrollListaJuegos({ titulo, juegos, scrollRef, handleScroll, onAgregarJuego, onBorrarJuego, onActualizarJuego }) {
    const mostrarAgregar = titulo === 'Pendientes' || titulo === 'Jugando' ;

    const [modalAbierto, setModalAbierto] = useState(false);
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

    const abrirModal = (relacion) => {
        setJuegoSeleccionado(relacion);
        setModalAbierto(true);
    };

    const handleGuardarCambios = (relacionEditada) => {
        onActualizarJuego(relacionEditada);
    };


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
                    {juegos.map(({ juego, relacion }) => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;
                        return (
                            <div key={juego.id} className="card-juego" onClick={() => abrirModal(relacion)}>
                                <p className='titulo-juego'>{juego.titulo}</p>
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                {(titulo === 'Completados' || titulo === 'Jugando') && (
                                    <>
                                        <p className='calificacion-juego'>Calificación: {relacion.calificacion ?? '-'}/10</p>
                                        <p className='tiempo-juego'>Tiempo de juego: {relacion.tiempoDeJuego ?? '0'}hs</p>
                                    </>
                                )}
                                <p className='borrar-juego-usuario' onClick={(e) => {
                                    e.stopPropagation();
                                    onBorrarJuego(relacion.juego_id, userId);
                                }}>
                                    Borrar de la lista
                                </p>
                            </div>
                        );
                    })}
                </div>
                <button className="flecha derecha" onClick={() => handleScroll(scrollRef, 1)}>►</button>    
                <ModalEditarJuegoColeccion
                    isOpen={modalAbierto}
                    onClose={() => setModalAbierto(false)}
                    relacion={juegoSeleccionado}
                    onGuardar={handleGuardarCambios}
                />
            </div>
        </>
    );
}

export default ScrollListaJuegos;
