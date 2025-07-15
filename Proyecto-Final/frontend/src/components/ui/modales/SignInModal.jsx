import React, { useState } from 'react';

const ModalRegister = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [username, setUsername] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const resetInputs = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setErrorMsg('');
    };

    const handleClose = () => {
        resetInputs();
        onClose();
    };
    
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setErrorMsg('Todos los campos son obligatorios');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    username,
                    rol: 'usuario',
                }),
            });

            if (!response.ok) {
                setErrorMsg('Error al registrarse');
                return;
            }
            
            const data = await response.json();
            console.log('Usuario registrado:', data);
        
            setSuccessMsg('¡Registro exitoso!');
            setTimeout(() => {
                setSuccessMsg('');
                resetInputs();
                onClose();
            }, 3000);

        } catch (error) {
            console.error('Error al registrarse:', error);
            setErrorMsg(error.detalle || 'Error del servidor. Intentá más tarde.');
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Registrarse</h2>
                {successMsg !== '' ? <p className="mensaje-exito">✓ {successMsg}</p> :
                <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {errorMsg !== '' && <p className='mensaje-error'>X {errorMsg} X</p>}
                    <div className='contenedor-botones'>
                        <button className='boton-registrar' type='submit'>Registrarse</button>
                        <button className='boton-cancelar' type='button' onClick={handleClose}> Cancelar </button>
                    </div>
                </form>
                }
            </div>
        </div>
    );
};

export default ModalRegister;