import React, { useState, useEffect } from 'react';

function ModalEliminarAdmin({ isOpen, onClose, items, tipo, onEliminar }) {
    const [itemSeleccionado, setItemSeleccionado] = useState(null);

    useEffect(() => {
        if (items?.length > 0) {
            setItemSeleccionado(items[0]);
        }
    }, [items]);

    const handleSeleccion = (e) => {
        const seleccionado = items.find(item => item.id === parseInt(e.target.value));
        setItemSeleccionado(seleccionado);
    };

    if (!isOpen || !items) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Eliminar {tipo === 'juego' ? 'Juego' : 'Usuario'}</h2>

                <select value={itemSeleccionado?.id || ''} onChange={handleSeleccion}>
                    {items.map(item => (
                        <option key={item.id} value={item.id}>
                            {tipo === 'juego'
                                ? `ID: ${item.id}, Juego: ${item.titulo}`
                                : `ID: ${item.id}, Usuario: ${item.username}`}
                        </option>
                    ))}
                </select>

                <div className="contenedor-botones">
                    <button
                        className="boton-rojo"
                        onClick={() => onEliminar(itemSeleccionado)}
                        disabled={!itemSeleccionado}
                    >
                        Eliminar
                    </button>
                    <button className="boton-rojo" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEliminarAdmin;
