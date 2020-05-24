const ObrasController = {};
//añadiendo el modelo
const Obra = require('../models/Obra');
const fs = require('fs');
const path = require('path');

//async y await reemplazarán las promesas, consultando a la db y guardando en una constante.
ObrasController.getObras = async (req, res) => {
    const obras = await Obra.find();
    res.json(obras);
}

ObrasController.createObra = async (req, res) => {
    const obra = new Obra(req.body);
    await obra.save();
    res.json({
        'status': 'Obra registrada'
    });
}

ObrasController.getObra = async (req, res) => {
    //econtrat datos especificos
    //console.log(req.params.id);
    const obra = await Obra.findById(req.params.id);
    res.json(obra);
}


ObrasController.editObra = async (req, res) => {
    const { id } = req.params;
    const obra = {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        informacion: req.body.informacion,
        ubicacion: req.body.ubicacion,
        categoria: req.body.categoria,
        image: req.body.image
    }
    await Obra.findByIdAndUpdate(id, { $set: obra }, { new: true });
    res.json({
        status: 'Se ha actualizado la información de la obra'
    });
}

ObrasController.deleteObra = async (req, res) => {
    await Obra.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Se ha eliminado la obra'
    });
}

ObrasController.search = (req, res) => {
    //string a buscar
    var searchString = req.params.search;
    console.log(searchString);

    const order = 'ascending';
    //buscar en la BD
    Obra.find({
        "$or": [
            { "nombre": { "$regex": searchString, "$options": "i" } }
        ]
    })
        .sort([['nombre', order]])
        .exec((err, obras) => {
            if (err) {
                return res.status(500).json({
                    'status': 'Error en la petición'
                });
            }
            if (!obras || obras.length <= 0) {
                return res.status(404).json({
                    'status': 'No hay obras que coincidan con la busqueda.'
                });
            }
            return res.status(200).json(obras);
        })
}

ObrasController.upload = (req, res) => {
    const file_name = req.params.file_name;
    //buscar la obra y asignarle el nombre de la imagen y actualizarla
    Obra.findOneAndUpdate({ _id: obraId }, { image: file_name }, { new: true }, (err, obraUpdated) => {

        if (err || !obraUpdated) {
            return res.status(200).json({
                'status': 'error',
                'mensaje': 'Error al guardar la imagen'
            });
        }

        return res.status(200).json({
            'status': 'success',
            'mensaje': 'Imagen registrada',
        });
    });
}


module.exports = ObrasController;