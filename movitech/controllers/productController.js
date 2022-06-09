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
        res.render('product' , { data: data.productos[req.params.id], comentarios: data.comentarios});
    },
}

module.exports = controller;