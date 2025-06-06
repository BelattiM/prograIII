const pacientesModel = require('./../../models/sqlite/paciente.model.js')

class pacienteRender {
    async pacienteCreado(req, res){
        try{
            const paciente = await pacientesModel.crear(req.body)
            res.status(200).render('pacienteCreado', {title: "Paciente creado", paciente})
        } catch(error){
            const errores = []
            errores.push(error.message)
            res.status(400).render('errores', {title: "Errores", errores})
        }
    }
    async pacienteEliminado(req, res){
        const borrado = await pacientesModel.borrar(req.params.id)
        if (borrado === null){
            res.status(400).json({ redireccion: '/pacienteNotFound' })
        }else{
            res.status(200).json({ redireccion: '/pacienteEliminado' })
        }
    }
    pacienteEliminadoRender(req, res){
        res.status(200).render('pacienteEliminado', {title:'Paciente eliminado'})
    }
    pacienteNotFound(req, res){
        res.status(404).render('pacienteNotFound', {title: "Paciente no encontrado"})
    }
    pacienteError(req, res, errores){
        res.status(400).render('errores', {title: "Errores", errores})
    }
}

module.exports = new pacienteRender();