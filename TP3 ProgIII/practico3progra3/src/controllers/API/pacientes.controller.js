const pacientesModel = require('./../../models/sqlite/paciente.model.js')

class PacientesController {
    async list(req, res) {
        res.status(200).json(await pacientesModel.listar());
    }
    async create(req, res) {
        const {dni,nombre,apellido,email} = req.body;
        const info = await pacientesModel.crear({dni,nombre,apellido,email});
        // res.status(200).json(info);
        res.redirect('pacientes/pacienteCreado')
    }
    async delete(req, res) {
        const id = req.params.id;
        const borrado = await pacientesModel.borrar(id);
        if (borrado === null){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json({ redireccion: '/api/v1/pacientes/pacienteEliminado' });
    }
    async update(req, res) {
        const id = req.params.id;
        const {dni,nombre,apellido,email} = req.body;
        actualizado = await pacientesModel.actualizar(id,{dni,nombre,apellido,email});
        if (actualizado === null){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json({message:"Paciente actualizado"});
    }
    async getById(req, res){
        const id = req.params.id;
        const encontrado = await pacientesModel.buscarPorId(id);
        if (encontrado === null){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json({message: "Paciente encontrado"})
    }
    pacienteCreado(req,res){
        res.render('pacienteCreado',{title: "Paciente creado"});
    }
    pacienteEliminado(req,res){
        res.render('pacienteEliminado',{title: "Paciente eliminado"});
    }
}

module.exports = new PacientesController();




