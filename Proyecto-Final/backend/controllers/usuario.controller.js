const {Usuario} = require('./../models/index.js')

class UsuariosController {
    async crear(req, res) {
        try{
            const {username, email, password} = req.body;
            const userNuevo = await Usuario.create({username, email, password});
            res.status(200).json({mensaje: "Usuario creado correctamente.", userNuevo})
        }
        catch (error){
            res.status(500).json({error: "Error al crear el usuario."})
        }
    }
    async listar(req, res){
        const usuarios = await Usuario.findAll();
        if (!usuarios){
            res.status(404).json({mensaje: "No se encontraron usuarios."})
        }
        res.status(200).json({mensaje: "Usuarios encontrados", usuarios})
    }
    async borrar(req, res){
        const id = req.params.id;
        const UsuarioBorrar = await Usuario.findByPk(id);
        if (!UsuarioBorrar){
            return res.status(404).json({mensaje: `No se encontro un usuario con id ${id}`});
        }
        const borrado = await UsuarioBorrar.destroy();
        res.status(200).json({mensaje: "Usuario eliminado", borrado});
    }
    async actualizar(req, res){
        try{
            const id = req.params.id;
            const UsuarioActualizar = await Usuario.findByPk(id);
            if (!UsuarioActualizar){
                return res.status(404).json({mensaje: `No se encontro un Usuario con id ${id}`});
            }
            const {titulo, plataforma, genero} = req.body;
            const actualizado = await UsuarioActualizar.update({titulo, plataforma, genero})
            res.status(200).json({message:"Usuario actualizado", actualizado});
        } 
        catch (error){
            res.status(500).json({error: "Error al actualizar el Usuario."});
        }
    }
    async getById(req, res){
        const id = req.params.id;
        const encontrado = await Usuario.findByPk(id);
        if (!encontrado){
            return res.status(404).json({mensaje: `No se encontro un Usuario con id ${id}`});
        }
        res.status(200).json({message:"Usuario encontrado", encontrado});
    }
}

module.exports = new UsuariosController();