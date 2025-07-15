import React from 'react';
import useFetchJuegos from '../hooks/fetchJuegos';
import useFetchJuegoUsuarioByIdUsuario from '../hooks/fetchJuegoUsuarioByIdUsuario';
import imgAgregar from './../assets/images/AgregarJuego.png';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollListaJuegos from '../components/ui/ScrollListaJuegos';

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
    
    const navigate = useNavigate();
    const AgregarJuegoAPendiente = () => {
        navigate('/agregarJuegoUsuario?estado=pendiente', { state: { juegosUsuario: relaciones } });
    };
    const AgregarJuegoAJugando = () => {
        navigate('/agregarJuegoUsuario?estado=jugando', { state: { juegosUsuario: relaciones } });
    };

    const borrarJuegoUsuario = async (juegoId, usuarioId) => {
        try {
            const res = await fetch(`/api/juegos-usuarios/${usuarioId}/${juegoId}`, {
                method: 'DELETE'
            });
        
            if (res.ok) {
                window.location.reload();
            } else {
                alert('No se pudo borrar el juego');
            }
        } catch (err) {
            alert('Error de red');
        }
    };

    if (loading || loadingRelaciones) return <div className='loading'>Cargando...</div>;
    if (error || errorRelaciones) return <div className='error'>Error: {error || errorRelaciones}</div>;

    return(
        <div className='home-container coleccion-usuario-container'>
            <div className='home-overlay'></div>
                <h2 className='titulo-coleccion'>Colección de {user?.username || 'Usuario'}</h2>
                {/* Pendientes */}
                {juegosPendientes.length === 0 ? (
                    <div className="mensaje-vacio-lista" >
                        <h3 className='titulo-lista'>Pendientes</h3>
                        <p className="mensaje-vacio-texto">Tu lista de deseados está vacía. Agrega alguno!</p>
                        <div className="card-juego card-agregar" onClick={AgregarJuegoAPendiente}>
                            <img src={imgAgregar} alt="Agregar juego" className="imagen-genero" />
                            <span>+</span>
                            <p>Agregar juego</p>
                        </div>
                    </div>
                ) : (
                    <ScrollListaJuegos titulo="Pendientes" juegos={juegosPendientes} scrollRef={scrollPendienteRef} handleScroll={handleScroll} onAgregarJuego={AgregarJuegoAPendiente} onBorrarJuego={borrarJuegoUsuario} />
                )}
                {/* Jugando */}
                {juegosJugando.length === 0 ? (
                    <div className="mensaje-vacio-lista" >
                        <h3 className='titulo-lista'>Jugando</h3>
                        <p className="mensaje-vacio-texto">No estás jugando ningún juego. Agrega alguno!</p>
                        <div className="card-juego card-agregar" onClick={AgregarJuegoAJugando}>
                            <img src={imgAgregar} alt="Agregar juego" className="imagen-genero" />
                            <span>+</span>
                            <p>Agregar juego</p>
                        </div>
                    </div>
                ) : (
                    <ScrollListaJuegos titulo="Jugando" juegos={juegosJugando} scrollRef={scrollJugandoRef} handleScroll={handleScroll} onAgregarJuego={AgregarJuegoAJugando} onBorrarJuego={borrarJuegoUsuario}/>
                )}
                {/* Completados */}
                {juegosCompletados.length === 0 ? (
                    <div className="mensaje-vacio-lista" >
                        <h3 className='titulo-lista'>Completados</h3>
                        <p className="mensaje-vacio-texto">No completaste ningún juego.</p>
                    </div>
                ) : (
                    <ScrollListaJuegos titulo="Completados" juegos={juegosCompletados} scrollRef={scrollCompletadoRef} handleScroll={handleScroll} onBorrarJuego={borrarJuegoUsuario}/>
                )}
        </div>
    )
}

export default ColeccionUsuario;