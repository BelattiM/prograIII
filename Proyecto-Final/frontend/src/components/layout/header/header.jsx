import './header.css'
import mainLogo from './../../../assets/icons/MainLogo.jpg'

function Header(){
    return (
        <div className='containerHeader'>
            <div className='subContainer1'>
                <img src={mainLogo} alt="TUP Gaming"/>
                <h1> TUP Gaming</h1>
            </div>
            <div className='subContainer2'>
                <span>Iniciar Sesion</span>
                <span>Registrate </span>
            </div>
        </div>
    );
}

export default Header;