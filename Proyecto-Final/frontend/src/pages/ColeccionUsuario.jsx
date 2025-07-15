import React, { useRef, useState, useEffect } from 'react';
import useFetchJuegos from '../hooks/fetchJuegos';
import useFetchJuegoUsuarioByIdUsuario from '../hooks/fetchJuegoUsuarioByIdUsuario';
import imgAgregar from './../assets/images/AgregarJuego.png';
import { useNavigate } from 'react-router-dom';
import ScrollListaJuegos from '../components/ui/ScrollListaJuegos';

function ColeccionUsuario(){
    // Fetch de juegos 
    const {juegos, loading, error} = useFetchJuegos();

    // Fetch de juegos del usuario
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const {relaciones, loading: loadingRelaciones, error: errorRelaciones, refetch: refetchRelaciones} = useFetchJuegoUsuarioByIdUsuario(userId);
    
    // Estado para manejar las relaciones de juegos del usuario
    const [relacionesUsuario, setRelacionesUsuario] = useState([]);
    useEffect(() => {
        setRelacionesUsuario(relaciones);
    }, [relaciones]);

    // Relacionar juegos con las relaciones filtradas
    const juegosRelacionados = relacionesUsuario.map(relacion => {
        const juego = juegos.find(j => j.id === relacion.juego_id);
        return juego ? {juego, relacion} : null;
    }).filter(juego => juego !== null);

    // Separar juegos por estado
    const juegosPendientes = juegosRelacionados.filter(j => j.relacion.estado === 'pendiente');
    const juegosJugando = juegosRelacionados.filter(j => j.relacion.estado === 'jugando');
    const juegosCompletados = juegosRelacionados.filter(j => j.relacion.estado === 'completado');

    // Refs y handler para cada scroll
    const scrollPendienteRef = useRef(null);
    const scrollJugandoRef = useRef(null);
    const scrollCompletadoRef = useRef(null);

    const handleScroll = (ref, dir) => {
        ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    };
    
    // Navegación
    const navigate = useNavigate();
    const AgregarJuegoAPendiente = () => {
        navigate('/agregarJuegoUsuario?estado=pendiente', { state: { juegosUsuario: relaciones } });
    };
    const AgregarJuegoAJugando = () => {
        navigate('/agregarJuegoUsuario?estado=jugando', { state: { juegosUsuario: relaciones } });
    };

    // Funciones para borrar y actualizar juegos
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

    // Actualizar relación de juego en el front
    const actualizarRelacionJuego = async (relacionEditada) => {
    try {
        const res = await fetch(`http://localhost:3001/api/juegos-usuarios/${relacionEditada.usuario_id}/${relacionEditada.juego_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                estado: relacionEditada.estado,
                calificacion: Number(relacionEditada.calificacion),
                tiempoDeJuego: Number(relacionEditada.tiempoDeJuego)
            })
        });

        if (!res.ok) throw new Error();
        await refetchRelaciones();
    } catch (err) {
        alert('No se pudieron guardar los cambios');
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
                    <ScrollListaJuegos titulo="Pendientes" juegos={juegosPendientes} scrollRef={scrollPendienteRef} handleScroll={handleScroll} onAgregarJuego={AgregarJuegoAPendiente} onBorrarJuego={borrarJuegoUsuario} onActualizarJuego={actualizarRelacionJuego}/>
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
                    <ScrollListaJuegos titulo="Jugando" juegos={juegosJugando} scrollRef={scrollJugandoRef} handleScroll={handleScroll} onAgregarJuego={AgregarJuegoAJugando} onBorrarJuego={borrarJuegoUsuario} onActualizarJuego={actualizarRelacionJuego}/>
                )}
                {/* Completados */}
                {juegosCompletados.length === 0 ? (
                    <div className="mensaje-vacio-lista" >
                        <h3 className='titulo-lista'>Completados</h3>
                        <p className="mensaje-vacio-texto">No completaste ningún juego.</p>
                    </div>
                ) : (
                    <ScrollListaJuegos titulo="Completados" juegos={juegosCompletados} scrollRef={scrollCompletadoRef} handleScroll={handleScroll} onBorrarJuego={borrarJuegoUsuario} onActualizarJuego={actualizarRelacionJuego}/>
                )}
        </div>
    )
}

export default ColeccionUsuario;