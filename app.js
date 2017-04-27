const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const  bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

//Create Redis Client
let client = redis.createClient();

client.on('connect', function(){
	console.log('Connected to Redis..')
});


//Set Port

const port = 3000;

// Init App

const app = express();

// View Engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Method Overrride
app.use(methodOverride('_method'));


// Search Page
app.get('/', function(req, res, next){
		res.render('searchusers');
});

//Search Processing
app.post('/users/search', function(req, res, next){
	let id = req.body.id;


});

app.listen(port, function(){
		console.log('Server started on port'+port);
});