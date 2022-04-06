var data = require("../db/index")

const controller = {
    profile: function(req, res) {
        res.render('perfil', { perfil: data.perfil });
    }
}

module.exports = controller;