import React from 'react';
import './../../index.css';
import useFetchJuegos from '../../hooks/fetchJuegos';
import useFetchJuegoUsuarioByIdUsuario from '../../hooks/fetchJuegoUsuarioByIdUsuario';
import { useRef } from 'react';
import ScrollListaJuegos from '../../components/ui/ScrollListaJuegos';

function ColeccionUsuario(){
    const {juegos, loading, error} = useFetchJuegos();
    // Obtener el usuario logueado desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    // Usar el hook con el id del usuario
    const {relaciones, loading: loadingRelaciones, error: errorRelaciones} = useFetchJuegoUsuarioByIdUsuario(userId);

    // Relacionar juegos con las relaciones filtradas
    const juegosRelacionados = relaciones.map(relacion => {
        const juego = juegos.find(j => j.id === relacion.juego_id);
        return juego ? {...juego, ...relacion} : null;
    }).filter(juego => juego !== null);

    // Separar juegos por estado
    const juegosPendientes = juegosRelacionados.filter(j => j.estado === 'pendiente');
    const juegosJugando = juegosRelacionados.filter(j => j.estado === 'jugando');
    const juegosCompletados = juegosRelacionados.filter(j => j.estado === 'completado');

    // Refs para cada scroll
    const scrollPendienteRef = useRef(null);
    const scrollJugandoRef = useRef(null);
    const scrollCompletadoRef = useRef(null);

    const handleScroll = (ref, dir) => {
        ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    };

    const handleAgregarJuego = () => {
        // Aquí puedes abrir un modal o redirigir a una página para agregar juego
        alert('Funcionalidad para agregar juego (pendiente de implementar)');
    };

    if (loading || loadingRelaciones) return <div className='loading'>Cargando...</div>;
    if (error || errorRelaciones) return <div className='error'>Error: {error || errorRelaciones}</div>;

    return(
        <div className='home-container'>
            <div className='home-overlay'></div>
            <h2 className='titulo-coleccion'>Colección de {user?.username || 'Usuario'}</h2>
            {/* Pendientes */}
            {juegosPendientes.length === 0 ? (
                <div className="mensaje-vacio-lista" >
                    <h3 className='titulo-lista'>Pendientes</h3>
                    <p className="mensaje-vacio-texto">Tu lista de deseados está vacía.</p>
                </div>
            ) : (
                <ScrollListaJuegos titulo="Pendientes" juegos={juegosPendientes} scrollRef={scrollPendienteRef} handleScroll={handleScroll} onAgregarJuego={handleAgregarJuego} />
            )}
            {/* Jugando */}
            {juegosJugando.length === 0 ? (
                <div className="mensaje-vacio-lista" >
                    <h3 className='titulo-lista'>Jugando</h3>
                    <p className="mensaje-vacio-texto">No estás jugando ningún juego.</p>
                </div>
            ) : (
                <ScrollListaJuegos titulo="Jugando" juegos={juegosJugando} scrollRef={scrollJugandoRef} handleScroll={handleScroll} onAgregarJuego={handleAgregarJuego} />
            )}
            {/* Completados */}
            {juegosCompletados.length === 0 ? (
                <div className="mensaje-vacio-lista" >
                    <h3 className='titulo-lista'>Completados</h3>
                    <p className="mensaje-vacio-texto">No completaste ningún juego.</p>
                </div>
            ) : (
                <ScrollListaJuegos titulo="Completados" juegos={juegosCompletados} scrollRef={scrollCompletadoRef} handleScroll={handleScroll} onAgregarJuego={handleAgregarJuego} />
            )}
        </div>
    )
}

export default ColeccionUsuario