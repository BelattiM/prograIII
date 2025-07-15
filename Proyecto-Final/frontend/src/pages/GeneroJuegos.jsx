import React from 'react';
import { useParams } from 'react-router-dom';
import fetchJuegos from '../hooks/fetchJuegos';
import imgAccion from './../assets/images/GenerosJuegos/juegoAccion.png';
import imgAventura from './../assets/images/GenerosJuegos/juegoAventura.png'
import imgDeportes from './../assets/images/GenerosJuegos/juegoDeportes.png'
import imgPlataforma from './../assets/images/GenerosJuegos/juegoPlataforma.png'
import imgRPG from './../assets/images/GenerosJuegos/juegoRPG.png'
import imgEstrategia from './../assets/images/GenerosJuegos/juegoEstrategia.png'
import imgOtro from './../assets/images/GenerosJuegos/juegoOtro.png'

function GeneroJuegos() {
    const { genero } = useParams();
    const { juegos, loading, error} = fetchJuegos();

    if (loading) {
        return <div className="pagina-genero"><h2>Juegos de {genero}</h2><p>Cargando juegos...</p></div>;
    }
    if (error) {
        return <div className="pagina-genero"><h2>Juegos de {genero}</h2><p>Error al cargar los juegos.</p></div>;
    }

    const juegosFiltrados = Array.isArray(juegos) ? juegos.filter(juego => juego.genero && juego.genero.toLowerCase() === genero.toLowerCase()) : [];

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
            <h2 className='titulo-juegos-genero'>Juegos de {genero}</h2>
            <div className="lista-juegos-genero">
                {juegosFiltrados.length > 0 ? (
                    juegosFiltrados.map(juego => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;
                        
                        return (
                            <div key={juego.id} className="card-juego"
                                onClick={() => {
                                    if (juego.linkwiki) {
                                        // Abrir enlace de la wiki en una nueva pestaña
                                        window.open(juego.linkwiki, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                <p className='titulo-juego'>{juego.titulo}</p>
                                <p className='subtitulo-wiki'>
                                    {juego.linkwiki ? (
                                        'Ir a la wiki'
                                    ) : (
                                        'No tiene wiki'
                                    )}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p className='genero-not-found'>No se encontraron juegos para este género.</p>
                )}
            </div>
        </div>
    );
}

export default GeneroJuegos;
