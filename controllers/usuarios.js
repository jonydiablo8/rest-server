const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en BD
    await usuario.save();

    res.json({
        usuario //se aplica el metodo toJSON implicitamente (se ejecutara el metodo toJSON del modelo de usuario)
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}