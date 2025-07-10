import { Link } from 'react-router-dom';
import ListaJuegosDestacados from '../../components/ui/ListaJuegosDestacados/ListaJuegosDestacados'
import ListaJuegosPorGenero from '../../components/ui/ListaJuegosPorGenero/ListaJuegosPorGenero'
import './../../index.css'

function HomeLogueado(){
    return(
        <div className='home-container'>
            <div className='home-overlay'></div>
            <Link to="/coleccion" className='boton-coleccion'>Explora tu Coleccion</Link>
            <ListaJuegosDestacados/>
            <ListaJuegosPorGenero/>
        </div>
    )
}

export default HomeLogueado