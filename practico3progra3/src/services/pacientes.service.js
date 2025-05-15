const {getPaciente} = require('../models/sqlite/paciente.model.js')

const borrarPaciente = async(idPaciente)=>{
    const paciente = getPaciente(idPaciente);
    if (paciente) {
        
    }
    //verificar que el id exista ==> llamar a funcion del model que verifique que existe
    //si el id existe verificar que no tenga ningun turno pendiente
    // si estas dos condicienes se cumplen eliminar paciente (en model)
}
module.exports =  borrarPaciente