import './LogInModal.css'
import React, {useState} from 'react';

const ModalLogin = ({ isOpen, onClose, onLoginSuccess}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const LoginHandler = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                setErrorMsg('Credenciales inválidas');
                return;
            }

            const data = await response.json();

            const { token, user } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            onLoginSuccess();

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorMsg('Error del servidor. Intentá más tarde.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Iniciar Sesión</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errorMsg !== '' && <p style={{ color: 'red' }}>{errorMsg}</p>}
                <button onClick={LoginHandler}>Ingresar</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalLogin;