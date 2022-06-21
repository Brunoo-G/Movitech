const db = require("../database/models")
const hasher = require("bcryptjs")
const Productos = db.Producto; //Alias de la db
const op = db.Sequelize.Op;

const controller = {
    index: function(req, res, next) {
        db.Producto.findAll({
            order: [
                ["created_at", "DESC"]
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
                                where:[{ nombre:{ [op.like]: `%${palabraBuscada}%`}}], 
                                include: {all: true, nested: false}
                             });
        let promesaDescripcion = Productos.findAll({
                        where:[{ descripcion:{ [op.like]: `%${palabraBuscada}%`}}],
                        include: {all: true, nested: false}
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

            try {
                if (!user) throw Error("Usuario no existente")
                if(!hasher.compareSync(req.body.password, user.contraseña))
                throw Error ("contraseña incorrecta")
            } catch(err) {
                res.render('login', {error: err.message});
                return;
            } next   

            if (hasher.compareSync(req.body.password, user.contraseña)) {
                req.session.user = user.dataValues;
                if (!req.body.recordarUsuario) {
                    res.cookie( 'userId' , user.dataValues.id, {maxAge: 1000 * 60 * 60 * 7}) 
                }
                res.redirect("/");
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

    store: async function(req, res, next) {
        try{
            if (!req.body.email) { throw Error('Debes ingresar un email existente') }
            if (!req.body.nombre) { throw Error('Debes ingresar un usuario') }
            if (req.body.contraseña.length <= 3) { throw Error('La contraseña debe tener mas de 3 dígitos') }
            const user = await db.Usuario.findOne({ where: {email: req.body.email} })
            if(user) {throw Error ('Este email ya existe')}
        } catch(err) {
            res.render('register', {error: err.message});
            return;
        }next
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