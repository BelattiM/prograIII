import React, { useState } from "react";

function ModalAgregarAdmin({ isOpen, onClose, tipo, onAgregar }) {
    const [nuevoItem, setNuevoItem] = useState({
        titulo: '',
        plataforma: '',
        genero: '',
        linkwiki: '',
        username: '',
        email: '',
        password: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        setNuevoItem({
            ...nuevoItem,
            [e.target.name]: e.target.value
        });
    };

    const handleAgregar = () => {
        if (tipo === 'juego') {
            const { titulo, plataforma, genero, linkwiki } = nuevoItem;
            if (!titulo || !plataforma || !genero) {
                alert('Por favor completá todos los campos del juego.');
                return;
            }
            onAgregar({ titulo, plataforma, genero, linkwiki });
        } else if (tipo === 'usuario') {
            const { username, email, password } = nuevoItem;
            if (!username || !email || !password) {
                alert('Por favor completá todos los campos del usuario.');
                return;
            }
            onAgregar({ username, email, password });
        }

        // Reset y cerrar
        setNuevoItem({
            titulo: '',
            plataforma: '',
            genero: '',
            linkwiki: '',
            username: '',
            email: '',
            password: ''
        });
        onClose();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Agregar {tipo}</h2>

                {tipo === 'juego' && (
                    <>
                        <input
                            name="titulo"
                            type="text"
                            value={nuevoItem.titulo}
                            onChange={handleInputChange}
                            placeholder="Título"
                        />
                        <input
                            name="plataforma"
                            type="text"
                            value={nuevoItem.plataforma}
                            onChange={handleInputChange}
                            placeholder="Plataforma"
                        />
                        <input
                            name="genero"
                            type="text"
                            value={nuevoItem.genero}
                            onChange={handleInputChange}
                            placeholder="Género"
                        />
                        <input
                            name="linkwiki"
                            type="text"
                            value={nuevoItem.linkwiki}
                            onChange={handleInputChange}
                            placeholder="Link a la wiki"
                        />
                    </>
                )}

                {tipo === 'usuario' && (
                    <>
                        <input
                            name="username"
                            type="text"
                            value={nuevoItem.username}
                            onChange={handleInputChange}
                            placeholder="Nombre de usuario"
                        />
                        <input
                            name="email"
                            type="email"
                            value={nuevoItem.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                        />
                        <input
                            name="password"
                            type="password"
                            value={nuevoItem.password}
                            onChange={handleInputChange}
                            placeholder="Contraseña"
                        />
                    </>
                )}

                <div className="contenedor-botones">
                    <button className="boton-verde" onClick={handleAgregar}>Agregar</button>
                    <button className="boton-rojo" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalAgregarAdmin;