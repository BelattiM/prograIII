import React, { useState, useEffect } from 'react';

function ModalEditarJuegoColeccion({ relacion, isOpen, onClose, onGuardar }) {
    const [relacionSelec, setRelacionSelec] = useState({
        juego_id: null,
        usuario_id: null,
        estado: 'pendiente',
        calificacion: '',
        tiempoDeJuego: ''
    });

    useEffect(() => {
        if (relacion) {
            setRelacionSelec({
                juego_id: relacion.juego_id,
                usuario_id: relacion.usuario_id,
                estado: relacion.estado || 'pendiente',
                calificacion: relacion.calificacion ?? 0,
                tiempoDeJuego: relacion.tiempoDeJuego ?? 0
            });
        }
    }, [relacion]);


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setRelacionSelec({
            ...relacionSelec,
            [name]: type === 'number' ? parseFloat(value) : value
        });
    };

    const handleGuardar = () => {
        onGuardar(relacionSelec);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Editar relación</h2>
                <label>Calificación</label>
                <input
                    name="calificacion"
                    type="number"
                    value={relacionSelec.calificacion ?? 0}
                    onChange={handleChange}
                    placeholder="Calificación (0-10)"
                />
                <label>Tiempo de juego (en horas)</label>
                <input
                    name="tiempoDeJuego"
                    type="number"
                    value={relacionSelec.tiempoDeJuego ?? 0}
                    onChange={handleChange}
                    placeholder="Tiempo de juego"
                />
                <label>Estado</label>
                <select
                    name="estado"
                    value={relacionSelec.estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="jugando">Jugando</option>
                    <option value="completado">Completado</option>
                </select>
                <div className="contenedor-botones">
                    <button className="boton-verde" onClick={handleGuardar}>Guardar</button>
                    <button className="boton-rojo" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
export default ModalEditarJuegoColeccion;