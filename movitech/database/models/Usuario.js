module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: { type: dataTypes.STRING },
        nombre: { type: dataTypes.STRING },
        contraseña: { type: dataTypes.INTEGER },
        nacimiento: { type: dataTypes.DATE },
        documento: { type: dataTypes.INTEGER },
        foto: { type: dataTypes.STRING },
    }

    const configs = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define('Usuario', cols, configs);

    return Usuario;
}