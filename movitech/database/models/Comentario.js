module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: { type: dataTypes.STRING },
        texto: { type: dataTypes.STRING },
        imagen: { type: dataTypes.STRING },
        usuario_id: { type: dataTypes.INTEGER },
        producto_id: { type: dataTypes.INTEGER },
    }

    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }

    const Comentario = sequelize.define('Comentario', cols, configs);

    return Comentario;
}