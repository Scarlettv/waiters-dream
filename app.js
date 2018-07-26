const express = require('express');
const app = express();
const mysql = require('mysql');
const passport = require('passport');
const session    = require('express-session')
const bodyParser = require('body-parser');
const wdController = require('./controllers/wdController');
const myDatabase = require('./db');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 // For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.set('view engine', 'ejs');
// Static file managment
app.use(express.static('./Public'));

//Models
var models = require("./models");

//load passport strategies
require('./config/passport/passport.js')(passport,models.user);

// linking conroller(app);
wdController(app, myDatabase(mysql), passport);

//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});

app.listen(3000);
console.log('Server is live')
