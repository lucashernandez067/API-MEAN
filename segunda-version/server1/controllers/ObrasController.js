const ObrasController = {};
const Obra = require('../models/Obra');

ObrasController.getObras = async (req, res) => {
    const obras = await Obra.find();
    res.json(obras);
}

ObrasController.createObra = async (req, res) => {
    const obra = new Obra(req.body);
    await obra.save();
    res.json({
        'status': 'Obra Registrada'
    });
}

ObrasController.getObra = async (req, res) => {
    const obra = await Obra.findById(req.params.id);
    res.json(obra);
}

ObrasController.editObra = async (req, res) => {
    const { id } = req.params;
    const obra = {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria
    }
    await Obra.findByIdAndUpdate(id, {$set: obra}, {new: true});
    res.json({
        'status': 'Se actualizaron los datos de la obra'
    });
}

ObrasController.deleteObra = async (req, res) => {
    await Obra.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Se ha eliminado la obra'
    });
}

module.exports = ObrasController;