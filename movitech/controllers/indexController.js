const db = require("../database/models")
const hasher = require("bcryptjs")

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll()
        .then(function(data){
            res.render('index', {data: data})
        })
        .catch(function(error){
            console.log(error)
        })
    },

    login: function(req, res, next) {
        res.render('login');
    },

    access: function(req, res, next) {
        db.Usuario.findOne({where: {nombre: req.body.usuario}})
        .then(function(user){
            console.log(user)
            if (!user) throw Error("Usuario no existente")
            if (hasher.compareSync(req.body.password, user.contraseña)) {
                req.session.user = user.dataValues;
                if (!req.body.recordarUsuario) {
                    res.cookie( 'userId' , user.dataValues.id, {maxAge: 1000 * 60 * 60 * 7}) 
                }
                res.redirect("/");
            } else {
                throw Error ("Usuario o contraseña incorrectos")
            }
        })
        .catch(function(error){
            next(error)
        })
    },

    logout: function(req, res, next) {
        req.session.user = null;
        res.clearCookie("userId");
        res.redirect("/")
    },

    register: function(req, res, next) {
        res.render('register');
    },

    store: function(req, res, next) {
        if (!req.body.email) { throw Error('Email ingresado no existente.') }
        const hashedPassword = hasher.hashSync(req.body.contraseña, 10);
        db.Usuario.create({
                email: req.body.email,
                nombre: req.body.nombre,
                contraseña: hashedPassword,
                nacimiento: req.body.nacimiento,
                documento: req.body.documento,
                foto: req.body.foto,
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    searchResults: function(req, res,next){
        res.render('search-results');
    }
};

module.exports = controller;