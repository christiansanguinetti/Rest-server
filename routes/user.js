const {Router} = require ('express');

const Router = Router();





Router.get('/',  (req, res)=> {
    res.json({msg : 'get API '})
  })

Router.put('/',  (req, res)=> {
    res.status(500).json({msg : 'put API '})
  })


Router.post('/',  (req, res)=> {
    res.status(201).json({msg : 'post API '})
  })


Router.delete('/',  (req, res)=> {
    res.json({msg : 'delete API '})
  })


module.exports = Router();