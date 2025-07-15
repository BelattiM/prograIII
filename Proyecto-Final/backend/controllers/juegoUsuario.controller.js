const {JuegoUsuario} = require('./../models/index.js')

class JuegoUsuariosController {
    async crear(req, res) {
        try{
            const {usuario_id, juego_id, estado, calificacion, tiempoDeJuego} = req.body;
            const gameUserNuevo = await JuegoUsuario.create({usuario_id, juego_id, estado, calificacion, tiempoDeJuego});
            res.status(200).json({mensaje: "Relacion usuario-juego creada correctamente.", gameUserNuevo})
        }
        catch (error){
            res.status(500).json({error: "Error al crear la relacion juego-usuario."})
        }
    }
    async listar(req, res){
        const JuegoUsuarios = await JuegoUsuario.findAll();
        if (!JuegoUsuarios){
            res.status(404).json({mensaje: "No se encontraron relaciones usuario-juego."})
        }
        res.status(200).json({mensaje: "Relaciones usuario-juego encontradas", JuegoUsuarios})
    }
    async borrar(req, res){
        const { usuario_id, juego_id } = req.params;
        const gameUserBorrar = await JuegoUsuario.findOne({
            where: {
                usuario_id: usuario_id,
                juego_id: juego_id
            }
        });
        if (!gameUserBorrar){
            return res.status(404).json({mensaje: `No se encontró una relación entre el usuario ${usuario_id} y el juego ${juego_id}`});
        }
        await gameUserBorrar.destroy();
        res.status(200).json({mensaje: `Relación usuario-juego eliminada`,registroEliminado: gameUserBorrar});
    }
    async actualizar(req, res){
        try{
            const { usuario_id, juego_id } = req.params;
            const gameUserActualizar = await JuegoUsuario.findOne({
                where: {
                    usuario_id: usuario_id,
                    juego_id: juego_id
                }
            });
            if (!gameUserActualizar){
                return res.status(404).json({mensaje: `No se encontró una relación entre el usuario ${usuario_id} y el juego ${juego_id}`});
            }
            const { estado, calificacion, tiempoDeJuego } = req.body;
            const actualizado = await gameUserActualizar.update({usuario_id, juego_id, estado, calificacion, tiempoDeJuego})
            res.status(200).json({message:"Relación usuario-juego actualizado", actualizado});
        } 
        catch (error){
            res.status(500).json({error: "Error al actualizar la relacion juego-usuario."});
        }
    }
    async getByIdJuego(req, res){
        const juego_id = req.params.juego_id;
        const encontrados = await JuegoUsuario.findAll({
            where: {
                juego_id: juego_id,
            }
        });
        if (!encontrados){
            return res.status(404).json({mensaje: `No se encontraron usuarios relacionados con el juego con id ${id}`});
        }
        res.status(200).json({message:"Relaciones usuario-juego encontradas", encontrados});
    }
    async getByIdUsuario(req, res){
        const usuario_id = req.params.usuario_id;
        const encontrados = await JuegoUsuario.findAll({
            where: {
                usuario_id: usuario_id,
            }
        });
        if (!encontrados){
            return res.status(404).json({mensaje: `No se encontraron juegos relacionados con el usuario con id ${id}`});
        }
        res.status(200).json({message:"Relaciones usuario-juego encontradas", encontrados});
    }
}

module.exports = new JuegoUsuariosController();