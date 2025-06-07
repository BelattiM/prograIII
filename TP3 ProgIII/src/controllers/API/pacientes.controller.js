const pacientesModel = require('./../../models/sqlite/paciente.model.js')

class PacientesController {
    async list(req, res) {
        const pacientes = await pacientesModel.listar();
        if (!pacientes) {
            res.status(404).json({message: "No hay pacientes cargados"});
        }
        res.status(200).json(pacientes);
    }
    async create(req, res) {
        const {dni,nombre,apellido,email,password} = req.body;
        const paciente = await pacientesModel.crear({dni,nombre,apellido,email,password});
        if (!paciente){
            return res.status(400).json({message: "Error al crear el paciente"})
        }
        res.status(200).json({message: "Paciente creado correctamente", paciente})
    }
    async delete(req, res) {
        const id = req.params.id;
        const borrado = await pacientesModel.borrar(id);
        if (borrado === null){
            res.status(404).json({message: "Paciente no encontrado"});
        }
        res.status(200).json({message: "Paciente eliminado", borrado});
    }
    async update(req, res) {
        const id = req.params.id;
        const {dni,nombre,apellido,email,password} = req.body;
        actualizado = await pacientesModel.actualizar(id,{dni,nombre,apellido,email,password});
        if (actualizado === null){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json({message:"Paciente actualizado"});
    }
    async getById(req, res){
        const id = req.params.id;
        const paciente = await pacientesModel.buscarPorId(id);
        if (paciente === null){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json({message: "Paciente encontrado", paciente})
    }
}

module.exports = new PacientesController();




