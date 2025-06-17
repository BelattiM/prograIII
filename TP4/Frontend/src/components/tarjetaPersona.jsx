import './../css/components.css';

const TarjetaPersona = ({ persona }) => {
    return (
        <div className="tarjetaPersona">
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p>Edad: {persona.edad}</p>
            <p>Email: {persona.email}</p>
        </div>
    );
};

export default TarjetaPersona;
