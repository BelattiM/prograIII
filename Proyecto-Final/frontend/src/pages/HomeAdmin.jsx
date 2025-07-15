import React, { useState } from "react";

import fetchJuegos from '../hooks/fetchJuegos.js';
import fetchUsuarios from '../hooks/fetchUsuarios.js';

import ModalEditar from '../components/ui/modales/ModalEditarAdmin.jsx';
import ModalEliminar from '../components/ui/modales/ModalEliminarAdmin.jsx';
import ModalAgregar from '../components/ui/modales/ModalAgregarAdmin.jsx';

const token = localStorage.getItem('token');

function HomeAdmin() {
    // Fetch de juegos y usuarios
    const { juegos, loading: loadingJuegos, error: errorJuegos, refetch: refetchJuegos } = fetchJuegos();
    const { usuarios, loading: loadingUsuarios, error: errorUsuarios, refetch: refetchUsuarios } = fetchUsuarios();

    // Estados para controlar la visibilidad de cada modal
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false);
    const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false);
    const [modalAgregarAbierto, setModalAgregarAbierto] = useState(false);

    // Estado para saber si estamos manipulando juegos o usuarios
    const [tipoSeleccionado, setTipoSeleccionado] = useState('');

    // Función para abrir modal de editar, solo permite editar juegos en este caso
    const abrirModalEditar = (tipo) => {
        if (tipo === 'juego') {
            setTipoSeleccionado(tipo);
            setModalEditarAbierto(true);
        }
    };

    // Función para abrir modal de eliminar, para juegos o usuarios
    const abrirModalEliminar = (tipo) => {
        setTipoSeleccionado(tipo);
        setModalEliminarAbierto(true);
    };

    // Función para abrir modal de agregar, para juegos o usuarios
    const abrirModalAgregar = (tipo) => {
        setTipoSeleccionado(tipo);
        setModalAgregarAbierto(true);
    };

    // Función para cerrar todos los modales y limpiar estados relacionados
    const cerrarModales = () => {
        setModalEditarAbierto(false);
        setModalEliminarAbierto(false);
        setModalAgregarAbierto(false);
        setTipoSeleccionado('');
    };

    // Función que maneja la lógica para agregar un nuevo juego o usuario según tipo
    const handleAgregarItem = async (nuevoItem) => {
        // Definimos el endpoint según tipo: 'juegos' o 'usuarios'
        const endpoint = tipoSeleccionado === 'juego' ? 'juegos' : 'usuarios';

        try {
            let response;

            // Si es juego, hacemos POST con token en headers y los campos del juego
            if (endpoint === 'juegos') {
                response = await fetch(`http://localhost:3001/api/${endpoint}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        titulo: nuevoItem.titulo,
                        plataforma: nuevoItem.plataforma,
                        genero: nuevoItem.genero,
                        linkwiki: nuevoItem.linkwiki,
                    }),
                });
            } else {
                // Si es usuario, hacemos POST sin token (según este código) con campos de usuario
                response = await fetch(`http://localhost:3001/api/${endpoint}/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: nuevoItem.username,
                        email: nuevoItem.email,
                        password: nuevoItem.password,
                        rol: 'usuario'
                    }),
                });
            }

            // Si la respuesta no es exitosa, lanzamos error
            if (!response.ok) throw new Error('Error al agregar');

            // Mostramos alertas según el tipo y recargamos la lista correspondiente
            if (endpoint === 'usuarios') {
                alert(`Usuario ${nuevoItem.username} agregado correctamente`);
                await refetchUsuarios();
            }
            if (endpoint === 'juegos') {
                alert(`Juego ${nuevoItem.titulo} agregado correctamente`);
                await refetchJuegos();
            }
        } catch (error) {
            console.error("Error al agregar el item:", error);
        }
    };

    // Función para editar un juego (solo juegos, no usuarios)
    const handleEditarItem = async (nuevoItem) => {
        const endpoint = 'juegos';

        try {
            // Hacemos PUT a la API para editar el juego seleccionado con el token
            const response = await fetch(`http://localhost:3001/api/${endpoint}/${nuevoItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    titulo: nuevoItem.titulo,
                    plataforma: nuevoItem.plataforma,
                    genero: nuevoItem.genero,
                    linkwiki: nuevoItem.linkwiki,
                }),
            });

            if (!response.ok) throw new Error('Error al editar');

            alert(`Juego ${nuevoItem.titulo} editado correctamente`);
            await refetchJuegos();
        } catch (error) {
            console.error("Error al editar el item:", error);
        }
    };

    // Función para eliminar juego o usuario según el tipo seleccionado
    const HandleEliminarItem = async (item) => {
        const endpoint = tipoSeleccionado === 'juego' ? 'juegos' : 'usuarios';

        try {
            // Hacemos DELETE a la API con token si es juego o usuario
            const response = await fetch(`http://localhost:3001/api/${endpoint}/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Error al eliminar');

            // Mostramos alerta y recargamos lista según tipo
            if (endpoint === 'usuarios') {
                alert(`Usuario ${item.username} eliminado correctamente`);
                await refetchUsuarios();
            }
            if (endpoint === 'juegos') {
                alert(`Juego ${item.titulo} eliminado correctamente`);
                await refetchJuegos();
            }

            // Cerramos los modales tras eliminar
            cerrarModales();
        } catch (error) {
            console.error("Error al eliminar el item:", error);
        }
    };

    if (loadingJuegos || loadingUsuarios) return <div>Cargando...</div>;
    if (errorJuegos) return <div>Error al cargar los juegos: {errorJuegos}</div>;
    if (errorUsuarios) return <div>Error al cargar los usuarios: {errorUsuarios}</div>;

    return (
        <div className="home-container">
            <div className='home-overlay'></div>
            <div className="admin-container">
                <h2>Panel de Administrador</h2>

                {/* Sección usuarios con botones para agregar y eliminar */}
                <div className="admin-usuarios">
                    <h3>Usuarios</h3>
                    <div className="botones-admin">
                        <button className="boton-verde" onClick={() => abrirModalAgregar('usuario')}>Agregar Usuario</button>
                        <button className="boton-rojo" onClick={() => abrirModalEliminar('usuario')}>Eliminar Usuario</button>
                    </div>
                </div>

                {/* Sección juegos con botones para agregar, editar y eliminar */}
                <div className="admin-juegos">
                    <h3>Juegos</h3>
                    <div className="botones-admin">
                        <button className="boton-verde" onClick={() => abrirModalAgregar('juego')}>Agregar Juego</button>
                        <button className="boton-amarillo" onClick={() => abrirModalEditar('juego')}>Editar Juego</button>
                        <button className="boton-rojo" onClick={() => abrirModalEliminar('juego')}>Eliminar Juego</button>
                    </div>
                </div>
            </div>

            {/* Modal para agregar, recibe items y tipo para determinar qué se agrega */}
            <ModalAgregar
                isOpen={modalAgregarAbierto}
                onClose={cerrarModales}
                items={tipoSeleccionado === 'juego' ? juegos : usuarios}
                tipo={tipoSeleccionado}
                onAgregar={handleAgregarItem}
            />

            {/* Modal para editar solo para juegos */}
            {tipoSeleccionado === 'juego' && (
                <ModalEditar
                    isOpen={modalEditarAbierto}
                    onClose={cerrarModales}
                    items={juegos}
                    onGuardar={handleEditarItem}
                />
            )}

            {/* Modal para eliminar tanto juegos como usuarios */}
            <ModalEliminar
                isOpen={modalEliminarAbierto}
                onClose={cerrarModales}
                items={tipoSeleccionado === 'juego' ? juegos : usuarios}
                tipo={tipoSeleccionado}
                onEliminar={HandleEliminarItem}
            />
        </div>
    );
}

export default HomeAdmin;
