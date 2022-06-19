module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: { type: dataTypes.STRING },
        usuario_id: { type: dataTypes.INTEGER },
        producto_id: { type: dataTypes.INTEGER },
        created_at: { type: dataTypes.DATE },
    }

    const configs = {
        tableName: 'comentarios',
        timestamps: false
    }

    const Comentario = sequelize.define('Comentario', cols, configs);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
    }    
    
    return Comentario;
}
