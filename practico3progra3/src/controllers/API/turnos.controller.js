const {getTurnosPaciente} = require('../../services/turno.service.js');
const {cancelarTurno} = require('../../services/turno.service.js');


///CONSULTAS TURNOS POR IDENTIFICADOR
const getTurnosForIdPaciente = async (req, res) =>{
    try {

        const idPaciente = req.params.idPaciente;
        if (isNaN(idPaciente)) {
            res.status(400).send("El id debe ser un numero");
        }
        else{
            const turnos = await getTurnosPaciente(idPaciente);
            res.status(200).json(turnos);
        }
    } catch (error) {
        res.status(400).send("Ocurrio un error en turnos.controller");  
    }

} 

/// CANCELAR UN TURNO
const deleteTurnoForIdTurno = async (req, res) =>{
    try {
        const idTurno = req.items.idTurno;
        if (isNaN(idTurno)) {
            res.status(400).send("El id debe ser un numero");
        }
        else if(await cancelarTurno(idTurno)){
            res.status(200).send('Turno cancelado con exito');
        }else{
            res.status(400).send('El turno no pudo ser cancelado');
        }
    } catch (error) {
        
    }
}


module.exports = {
    getTurnosForIdPaciente,
    deleteTurnoForIdTurno
}



/// OBLIGATORIO


