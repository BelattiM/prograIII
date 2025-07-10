import './../../../../index.css'
import React from 'react';

const ModalRegister = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <div className='contenedor-botones'>
                    <button className='boton-registrar'>Registrarse</button>
                    <button className='boton-cancelar' onClick={onClose}> Cancelar </button>
                </div>
            </div>
        </div>
    );
};

export default ModalRegister;