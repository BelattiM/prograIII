import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const ModalLogin = ({ isOpen, onClose, onLoginSuccess, setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const resetInputs = () => {
        setEmail('');
        setPassword('');
        setErrorMsg('');
    };

    const handleClose = () => {
        resetInputs();
        onClose();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMsg('Todos los campos son obligatorios');
            return;
        }
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
            const { token, usuario } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(usuario));
            setUser(usuario);
            if (usuario.rol === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
            resetInputs();
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
                <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {errorMsg !== '' && <p className='mensaje-error'>X {errorMsg} X</p>}
                    <div className='contenedor-botones'>
                        <button className='boton-verde' type="submit">Ingresar</button>
                        <button className='boton-rojo' type="button" onClick={handleClose}>Cancelar</button>  
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;