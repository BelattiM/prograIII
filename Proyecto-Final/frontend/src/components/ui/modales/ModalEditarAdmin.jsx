import React, { useState, useEffect } from 'react';

function ModalEditarAdmin({ isOpen, onClose, items, onGuardar }) {
    const [itemSeleccionado, setItemSeleccionado] = useState(null);
    const [form, setForm] = useState({});

    useEffect(() => {
        if (items?.length > 0) {
            const inicial = items[0];
            setItemSeleccionado(inicial);
            setForm({ ...inicial });
        }
    }, [items]);

    const handleSeleccion = (e) => {
        const seleccionado = items.find(item => item.id === parseInt(e.target.value));
        setItemSeleccionado(seleccionado);
        setForm({ ...seleccionado });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleGuardar = () => {
        onGuardar(form);
        onClose();
    };

    if (!isOpen || !items) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Selecciona el Juego</h2>

                <select
                    value={itemSeleccionado?.id || ''}
                    onChange={handleSeleccion}
                    style={{ border: '3px solid #ccc' }}
                >
                    {items.map(item => (
                        <option key={item.id} value={item.id}>
                            {`ID: ${item.id}, Juego: ${item.titulo}`}
                        </option>
                    ))}
                </select>

                <input
                    name="titulo"
                    type="text"
                    value={form.titulo || ''}
                    onChange={handleChange}
                    placeholder="Título"
                />
                <input
                    name="plataforma"
                    type="text"
                    value={form.plataforma || ''}
                    onChange={handleChange}
                    placeholder="Plataforma"
                />
                <input
                    name="genero"
                    type="text"
                    value={form.genero || ''}
                    onChange={handleChange}
                    placeholder="Género"
                />
                <input
                    name="linkwiki"
                    type="text"
                    value={form.linkwiki || ''}
                    onChange={handleChange}
                    placeholder="Link a Wikipedia"
                />

                <div className="contenedor-botones">
                    <button className="boton-verde" onClick={handleGuardar}>Guardar</button>
                    <button className="boton-rojo" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEditarAdmin;
