import './header.css'
import mainLogo from './../../../assets/icons/MainLogo.jpg'

function Header({ onShowLogin, onShowSignin, logueado }){
    return (
        <div className='containerHeader'>
            <div className='subContainer1'>
                <img src={mainLogo} alt="TUP Gaming"/>
                <h1> TUP Gaming</h1>
            </div>
            {logueado ? 
            <div className='subContainer2'>
                <span>Mi Colleccion</span>
                <span>Usuario.nombre</span>
            </div> : 
            <div className='subContainer2'>
                <span onClick={onShowLogin}>Iniciar Sesion</span>
                <span onClick={onShowSignin}>Registrate </span>
            </div>}
        </div>
    );
}

export default Header;