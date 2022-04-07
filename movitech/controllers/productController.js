var products = require("../db/index")

const controller = {
    index: function(req, res, next) {
        res.render('index');
    },
    productAdd: function(req, res, next) {
        res.render('product-add');
    },
    productDetail: function(req, res, next) {
        res.render('product');
    }
}

module.exports = controller;