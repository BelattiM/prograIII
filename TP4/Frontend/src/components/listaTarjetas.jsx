import TarjetaPersona from './tarjetaPersona';
import './../css/components.css';

const ListaTarjetas = ({ personas }) => {
    return (
        <div className='listaTarjetas'>
            {personas.map(p => (
                <TarjetaPersona key={p.id} persona={p} />
            ))}
        </div>
    );
};

export default ListaTarjetas;
