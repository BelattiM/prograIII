import { useState, useEffect } from 'react';

function useFetchJuegos() {    
    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchJuegos = async () =>{ 
            try {
                const response = await fetch('http://localhost:3001/api/juegos/');

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setJuegos(data.juegos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchJuegos();
    }, [])
    return { juegos, loading, error };
}

export default useFetchJuegos;