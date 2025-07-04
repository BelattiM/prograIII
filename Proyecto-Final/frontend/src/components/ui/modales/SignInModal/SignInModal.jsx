import './SignInModal.css'
import React from 'react';

const ModalRegister = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <button>Registrarse</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalRegister;