const AutoresController = {};
const Autor = require('../models/Autor');

AutoresController.getAutores = async (req, res) => {
    const autores = await Autor.find();
    res.json(autores);
}

AutoresController.createAutor = async (req, res) => {
    const autor = new Autor(req.body);
    await autor.save();
    res.json({
        'status': 'Autor registrado'
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
        edad: req.body.edad
    }
    await Autor.findByIdAndUpdate(id, {$set: autor}, {new: true});
    res.json({
        status: 'Datos del autor actualizados'
    });
}

AutoresController.deleteAutor = async (req, res) => {
    await Autor.findByIdAndRemove(req.params.id);
    res.json({
        status: 'El autor fue eliminado'
    });
}

module.exports = AutoresController;