const express = require('express')
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.Middlewares();
        this.routes();
    }


//middlewares
Middlewares (){
    this.app.use(express.static('public'))
    this.app.use(cors())
}

//rutas de mi aplicacion
routes(){
    this.app.use('/api/usuarios' , require('../routes/user'));

    }
listen(){
    this.app.listen(process.env.PORT, () => {
        console.log('Servidor corriendo en', process.env.PORT);
    });
}



}

module.exports = Server;