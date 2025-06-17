const express = require('express');
const app = express();
const cors = require('cors');
const rutasPersonas = require('./routes/personas.routes');

app.use(cors());
app.use(express.json());
app.use('/', rutasPersonas);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
