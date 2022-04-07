var data = require("../db/index")

const controller = {
    profile: function(req, res) {
        res.render('profile', { perfil: data.usuario});
    }
}

module.exports = controller;