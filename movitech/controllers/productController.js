const { text } = require("express");
const db = require("../database/models");

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll({ include:  {all:true, nested: false }}) 
        .then(function(data){
            res.render('index', { data});
        })
        .catch(function(error){
            console.log(error)
        })     
    },
    productAdd: function(req, res, next) {
        res.render('product-add', { perfil: db.Usuario});
    },

    store: function(req, res) {
       if(req.body.usuario_id = req.session.user.id)
        db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        color: req.body.color,
        fechaCarga: req.body.fechaCarga,
        imagen: req.body.imagenDeProducto = (req.file.path).replace('public', ''),
        usuario_id: req.body.usuario_id
       })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    delete: function(req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        }
        db.Producto.destroy({ where: { id : req.params.id } })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    productDetail: function(req, res, next) {
        let id = req.params.id ;
        
        let relaciones = {
            include: {
                all : true,
                nested: true
            }
        }
        db.Producto.findByPk(id , relaciones)
        .then(function(data){
            res.render('product' , { data });
        }) 
        .catch(function(error){
            console.log(error)
        })  
    },
    
    edit: function(req, res) {

        let relaciones = {
            include: {
                all : true,
                nested: true
            }
        }
        db.Producto.findByPk(req.params.id, relaciones)
            .then(function (data) {
                res.render('product-edit', { data });
            })
            .catch(function (error) {
                res.send(error);
            })
        },

    updateProduct: function(req, res) {
        
        if (req.file) req.body.imagenDeProducto = (req.file.path).replace('public', '');
        db.Producto.update(req.body, { where: { id: req.params.id } })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    comment: function (req, res, next) {
        if (!req.session.user) { 
            throw Error('Not authorized.')
        }
        req.body.user_id = req.session.user.id;
        req.body.producto_id = req.params.id;
        db.Comentario.create({
            texto: req.body.comentario,
            usuario_id: req.body.user_id,
            producto_id: req.body.producto_id,
        })
        .then(function() {
            res.redirect('/products/' + req.params.id)
            })
        .catch(function(error) {
            res.send(error);
        })
    },
}

module.exports = controller;