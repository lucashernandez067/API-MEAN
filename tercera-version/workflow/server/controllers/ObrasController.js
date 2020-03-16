const ObrasController = {};
const axios = require('axios');

ObrasController.getObras = (req, res) => {
    axios.get(`http://localhost:4000/obras`).then(resp => {
        res.json(resp.data)
    })
}

ObrasController.getObra = (req, res) => {
    const obra = req.params.id
    axios.get(`http://localhost:4000/obras/${obra}`)
    .then(resp => {
        res.json(resp.data)
    });
}

ObrasController.postAutor = (req, res) => {
    const {nombre,apellido,descripcion,edad} = req.body
    axios.post('http://localhost:3000/autores', {nombre,apellido,descripcion,edad})
    .then(resp => {      
        res.json({
            'status': "Autor Registrado"
        });
    });
}

ObrasController.postObra = (req, res) => {
    const {nombre,fecha,descripcion,categoria} = req.body
    axios.post('http://localhost:4000/obras', {nombre,fecha,descripcion,categoria})
    .then(resp => {
        res.json({
            'status': "Obra Registrada"
        });
    });
}

ObrasController.deleteObra = (req, res) => {
    const obra = req.params.id;
    axios.delete(`http://localhost:4000/obras/${obra}`)
}


ObrasController.putObra = (req, res) => {
    const {nombre,fecha,descripcion,categoria} = req.body
    axios.put(`http://localhost:4000/obras/${req.params.id}`,
    {nombre,fecha,descripcion,categoria})
    .then(resp => {    
        res.json({
            'status': 'Datos de la obra editados'
        });        
    })
    .catch(err =>{
       console.error(err)
    });
}

module.exports = ObrasController;