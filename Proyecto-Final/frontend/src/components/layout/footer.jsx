
function Footer({ onShowContacto, onShowInfo, onShowImagen}) {
    return (
        <div className='Footer'>
            <span onClick={onShowImagen} className="contacto-link">© TUP Gaming 2025</span>
            <span onClick={onShowContacto} className="contacto-link">Contactanos</span>
            <span onClick={onShowInfo} className="contacto-link">Acerca del proyecto</span>
        </div>
    );
}

export default Footer;
