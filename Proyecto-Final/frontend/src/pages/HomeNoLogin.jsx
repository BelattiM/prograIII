
import FondoDescripcion from './../assets/images/FondoDescripcion.png'
import ListaJuegosDestacados from '../components/ui/ListaJuegosDestacados/ListaJuegosDestacados';
import ListaJuegosPorGenero from '../components/ui/ListaJuegosPorGenero/ListaJuegosPorGenero';

function HomeNoLogin(){
    
    return(
        <div className='home-container'>
            <div className='home-overlay'></div>
            <div className='descripcion-pagina'>
                <img src={FondoDescripcion} alt="Fondo Gamer" />
                <span>"Gestioná tu colección de videojuegos, hacé seguimiento de tu progreso y descubrí lo que ya jugaste o te falta terminar. ¡Todo en un solo lugar! Registrate para comenzar"</span>
            </div>
            <ListaJuegosPorGenero/>
            <ListaJuegosDestacados/>
        </div>
    );
}

export default HomeNoLogin