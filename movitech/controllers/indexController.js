const db = require("../database/models")

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll()
        .then(function(data){
             res.render('index', { data: data})
        })
        .catch(function(error){
            console.log(error)
        })
    },

    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    searchResults: function(req, res,next){
        res.render('search-results');
    }
};

module.exports = controller;