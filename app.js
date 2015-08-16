//package load
var express     = require('express');
var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt');
var jwt         = require('jsonwebtoken');
var path        = require('path');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var cookieParser= require('cookie-parser');

//app
var app = express();

//base setup
var port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//database setup
mongoose.connect('mongodb://localhost:27017/logindb');
var db =mongoose.connection;
db.on("error",function (err) {
  console.log("DB ERROR :",err.message);
});
db.once("open",function () {
  console.log("DB connected");
});

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

//server
app.listen(3000,function () {
  console.log("http://127.0.0.1:"+port+"/");
});
