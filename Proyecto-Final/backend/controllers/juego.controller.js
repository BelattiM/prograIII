const {Juego} = require('./../models/index.js')

class JuegosController {
    async crear(req, res) {
        try{
            const {titulo, plataforma, genero} = req.body;
            const juegoNuevo = await Juego.create({titulo, plataforma, genero});
            res.status(200).json({mensaje: "Juego creado correctamente.", juegoNuevo});
        }
        catch (error){
            res.status(500).json({error: "Error al crear el juego."});
        }
    }
    async listar(req, res){
        const juegos = await Juego.findAll();
        if (!juegos){
            return res.status(404).json({mensaje: "No se encontraron Juegos."});
        }
        res.status(200).json({juegos});
    }
    async borrar(req, res){
        const id = req.params.id;
        const juegoBorrar = await Juego.findByPk(id);
        if (!juegoBorrar){
            return res.status(404).json({mensaje: `No se encontro un juego con id ${id}`});
        }
        await juegoBorrar.destroy();
        res.status(200).json({mensaje: "Juego eliminado", registroEliminado: juegoBorrar});
    }
    async actualizar(req, res){
        try{
            const id = req.params.id;
            const juegoActualizar = await Juego.findByPk(id);
            if (!juegoActualizar){
                return res.status(404).json({mensaje: `No se encontro un juego con id ${id}`});
            }
            const {titulo, plataforma, genero} = req.body;
            const actualizado = await juegoActualizar.update({titulo, plataforma, genero})
            res.status(200).json({message:"Juego actualizado", actualizado});
        } 
        catch (error){
            res.status(500).json({error: "Error al actualizar el juego."});
        }
    }
    async getById(req, res){
        const id = req.params.id;
        const encontrado = await Juego.findByPk(id);
        if (!encontrado){
            return res.status(404).json({mensaje: `No se encontro un juego con id ${id}`});
        }
        res.status(200).json({message:"Juego encontrado", encontrado});
    }
};

module.exports = new JuegosController();