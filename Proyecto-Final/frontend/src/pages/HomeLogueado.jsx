import { Link } from 'react-router-dom';
import ListaJuegosDisponibles from '../components/ui/ListaJuegosDisponibles'
import ListaJuegosPorGenero from '../components/ui/ListaJuegosPorGenero'

function HomeLogueado(){
    return(
        <div className='home-container'>
            <div className='home-overlay'></div>
            <Link to="/coleccion" className='boton-coleccion'>Explora tu Coleccion</Link>
            <ListaJuegosDisponibles/>
            <ListaJuegosPorGenero/>
        </div>
    )
}

export default HomeLogueado