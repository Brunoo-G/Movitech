var data = require("../db/index")

const controller = {
    profile: function(req, res) {
        res.render('profile', { perfil: data.perfil });
    }
}

module.exports = controller;