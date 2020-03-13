const express = require('express');
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');
/*
router.get('/', (req, res, next) => {
    const autores = axios.get('http://localhost:3000/autores');
    res.json(autores);
 = async (req, res) => {
    try {
      const autores = await axios.get('http://localhost:3000/autores');
    } catch (error) {
      console.error(error)
    }
    res.json(autores);
}

router.get('/autores',  (req, res) => {
        axios.get('http://localhost:3000/autores')
        res.json(resp.data);
    
});

*/


router.get('/autores',  (req, res) => {
    axios.get('http://localhost:3000/autores').then(resp => {    
        res.json(resp.data)    
    });
});

router.get('/autores/:id',  (req, res) => {
    const autor = req.params.id
    // axios.get('http://localhost:3000/autores/',autor).then(resp => {    
    axios.get(`http://localhost:3000/autores/${autor}`)
    .then(resp => {    
        res.json(resp.data)    
    });
});

router.post('/autores',  (req, res) => {
    const {nombre,apellido,descripcion,edad} = req.body
    axios.post('http://localhost:3000/autores', {nombre,apellido,descripcion,edad})
    .then(resp => {      
        res.json({
            'status': "Autor Registrado"
        });
    });
});

router.delete('/autores/:id', (req, res) => {
    const autor = req.params.id
    axios.delete(`http://localhost:3000/autores/${autor}`)
    .then(resp => {    
        res.json(resp.data)        
    });
});

router.put('/autores/:id', (req, res) => {
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
});







module.exports = router;
