const {Router} = require ('express');
const { usuariosGet, usuarioPut, usuarioPost, usuarioDelete } = require('../controllers/usuarios');

const router = Router();





Router.get('/', usuariosGet); 

Router.put('/', usuarioPut);

Router.post('/',  usuarioPost)

Router.delete('/',usuarioDelete)

module.exports = Router();