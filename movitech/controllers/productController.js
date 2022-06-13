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