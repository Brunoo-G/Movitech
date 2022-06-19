var db = require("../database/models");
var Productos = db.Producto;
var op = db.Sequelize.Op;
var bcrypt = require('bcryptjs');

const searchController = {
    index: function(req, res) {
        let palabraBuscada = req.query.search;
        console.log(palabraBuscada)
        let promesaNombre = Productos.findAll({
            include: [{association: 'usuario'}],
            where: [
                { nombre:{ [op.like]: `%${palabraBuscada}%`}}
            ]
        });
        let promesaDescripcion = Productos.findAll({
            where: [
                { descripcion:{ [op.like]: `%${palabraBuscada}%`}}
            ]
        });
        Promise.all([promesaNombre, promesaDescripcion])
        .then(function([resNombre, resDescripcion]) {
            let arrDeResultados = [];
            for (let i = 0; i < resNombre.length; i++) {
                arrDeResultados.push(resNombre[i])
            }
            for (let i = 0; i < resDescripcion.length; i++) {
                arrDeResultados.push(resDescripcion[i])
            }
            // res.render('search-results', { resultados: arrDeResultados})
            console.log(arrDeResultados)
            res.render('search-results', {resultados: arrDeResultados})
            
        })
        .catch(function(error){
            console.log(error)
        })
    }
};
// const indexController = {
//     search : (req,res,next)=> 
//     console.log('buscaste:'+ req.query.search);

//     db.Productos.findAll({
//       where: [
//         { title: { [Op.like]: '%' + req.query.search + '%' } }
//       ] 
//     })
//     .then( (data) =>{
//        res.render('products', {resultados: data});
//     })
//     .catch(function(error){
//          console.log(error)
//     })
// }


module.exports = searchController;