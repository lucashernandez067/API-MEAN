const ObrasController = {};
const axios = require('axios');
const fs = require('fs');
const path = require('path');

ObrasController.getObras = (req, res) => {
    axios.get(`http://localhost:3002/obras`).then(resp => {
        res.json(resp.data)
    })
}

ObrasController.getObra = (req, res) => {
    const obra = req.params.id
    axios.get(`http://localhost:3002/obras/${obra}`)
    .then(resp => {
        res.json(resp.data)
    });
}

ObrasController.postObra = (req, res) => {
    const {
        nombre,
        fecha,
        informacion,
        categoria,
        ubicacion,
        image
    } = req.body
    axios.post('http://localhost:3002/obras/crear', {
        nombre,
        fecha,
        informacion,
        categoria,
        ubicacion,
        image
    })
    .then(resp => {      
        res.json({
            'status': "Obra Registrada"
        });
    });
}

ObrasController.deleteObra = (req, res) => {
    const obra = req.params.id;
    axios.delete(`http://localhost:3002/obras/${obra}`)
}


ObrasController.putObra = (req, res) => {
    const {
        nombre,
        fecha,
        informacion,
        categoria,
        ubicacion,
        image
    } = req.body
    axios.put(`http://localhost:3002/obras/${req.params.id}`,
    {
        nombre,
        fecha,
        informacion,
        categoria,
        ubicacion,
        image
    })
    .then(resp => {    
        res.json({
            'status': 'Datos de la obra editados'
        });        
    })
    .catch(err =>{
       console.error(err)
    });
}


ObrasController.upload = (req, res) => {
    //configurar el modulo connect multiparty (ir a la ruta)


    //recoger el fichero
    var file_name = 'Imagen no subida.';

    if (!req.files) {
        return res.status(404).json({
            'status': file_name
        });
    }

    //conseguir el nombre y extensión del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split('\\');
    // En linux o MAC ('/')

    var file_name = file_split[3];

    //extensión
    var extension_split = file_name.split('\.');
    var file_ext = extension_split[1];
    var file_ext = file_ext.toLowerCase();

    //comprobar extensión, si no es válido eliminar el fichero
    if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'gif' && file_ext != 'jpeg') {
        //borrar el archivo inculir fs y path
        fs.unlink(file_path, (err) => {
            return res.status(200).json({
                'status': 'invalid',
                'mensaje': 'La extensión del archivo no es válida'
            });
        });
    } else {
        //si todo es valido, sacar el id de la url
        var obraId = req.params.id;

        if (obraId) {

            axios.post(`http://localhost:3002/obras/upload-image/${file_name}`)
            .then(resp => {
                res.json({
                    'status': "imgaen regístrada en la base de datos"
                });
            });

        }else{
            return res.status(200).json({
                'status': 'success',
                'mensaje': 'Imagen registrada',
                'image': file_name
            });
        }
    }
}



ObrasController.getImage = (req, res) => {
    //requerir path y fs

    var file = req.params.image;
    var path_file = './server/upload/obras/'+file;

    fs.exists(path_file, (exists) => {
        if(exists){
            return res.sendFile(path.resolve(path_file));
        }else{
            return res.status(404).json({
                'status': 'error, la imagen no existe'
            });
        }
    });
}

module.exports = ObrasController;