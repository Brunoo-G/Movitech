var datos = require("../db/index")

const controller = {
    index: function(req, res) {
        res.render('index');
    },
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    }
};


module.exports = controller;