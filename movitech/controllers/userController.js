const db = require("../database/models");
const hasher = require("bcryptjs")

const controller = {
    profile: function(req, res) { 
        let id = req.session.user.id ;

        let relaciones = {
            include: {
                all: true,
                nested: true
            }
        }

        db.Usuario.findByPk(id, relaciones)
        .then(function(perfil){
            res.render('profile', { perfil });
        }) 
        .catch(function(error){
            console.log(error)
        })  
    
    },

    profileEdit: function(req, res, next) {
        db.Usuario.findByPk(req.session.user.id)
        .then(function(perfil){
            res.render('profile-edit', { perfil });
        }) 
        .catch(function(error){
            console.log(error)
        })  
           
    },

    // todavia no funciona
    update: function(req, res) {

        if (req.file) req.body.foto = (req.file.path).replace('public', '');
        if(req.body.contraseña) {
            req.body.contraseña = hasher.hashSync(req.body.contraseña, 10 );
        } else{
            req.body.contraseña = undefined;
        }
        db.Usuario.update(req.body, {where: {id: req.session.user.id}})
        .then(function() {
            res.redirect('/users/profile')
        })
        .catch(function(error) {
            res.send(error);
        })
    },
}
    
module.exports = controller;