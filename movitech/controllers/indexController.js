const db = require("../database/models")
const hasher = require("bcryptjs")
const Productos = db.Producto; //Alias de la db
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll({
            order: [
                ["updated_at", "DESC"]
            ],
            limit: 8,
            include: {all:true, nested:false},
        })
        .then(function(data){
            res.render('index', {data: data})
        })
        .catch(function(error){
            console.log(error)
        })
    },
    search: function(req,res){  
        let palabraBuscada = req.query.search; /* search es el input name del formulario de los headers*/ 
        let promesaNombre = Productos.findAll({
                                where:[{ nombre:{ [op.like]: `%${palabraBuscada}%`}}] 
                             });
        let promesaDescripcion = Productos.findAll({
                        where:[{ descripcion:{ [op.like]: `%${palabraBuscada}%`}}]
                    });
        let erroresBuscador = {};
        if(palabraBuscada == "") {
            res.locals.erroresBuscador = erroresBuscador;
            return res.render('search-results')
        } else {  
            Promise.all([promesaNombre, promesaDescripcion]) //Le paso como parametro promesaNombre y promesaDescripcion
            .then(function([resNombre, resDescripcion]){
                if (resNombre.length === 0 && resDescripcion.length === 0){
                    res.locals.erroresBuscador = erroresBuscador;
                    return res.render('search-results')
                } 
                res.locals.erroresBuscador = "undefined";
                let arrDeResultados = [];
                for (let i = 0; i < resNombre.length; i++) {
                    arrDeResultados.push(resNombre[i])
                } 
               for (let i = 0; i < resDescripcion.length; i++) {
                    arrDeResultados.push(resDescripcion[i])
                } 
                res.render('search-results', {
                    resultados: arrDeResultados
                })
            })
            .catch(err => console.log(err));
        }
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
        if (!req.body.email) { throw Error('ingresar un email existente.') }
        const hashedPassword = hasher.hashSync(req.body.contraseña, 10);
        db.Usuario.create({
                email: req.body.email,
                nombre: req.body.nombre,
                contraseña: hashedPassword,
                nacimiento: req.body.nacimiento,
                documento: req.body.documento,
                foto: req.body.fotoDePerfi = (req.file.path).replace('public', '')
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