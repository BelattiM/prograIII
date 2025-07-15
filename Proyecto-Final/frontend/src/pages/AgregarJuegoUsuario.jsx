import React, { useState, useEffect } from 'react';
import fetchJuegos from '../hooks/fetchJuegos';
import useFetchJuegoUsuarioByIdUsuario from '../hooks/fetchJuegoUsuarioByIdUsuario';

import imgAccion from './../assets/images/GenerosJuegos/juegoAccion.png';
import imgAventura from './../assets/images/GenerosJuegos/juegoAventura.png';
import imgDeportes from './../assets/images/GenerosJuegos/juegoDeportes.png';
import imgPlataforma from './../assets/images/GenerosJuegos/juegoPlataforma.png';
import imgRPG from './../assets/images/GenerosJuegos/juegoRPG.png';
import imgEstrategia from './../assets/images/GenerosJuegos/juegoEstrategia.png';
import imgOtro from './../assets/images/GenerosJuegos/juegoOtro.png';

import { useLocation } from 'react-router-dom';

function AgregarJuegoUsuario() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const estadoAgregar = params.get('estado') || 'pendiente';

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;

    // Todos los juegos
    const { juegos, loading: loadingJuegos, error: errorJuegos, refetch: refetchJuegos } = fetchJuegos();

    // Juegos que ya tiene el usuario (relaciones)
    const {
        relaciones: juegosUsuario,
        loading: loadingRelaciones,
        error: errorRelaciones,
        refetch: refetchRelaciones
    } = useFetchJuegoUsuarioByIdUsuario(userId);

    // Estado local para guardar juegos filtrados (los que usuario NO tiene)
    const [juegosFiltrados, setJuegosFiltrados] = useState([]);

    // Filtrar juegos disponibles cada vez que cambien juegos o juegosUsuario
    useEffect(() => {
        if (juegos.length > 0 && juegosUsuario.length >= 0) {
            const juegosUsuarioIds = juegosUsuario.map(r => r.juego_id);
            const disponibles = juegos.filter(j => !juegosUsuarioIds.includes(j.id));
            setJuegosFiltrados(disponibles);
        }
    }, [juegos, juegosUsuario]);

    // Agregar juego a la colección
    const agregarAColeccion = async (juegoId) => {
        try {
            const res = await fetch('/api/juegos-usuarios/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    usuario_id: userId,
                    juego_id: juegoId,
                    estado: estadoAgregar
                })
            });

            if (res.ok) {
                alert('Juego agregado a tu colección');
                setJuegosFiltrados(prev => prev.filter(j => j.id !== juegoId)); 
            } else {
                alert('Error al agregar el juego');
            }
        } catch (err) {
            alert('Error de red');
        }
    };

    if (loadingJuegos || loadingRelaciones) {
        return <div className="pagina-genero"><h2>Todos los Juegos</h2><p>Cargando juegos...</p></div>;
    }

    if (errorJuegos || errorRelaciones) {
        return <div className="pagina-genero"><h2>Todos los Juegos</h2><p>Error al cargar los juegos.</p></div>;
    }

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
        <div className="home-container">
            <div className='home-overlay'></div>
            <h2 className='titulo-juegos-genero'>Todos los Juegos</h2>
            <div className="lista-juegos-genero">
                {juegosFiltrados.length > 0 ? (
                    juegosFiltrados.map(juego => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;
                        return (
                            <div key={juego.id} className="card-juego">
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                <p className='titulo-juego'>{juego.titulo}</p>
                                <button
                                    className='btn-agregar-a-coleccion'
                                    onClick={() => agregarAColeccion(juego.id)}
                                >
                                    Agregar
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p className='mensaje-vacio-lista'>No hay juegos disponibles o ya están todos en tu lista.</p>
                )}
            </div>
        </div>
    );
}

export default AgregarJuegoUsuario;
