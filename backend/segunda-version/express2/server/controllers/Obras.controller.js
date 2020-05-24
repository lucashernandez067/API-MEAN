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
    Obra.find({ "$or":[
        { "nombre": { "$regex": searchString, "$options": "i"}}
    ]})
    .sort([['nombre', order]])
    .exec((err, obras) => {
        if(err){
            return res.status(500).json({
                'status': 'Error en la petición'
            });
        }
        if(!obras || obras.length <= 0){
            return res.status(404).json({
                'status': 'No hay obras que coincidan con la busqueda.'
            });
        }
        return res.status(200).json(obras);
    })
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
                    'fichero': req.files
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