const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

//creamos nuestro servidor
const app = express();

//enlazamos la conexion con la base de datos

conectarBD();
app.use(cors());

app.use(express.json());
//definir ruta principal del proyecto
app.use('/api/clientes', require ('../routes/rutas'));
app.use('/api/proveedores', require ('../routes/rutasprov'));


//ruta para verificar el servidor 
app.get('/', (req, res) => {
    res.send('Hola mundo de la web');
});


//se define una constante para el puerto que tendra configuracion 
//local o en la nube del puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor corriendo http://localhost:3000');
});





