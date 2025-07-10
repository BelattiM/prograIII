import './header.css'
import mainLogo from './../../../assets/icons/MainLogo.jpg'
import { useNavigate } from 'react-router-dom';

function Header({ onShowLogin, onShowSignin, logueado, user, onLogout }){
    const navigate = useNavigate();
    return (
        <div className='containerHeader'>
            <div className='subContainer1'>
                <img src={mainLogo} alt="TUP Gaming"/>
                <h1> TUP Gaming</h1>
            </div>
            {logueado ? 
            <div className='subContainer2'>
                <span style={{cursor:'pointer'}} onClick={() => navigate('/')}>{user?.username || 'Usuario'}</span>
                <span style={{cursor:'pointer'}} onClick={() => { onLogout(); navigate('/'); }}>Cerrar Sesion</span>
            </div> : 
            <div className='subContainer2'>
                <span onClick={onShowLogin}>Iniciar Sesion</span>
                <span onClick={onShowSignin}>Registrate </span>
            </div>}
        </div>
    );
}

export default Header;