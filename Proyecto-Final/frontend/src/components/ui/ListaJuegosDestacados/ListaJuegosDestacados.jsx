import './ListaJuegosDestacados.css'
import React, { useState, useEffect, useRef } from 'react';
import imgAccion from './../../../assets/images/GenerosJuegos/juegoAccion.png'
import imgAventura from './../../../assets/images/GenerosJuegos/juegoAventura.png'
import imgDeportes from './../../../assets/images/GenerosJuegos/juegoDeportes.png'
import imgPlataforma from './../../../assets/images/GenerosJuegos/juegoPlataforma.png'
import imgRPG from './../../../assets/images/GenerosJuegos/juegoRPG.png'
import imgEstrategia from './../../../assets/images/GenerosJuegos/juegoEstrategia.png'
import imgOtro from './../../../assets/images/GenerosJuegos/juegoOtro.png'

function ListaJuegosDestacados(){

    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const scrollRef = useRef(null);

    const handleScrollIzquierda = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const handleScrollDerecha = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    useEffect(()=>{
        const fetchJuegos = async () =>{ 
            try {
                const response = await fetch('http://localhost:3001/api/juegos/');

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setJuegos(data.juegos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchJuegos();
    }, [])
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
        <div className='ListaJuegosDestacados'>
            <h2>Juegos Destacados</h2>
            <div className='contenedorScroll'>
                <button className="flecha izquierda" onClick={handleScrollIzquierda}>←</button>
                <div className='contenedorJuegos' ref={scrollRef}>
                    {juegos.map(juego => {
                        const imagen = imagenesGenero[juego.genero] || imgOtro;

                        return (
                            <div key={juego.id} className="Juego">
                                <img src={imagen} alt={juego.genero} className="imagen-genero" />
                                <p className='titulo-juego'>{juego.titulo}</p>
                                <p className='genero-juego'>{juego.genero}</p>
                            </div>
                        );
                    })}
                </div>
                <button className="flecha derecha" onClick={handleScrollDerecha}>→</button>
            </div>
        </div>
    );
}

export default ListaJuegosDestacados