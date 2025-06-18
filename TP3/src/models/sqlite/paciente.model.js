
const {Paciente} = require('../sqlite/entities/paciente.entity.js');

const listar = async() =>{
  return await Paciente.findAll();
}

const crear = (pacienteData) =>{
  return Paciente.create(pacienteData);
}

const borrar = async(id) =>{
  const paciente = await Paciente.findByPk(id);
  if (!paciente) return null;
  return await paciente.destroy();
}

const actualizar = async(id, paciente) =>{
  const pacienActualizar = await Paciente.findByPk(id);
  if (!pacienActualizar) return null;
  return await pacienActualizar.update(paciente)
}

const buscarPorId = async(id) =>{
  const paciente = await Paciente.findByPk(id);
  if (!paciente) return null;
  return paciente;
}

const buscarPorDNI = async(dni) =>{
  const paciente = await Paciente.findOne({where: {dni}});
  if (!paciente) return null;
  return  paciente;
}

const buscarPorEmail = async(email) =>{
  const paciente = await Paciente.findOne({where: {email}});
  if (!paciente) return null;
  return paciente;
}

  module.exports = {
    listar,
    crear,
    borrar,
    actualizar,
    buscarPorId,
    buscarPorDNI,
    buscarPorEmail
  };
