import { useState, useEffect } from 'react';

function useFetchJuegos() {
    const [juegos, setJuegos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJuegos = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/juegos');
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setJuegos(data.juegos || []);
        } catch (err) {
            console.error('Error al obtener los juegos:', err);
            setJuegos([]);
            setError(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJuegos();
    }, []);

    return { juegos, loading, error, refetch: fetchJuegos };
}

export default useFetchJuegos;
