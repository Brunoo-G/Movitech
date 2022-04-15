const  data   = require("../db/index");

const controller = {
    index: function(req, res, next) {
        res.render('index', { data: data.productos});
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