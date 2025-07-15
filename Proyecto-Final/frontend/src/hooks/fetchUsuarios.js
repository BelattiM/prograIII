import { useState, useEffect } from 'react';

function useFetchUsuarios() {    
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsuarios = async () =>{ 
        try {
            const response = await fetch('http://localhost:3001/api/usuarios/');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUsuarios(data.usuarios);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUsuarios();
    }, [])
    return { usuarios, loading, error, refetch: fetchUsuarios };
}

export default useFetchUsuarios;