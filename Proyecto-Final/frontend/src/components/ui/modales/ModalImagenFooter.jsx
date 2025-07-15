import React from 'react';

const ModalImagen = ({ isOpen, onClose, src, alt }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal" style={{ alignItems: 'center' }}>
                <h2>{alt}</h2>
                <img 
                    src={src} 
                    alt={alt} 
                    style={{ 
                        maxWidth: '100%', 
                        maxHeight: '60vh', 
                        objectFit: 'contain',
                        border: '3px solid #ffff00',
                        borderRadius: '12px',
                        boxShadow: '0 0 12px #ffff00'
                    }} 
                />
                <div className="contenedor-botones">
                    <button className='boton-rojo' onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalImagen;
