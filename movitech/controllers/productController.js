const db = require("../database/models");
const data = require("../db/index");

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
        res.render('product-add', { perfil: data.usuario});
    },
    productDetail: function(req, res, next) {
        res.render('product' , { data: data.productos[req.params.id], comentarios: data.comentarios});
    },
}

module.exports = controller;