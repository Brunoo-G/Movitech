const db = require("../database/models");

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
        db.Usuario.findByPk(2)
        .then(function(data){
            res.render('profile-edit', { perfil: db.usuario});
        }) 
        .catch(function(error){
            console.log(error)
        })  
           
        }
    }
    
module.exports = controller;