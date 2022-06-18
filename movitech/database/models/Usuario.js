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
        created_at: { type: dataTypes.DATE },
        updated_at: { type: dataTypes.DATE },
    }

    const configs = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define('Usuario', cols, configs);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        })
    }
    
    return Usuario;
}

