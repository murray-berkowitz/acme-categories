var express = require('express');
var nunjucks = require('nunjucks');
var port = process.env.PORT || 3000;

var app = express();
var routes = require('./routes');
var db = require('./db');

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

app.use(require('method-override')('_method'));

app.use('/', routes);
app.get('/', function(req,res,next){
	res.render('index', {categories: db.getCategoryNames()});
});

var server = app.listen(port, function(){
	console.log('listening on port ' + port);
})