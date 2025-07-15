import { useState, useEffect } from 'react';

function useFetchJuegoUsuarioByIdUsuario(usuario_id) {    
    const [relaciones, setRelaciones] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRelaciones = async () =>{ 
        try {
            const response = await fetch(`http://localhost:3001/api/juegos-usuarios/usuario/${usuario_id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRelaciones(data.encontrados);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if (!usuario_id) {
            setRelaciones([]);
            setLoading(false);
            setError('No se proporcionó usuario_id');
            return;
        }
        fetchRelaciones();
    }, [usuario_id])
    return { relaciones, loading, error, refetch: fetchRelaciones };
}

export default useFetchJuegoUsuarioByIdUsuario;