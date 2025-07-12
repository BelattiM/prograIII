import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import imgAccion from './../../../assets/images/GenerosJuegos/juegoAccion.png'
import imgAventura from './../../../assets/images/GenerosJuegos/juegoAventura.png'
import imgDeportes from './../../../assets/images/GenerosJuegos/juegoDeportes.png'
import imgPlataforma from './../../../assets/images/GenerosJuegos/juegoPlataforma.png'
import imgRPG from './../../../assets/images/GenerosJuegos/juegoRPG.png'
import imgEstrategia from './../../../assets/images/GenerosJuegos/juegoEstrategia.png'
import imgOtro from './../../../assets/images/GenerosJuegos/juegoOtro.png'
import useFetchJuegos from '../../../hooks/fetchJuegos';

function ListaJuegosDestacados(){
    const navigate = useNavigate();
    const { juegos, loading, error } = useFetchJuegos();
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

    if (loading) return <div className='loading'>Cargando...</div>;
    if (error) return <div className='error'>Error: {error}</div>;

    return (
        <div className='ListaJuegos'>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <h2>Juegos Disponibles</h2>
                <span className='ver-todos-link' onClick={() => navigate('/juegos')}>Ver todos</span>
            </div>
            <div className='contenedorScroll'>
                <button className="flecha izquierda" onClick={handleScrollIzquierda}>◄</button>
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
                </div>
                <button className="flecha derecha" onClick={handleScrollDerecha}>►</button>
            </div>
        </div>
    );
}

export default ListaJuegosDestacados