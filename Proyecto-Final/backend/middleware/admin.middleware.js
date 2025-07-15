function soloAdmin(req, res, next) {
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado. Solo admin.' });
    }
    next();
}

module.exports = soloAdmin;