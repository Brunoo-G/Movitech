var datos = require("../db/index")

const controller = {
    index: function(req, res) {
        res.render('index');
    },
    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
    },
    register: function(req, res, next) {
        res.render('register', { title: 'Registrando ando' });
    }
};


module.exports = controller;