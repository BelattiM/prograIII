const {Router} = require('express');
const router = Router();

// Ruta de prueba
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta de ejemplo
router.get('/test', (req, res) => {
  res.json({
    message: 'Endpoint de prueba',
    data: {
      backend: 'Express',
      database: 'PostgreSQL',
      orm: 'Sequelize'
    }
  });
});

const rutaJuegos = require('./juego.routes.js');
const rutaUsuarios = require('./usuario.routes.js');
const rutaJuegoUsuario = require('./juegoUsuario.routes.js');

router.use('/juegos', rutaJuegos);
router.use('/usuarios', rutaUsuarios);
router.use('/juegos-usuarios', rutaJuegoUsuario);

module.exports = router;
