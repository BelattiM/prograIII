import React, { useState } from 'react';

const ModalContacto = ({ isOpen, onClose }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const resetForm = () => {
        setNombre('');
        setEmail('');
        setMensaje('');
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !email || !mensaje) {
            setErrorMsg('Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, mensaje }),
            });

            if (!response.ok) {
                setErrorMsg('No se pudo enviar el mensaje. Intente más tarde.');
                return;
            }

            setSuccessMsg('Mensaje enviado con éxito');
            resetForm();
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setErrorMsg('Error del servidor. Intente más tarde.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows="4" />
                    {errorMsg && <p className="mensaje-error">X {errorMsg} X</p>}
                    {successMsg && <p className="mensaje-exito">{successMsg}</p>}
                    <div className="contenedor-botones">
                        <button className="boton-verde" type="submit">Enviar</button>
                        <button className="boton-rojo" type="button" onClick={handleClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalContacto;
