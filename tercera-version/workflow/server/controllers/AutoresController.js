const AutoresController = {};
const axios = require('axios');

AutoresController.getAutores = (req, res) => {
    axios.get('http://localhost:3000/autores').then(resp => {    
        res.json(resp.data)    
    });
}

AutoresController.getAutor = (req, res) => {
    const autor = req.params.id
    // axios.get('http://localhost:3000/autores/',autor).then(resp => {    
    axios.get(`http://localhost:3000/autores/${autor}`)
    .then(resp => {    
        res.json(resp.data)    
    });
}

AutoresController.postAutor = (req, res) => {
    const {nombre,apellido,descripcion,edad} = req.body
    axios.post('http://localhost:3000/autores', {nombre,apellido,descripcion,edad})
    .then(resp => {      
        res.json({
            'status': "Autor Registrado"
        });
    });
}

AutoresController.deleteAutor = (req, res) => {
    const autor = req.params.id
    axios.delete(`http://localhost:3000/autores/${autor}`)
    .then(resp => {    
        res.json(resp.data)        
    });
}

AutoresController.putAutor = (req, res) => {
    const {nombre,apellido,descripcion,edad} = req.body
    axios.put(`http://localhost:3000/autores/${req.params.id}` ,{
        nombre,apellido,descripcion,edad
    })
    .then(resp => {    
        res.json({
            'status': 'Datos del autor editados'
        });        
    })
    .catch(err =>{
       console.error(err)
    });
}


module.exports = AutoresController;
