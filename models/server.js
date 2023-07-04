const express = require('express')

class Server{

constructor(){
    this.app = express();
    this.routes();
    this.Middlewares();
}

//middlewares
Middlewares (){
    this.app.use(express.static('public'))

}

//rutas de mi aplicacion
routes(){
    this.app.get('/',  (req, res)=> {
        res.send('Hello World')
      })
}

listen(){
    this.app.listen(process.env.PORT, () => {
        console.log('Servidor corriendo en', process.env.PORT);
    });
}



}

module.exports = Server;