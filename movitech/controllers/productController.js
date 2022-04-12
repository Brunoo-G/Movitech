const { productos } = require("../db/index");
const  data   = require("../db/index");
var products = require("../db/index")

const controller = {
    index: function(req, res, next) {
        res.render('index', { data: data.productos});
    },
    productAdd: function(req, res, next) {
        res.render('product-add');
    },
    productDetail: function(req, res, next) {
        res.render('product' , { data: data.productos[req.params.id]});
    },
    productComments: function (req, res, next) {
        res.render('product', { data: data.comentarios});
    },
}

module.exports = controller;