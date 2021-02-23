const Role = require('../models/role');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${ rol } no esta registado en la BD`) //este error no rompe la aplicacion, lo usa express-validator para mostrar el error
    }
}

module.exports = {
    esRoleValido
}