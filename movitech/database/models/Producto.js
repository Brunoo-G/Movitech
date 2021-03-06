module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: { type: dataTypes.STRING },
        descripcion: { type: dataTypes.STRING },
        color: { type: dataTypes.STRING },
        imagen: { type: dataTypes.STRING },
        usuario_id: { type: dataTypes.INTEGER },
        created_at: { type: dataTypes.DATE },
        updated_at: { type: dataTypes.DATE },
    }

    const configs = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define('Producto', cols, configs);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'producto_id'
        })
    }

    return Producto;
}