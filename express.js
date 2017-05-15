var express = require('express');
var cons = require('consolidate');


var app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/server');

app.use(express.static('controllers'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
    res.render('layout', {'title': 'index'});
});

app.listen(3001, function(){
    console.log('app listening on port 3001');
});