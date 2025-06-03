const turnoModel = require('./../../models/sqlite/turno.model.js');

class turnosController{
    async list(req,res) {
        res.status(200).json(await turnoModel.listar())
    } 
    async create (req,res){
        const {id_paciente, estado, hora, fecha} = req.body;
        await turnoModel.crear({id_paciente, estado, hora, fecha});
        res.redirect('turnos/turnoCreado')
    }
    async delete (req,res){
        const id = req.params.id;
        const borrado = await turnoModel.borrar(id);
        if (borrado === null){
            return res.status(404).json({ message: "Turno no encontrado" });
        }
        res.status(200).json({message:"Turno eliminado"});
    }
    async update(req, res) {
        const id = req.params.id;
        const {id_turno, estado, hora} = req.body;
        actualizado = await turnoModel.actualizar(id,{id_turno, estado, hora});
        if (actualizado === null){
            return res.status(404).json({ message: "Turno no encontrado" });
        }
        res.status(200).json({message:"Turno actualizado"});
    }
    async getByIdPaciente(req,res){
        const id_paciente = req.params.id_paciente;
        const encontrados = await turnoModel.buscarPorIdPaciente(id_paciente);
        if (encontrados === null || encontrados.length === 0) {
            return res.status(404).json({ message: "Turnos no encontrados" });
        } 
        res.status(200).render('turnosPaciente', {encontrados, title: "Turnos del paciente" });
    }
    turnoCreado(req,res){
        res.render('turnoCreado', {title: "Turno creado"});
    }
}

module.exports = new turnosController()