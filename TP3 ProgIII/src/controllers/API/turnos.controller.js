const turnoModel = require('./../../models/sqlite/turno.model.js');
const pacienteModel = require('./../../models/sqlite/paciente.model.js');

class turnosController{
    async list(req,res) {
        const turnos = await turnoModel.listar();
        if (!turnos) {
            res.status(404).json({message: "No hay turnos cargados"});
        }
        res.status(200).json(turnos);
    } 
    async create (req,res){
        const {id_paciente, estado, hora, fecha} = req.body;
        const turno = await turnoModel.crear({id_paciente, estado, hora, fecha});
        if (!turno){
            return res.status(400).json({message: "Error al crear el turno"})
        }
        res.status(200).json({message: "Turno creado correctamente", turno})
    }
    async delete (req,res){
        const id = req.params.id;
        const borrado = await turnoModel.borrar(id);
        if (borrado === null){
            res.status(404).json({ message: "Turno no encontrado" });
        }
        res.status(200).json({ message: "Turno eliminado", redireccion: '/api/v1/turnos/turnoEliminado' });
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
    async getByIdPaciente(req, res){
        const id_paciente = req.params.id_paciente;
        const paciente = await pacienteModel.buscarPorId(id_paciente);
        if (paciente === null || !paciente){
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        const turnos = await turnoModel.buscarPorIdPaciente(id_paciente);
        if (turnos === null || turnos.length === 0){
            return res.status(404).json({ message: "El paciente no tiene turnos" });
        }
        res.status(200).json({message: "Turno/s encontrado/s", turnos})
        res.locals.turnos = turnos;
    }
}

module.exports = new turnosController()