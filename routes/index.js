var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var router = express.Router();
var db = require('../db');

router.use(express.static('public'));

router.post('/categories', urlEncodedParser, function(req,res,next){
	db.createCategory(req.body.name);
	res.redirect('/');
});

router.post('/categories/:name/products', urlEncodedParser, function(req,res,next){
	db.createProduct(req.params.name, req.body.name);
	res.redirect('/categories/'+req.params.name+'/products');
});

router.get('/categories/:name/products', function(req,res,next){
	res.render('products.html', {products:db.getProductsByCategory(req.params.name), categories:db.getCategoryNames(), category:req.params.name});
});

router.delete('/categories/:name', function(req,res,next){
	db.deleteCategory(req.params.name);
	res.redirect('/');
});

router.delete('/categories/:name/products/:id', function(req,res,next){
	db.deleteProduct(req.params.name, req.params.id);
	res.redirect('/categories/'+req.params.name+'/products');
});

module.exports = router;