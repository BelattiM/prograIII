const {Usuario} = require('./../models/index.js')
const {loginJWT} = require('./auth.controller.js')
const bcrypt = require('bcryptjs')

class UsuariosController {
    async login(req, res){
        const {email, password} = req.body;
        try{
            const usuario = await Usuario.findOne({ where: {email}})
            if (!usuario) {
                return res.status(401).json({ mensaje: 'Email incorrecto' });
            }

            const passwordValida = await bcrypt.compare(password, usuario.password);
            if (!passwordValida) {
                return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
            }

            const token = await loginJWT(email, password);
            if (token) {
                res.status(200).json({usuario, token})
            }else{
                res.status(400).json({message: "Credenciales invalidas"})
            }
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    } 

    async crear(req, res) {
        try{
            const {username, email, password, rol} = req.body;

            if (!username || !email || !password || !rol) {
                return res.status(400).json({ detalle: 'Todos los campos son obligatorios' });
            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const userNuevo = await Usuario.create({username, email, password: hashedPassword, rol});
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
        await UsuarioBorrar.destroy();
        res.status(200).json({mensaje: "Usuario eliminado", registroEliminado: UsuarioBorrar});
    }
    async actualizar(req, res){
        try{
            const id = req.params.id;
            const UsuarioActualizar = await Usuario.findByPk(id);
            if (!UsuarioActualizar){
                return res.status(404).json({mensaje: `No se encontro un Usuario con id ${id}`});
            }
            const {username, email, password} = req.body;
            const actualizado = await UsuarioActualizar.update({username, email, password})
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