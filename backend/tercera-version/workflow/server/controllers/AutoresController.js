const AutoresController = {};
const Autor = require('../models/Autor');
const axios = require('axios');
const fs = require('fs');
const path = require('path');


function almacenar(autores) {
    if (autores) {
        const autor = Autor;
        autor.insertMany(autores, function (err, res) {
            if (err) throw err;
            console.log('datos almacenados en chaché');
            
        });

    } else {
        console.log('error no hay registros');
    }
}

function eliminar() {
    const autor = Autor;
    autor.deleteMany(function (err, res) {
        if (err) throw err;
        console.log('colección eliminada');
    });
}

// AutoresController.getAutores = (req, res) => {
//     axios.get('http://localhost:3001/autores').then(resp => {
//         res.json(resp.data);
//     });
// }

AutoresController.getAutores = async (req, res) => {
    const autores = await Autor.find();
    if (autores.length >= 1) {
        res.json(autores);
        console.log('usando caché');
    } else {
        axios.get('http://localhost:3001/autores').then(resp => {
            res.json(resp.data);
            console.log('bucando datos en el servicio...');
            almacenar(resp.data);
        });
    }
}

AutoresController.getAutor = (req, res) => {
    const autor = req.params.id
    // axios.get('http://localhost:3001/autores/',autor).then(resp => {    
    axios.get(`http://localhost:3001/autores/${autor}`)
        .then(resp => {
            res.json(resp.data)
        });
}

AutoresController.search = (req, res) => {
    const searchString = req.params.search
    axios.get(`http://localhost:3001/autores/search/${searchString}`)
        .then(resp => {
            res.json(resp.data);
        })
        .catch(error => {
            return res.status(404).json({
                'status': 'null',
                'mensaje': 'No hay autores que coincidan con la busqueda.'
            });
        });
}

AutoresController.postAutor = (req, res) => {
    const {
        nombre,
        apellido,
        descripcion,
        especialidad,
        nacionalidad,
        fecha_nacimiento,
        fallecido,
        fecha_fallecimiento,
        image
    } = req.body
    axios.post('http://localhost:3001/autores/crear', {
        nombre,
        apellido,
        descripcion,
        especialidad,
        nacionalidad,
        fecha_nacimiento,
        fallecido,
        fecha_fallecimiento,
        image
    })
        .then(resp => {
            res.json({
                'status': "Autor Registrado"
            });
        });
}

AutoresController.deleteAutor = (req, res) => {
    const autor = req.params.id
    axios.delete(`http://localhost:3001/autores/${autor}`)
        .then(resp => {
            res.json(resp.data);
            //eliminar();
        });
}

AutoresController.putAutor = (req, res) => {
    const {
        nombre,
        apellido,
        descripcion,
        especialidad,
        nacionalidad,
        fecha_nacimiento,
        fallecido,
        fecha_fallecimiento,
        image
    } = req.body
    axios.put(`http://localhost:3001/autores/${req.params.id}`, {
        nombre,
        apellido,
        descripcion,
        especialidad,
        nacionalidad,
        fecha_nacimiento,
        fallecido,
        fecha_fallecimiento,
        image
    })
        .then(resp => {
            res.json({
                'status': 'Datos del autor editados'
            });
            eliminar();
        })
        .catch(err => {
            console.error(err)
        });
}

AutoresController.upload = (req, res) => {
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
        var autorId = req.params.id;

        if (autorId) {

            axios.post(`http://localhost:3001/autores/upload-image/${file_name}`)
                .then(resp => {
                    res.json({
                        'status': "imgaen regístrada en la base de datos"
                    });
                });

        } else {
            return res.status(200).json({
                'status': 'success',
                'mensaje': 'Imagen registrada',
                'image': file_name
            });
        }
    }
}

AutoresController.getImage = (req, res) => {
    var file = req.params.image;
    var path_file = './server/upload/autores/' + file;

    fs.exists(path_file, (exists) => {
        if (exists) {
            return res.sendFile(path.resolve(path_file));
        } else {
            return res.status(404).json({
                'status': 'error',
                'mensaje': 'error, la imagen no existe'
            });
        }
    });

}




module.exports = AutoresController;
