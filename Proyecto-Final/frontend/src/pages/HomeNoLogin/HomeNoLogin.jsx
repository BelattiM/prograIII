import './HomeNoLogin.css'
import FondoDescripcion from './../../assets/images/FondoDescripcion.png'
import FondoHome from './../../assets/images/FondoHome.png'
import ListaJuegosDestacados from '../../components/ui/ListaJuegosDestacados/ListaJuegosDestacados';
import ListaJuegosPorGenero from '../../components/ui/ListaJuegosPorGenero/ListaJuegosPorGenero';

const style = {
    backgroundImage: `url(${FondoHome})`,
    backgroundRepeat: 'repeat',
};

function HomeNoLogin(){
    
    return(
        <div className='HomeNoLogin' style={style}>
            <div className='homeOverlay'></div>
            <div className='descripcionPagina'>
                <img src={FondoDescripcion} alt="Fondo Gamer" />
                <span>"Gestioná tu colección de videojuegos, hacé seguimiento de tu progreso y descubrí lo que ya jugaste o te falta terminar. ¡Todo en un solo lugar! Registrate para comenzar"</span>
                <button>
                    Registrate
                </button>
            </div>
            <ListaJuegosPorGenero/>
            <ListaJuegosDestacados/>
        </div>
    );
}

export default HomeNoLogin