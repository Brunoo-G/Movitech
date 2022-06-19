const db = require("../database/models");

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll()
        .then(function(data){
            res.render('index', { data: data});
        })
        .catch(function(error){
            console.log(error)
        })     
    },
    productAdd: function(req, res, next) {
        res.render('product-add', { perfil: db.Usuario});
    },

    store: function(req, res) {
       if(req.body.usuario_id = req.session.user.id) db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        color: req.body.color,
        fechaCarga: req.body.fechaCarga,
        imagen: req.body.imagenDeProducto = (req.file.path).replace('public', ''),
        usuario_id: req.body.usuario_id
       })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    productDetail: function(req, res, next) {
        let id = req.params.id ;
        
        let relaciones = {
            include: {
                all : true,
                nested: true
            }
        }
        db.Producto.findByPk(id ,relaciones)
    
        .then(function(data){
            res.render('product' , { data: data , comentarios: db.comentarios });
        }) 
        .catch(function(error){
            console.log(error)
        })  
    },
}

module.exports = controller;