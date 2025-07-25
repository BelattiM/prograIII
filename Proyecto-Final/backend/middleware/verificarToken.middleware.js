const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ mensaje: 'Token no enviado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ mensaje: 'Token inválido', err: error.message });
    }
}

module.exports = verificarToken;