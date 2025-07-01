const {Usuario} = require('./../models/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginJWT = async (email, password) => {
    const usuario = await Usuario.findOne({ where: { email } });
    console.log(usuario.password);
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
        throw new Error("Credenciales invalidas")
    }

    const token = jwt.sign(
        { id: usuario.id, rol: usuario.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
    return token;
};

module.exports = { loginJWT }