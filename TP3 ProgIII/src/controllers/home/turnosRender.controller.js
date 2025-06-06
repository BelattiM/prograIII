const turnoModel = require('./../../models/sqlite/turno.model')
const pacienteModel = require('./../../models/sqlite/paciente.model')

class turnosRender{
    async turnoCreado(req, res){
        try{
            const turno = await turnoModel.crear(req.body);
            res.status(200).render('turnoCreado', {title: "Turno creado", turno})
        }catch(error){
            const errores = []
            errores.push(error.message)
            res.status(400).render('errores', {title: "Errores", errores})
        }
    }
    async turnoEliminado(req, res){
        await turnoModel.borrar(req.params.id)
        res.status(200).json({redireccion: '/turnoEliminado'})
    }
    turnoEliminadoRender(req, res){
        res.status(200).render('turnoEliminado', {title:'Turno eliminado'})
    }
    turnoError(req, res, errores){
        res.status(400).render('errores', {title: "Errores", errores})
    }
    async turnosPaciente(req, res){
        const id_paciente = req.params.id;
        const paciente = await pacienteModel.buscarPorId(id_paciente);
        if (paciente === null || !paciente){
            const errores = []
            errores.push('Paciente no encontrado')
            return res.status(404).render('errores', {title: "Errores", errores})
        }
        const turnos = await turnoModel.buscarPorIdPaciente(id_paciente);
        res.status(200).render('turnosPaciente', {turnos, title: "Turnos del paciente"})
    }
}

module.exports = new turnosRender();