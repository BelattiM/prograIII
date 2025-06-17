import { useEffect, useState } from 'react';
import axios from 'axios';
import ListaTarjetas from './listaTarjetas';

const TraerPersonas = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/personas')
            .then(res => setPersonas(res.data))
            .catch(err => console.error(err));
    }, []);

    return <ListaTarjetas personas={personas} />;
};

export default TraerPersonas;
