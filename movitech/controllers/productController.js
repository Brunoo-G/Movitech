var products = require("../data/products")

const controller = {
   color: function(req, res) {
        res.render('products_color', { products: products.getPhoneByColor(req.params.color)});
    }
    //show: function(req, res) {
    //    res.render('products_id', { products: products.getPhoneById(req.params.id)});
    //}
}



module.exports = controller;