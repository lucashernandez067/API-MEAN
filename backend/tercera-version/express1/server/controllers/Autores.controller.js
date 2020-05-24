const AutoresController = {};
const Autor = require('../models/Autor');
const fs = require('fs');
const path = require('path');

AutoresController.getAutores = async (req, res) => {
    const autores = await Autor.find();
    res.json(autores);
}

AutoresController.createAutor = async (req, res) => {
    const autor = new Autor(req.body);
    await autor.save();
    res.json({
        'status': 'success',
        'mensaje': 'Autor registrado'
    });
}

AutoresController.getAutor = async (req, res) => {
    const autor = await Autor.findById(req.params.id);
    res.json(autor);
}

AutoresController.editAutor = async (req, res) => {
    //forma corta
    //Autor.findByIdAndUpdate(req.params.id);

    //forma recomendada
    const { id } = req.params;
    const autor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        descripcion: req.body.descripcion,
        especialidad: req.body.especialidad,
        nacionalidad: req.body.nacionalidad,
        fecha_nacimiento: req.body.fecha_nacimiento,
        fallecido: req.body.fallecido,
        fecha_fallecimiento: req.body.fecha_fallecimiento,
        image: req.body.image
    }
    await Autor.findByIdAndUpdate(id, { $set: autor }, { new: true });
    res.json({
        status: 'success',
        mensaje: 'Datos del autor actualizados'
    });
}

AutoresController.deleteAutor = async (req, res) => {
    await Autor.findByIdAndRemove(req.params.id);
    res.json({
        status: 'success',
        mensaje: 'El autor fue eliminado'
    });
}

AutoresController.search = (req, res) => {
    //string a buscar
    var searchString = req.params.search;
    console.log(searchString);
    ``
    const order = 'ascending';
    //buscar en la BD
    Autor.find({
        "$or": [
            { "nombre": { "$regex": searchString, "$options": "i" } },
            { "apellido": { "$regex": searchString, "$options": "i" } },
            { "descripcion": { "$regex": searchString, "$options": "i" } },
            { "nacionalidad": { "$regex": searchString, "$options": "i" } },
            { "especialidad": { "$regex": searchString, "$options": "i" } }
        ]
    })
        .sort([['nombre', order]])
        .exec((err, autores) => {
            if (err) {
                return res.status(500).json({
                    'status': 'error',
                    'mensaje': 'Error en la petición'
                });
            }
            if (!autores || autores.length <= 0) {
                return res.status(404).json({
                    'status': 'null',
                    'mensaje': 'No hay autores que coincidan con la busqueda.'
                });
            }
            return res.status(200).json(autores);
        })
}

AutoresController.upload = (req, res) => {
    const file_name = req.params.file_name;
    //buscar el autor y asignarle el nombre de la imagen y actualizarlo
    Autor.findOneAndUpdate({ _id: autorId }, { image: file_name }, { new: true }, (err, autorUpdated) => {

        if (err || !autorUpdated) {
            return res.status(200).json({
                'status': 'error',
                'mensaje': 'Error al guardar la imagen'
            });
        }

        return res.status(200).json({
            'status': 'success',
            'mensaje': 'Imagen registrada'
        });

    });
}

module.exports = AutoresController;