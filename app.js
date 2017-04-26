const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const  bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');


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

