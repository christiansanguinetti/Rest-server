const {response} = require ('express');
 const {usuarioDelete,usuarioPost,usuarioPut,usuarioDelete} = require('../controllers/usuarios'); 
const usuariosGet = (req, res)=> {
    res.json({msg : 'get API - Controlador'})
  } 

  const usuarioPut = (req, res)=> {
    res.json({msg : 'put API - usuario PUT'})
  }
  const usuarioPost =  (req, res)=> {
    res.json({msg : 'post API - usuario POST '})
  }
  const usuarioDelete =(req, res)=> {
    res.json({msg : 'delete API - usuario DELETE '})
  }


module.exports = {usuariosGet, 
                   usuarioPut,
                   usuarioPost,
                   usuarioDelete
                 } 
