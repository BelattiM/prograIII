import mainLogo from './../../assets/icons/MainLogo.jpg'
import { useNavigate } from 'react-router-dom';


function Header({ onShowLogin, onShowSignin, logueado, user, onLogout }){
    const navigate = useNavigate();

    const userRol = user?.rol || '';
    return (
        <div className='containerHeader'>
            <div className='subContainer1' onClick={() => navigate('/')}>
                <img src={mainLogo} alt="TUP Gaming"/>
                <h1> TUP Gaming</h1>
            </div>
            {logueado ? 
            <div className='subContainer2'>
                {userRol === 'admin' && 
                    <span onClick={() => navigate('/admin')}>Panel de Administracion</span>
                }
                <span onClick={() => navigate('/coleccion')}>Coleccion de {user?.username || 'Usuario'}</span>
                <span onClick={() => { onLogout(); navigate('/'); }}>Cerrar Sesion</span>
            </div> : 
            <div className='subContainer2'>
                <span onClick={onShowLogin}>Iniciar Sesion </span>
                <span onClick={onShowSignin}>Registrate </span>
            </div>}
        </div>
    );
}

export default Header;