import React from 'react';

const ModalInfo = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Acerca del proyecto</h2>
                <p>
                    Este proyecto fue desarrollado como parte de una propuesta académica y creativa.
                    Su objetivo es permitir a los usuarios explorar, coleccionar y gestionar videojuegos de forma sencilla.
                </p>
                <p>
                    Autores: Ramiro Ezequiel Pizzico, Ana Paula Schechtel, Facundo Tischler, Mateo Belatti.
                </p>
                <div className="contenedor-botones">
                    <button className="boton-rojo" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalInfo;
