var data = require("../db/index")

const controller = {
    profile: function(req, res) {
        res.render('profile', { perfil: data.usuario});
    },

    profileEdit: function(req, res) {
            res.render('profile-edit', { perfil: data.usuario});
        }
    }




module.exports = controller;