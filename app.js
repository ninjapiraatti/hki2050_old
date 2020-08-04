var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
global.Task = require('./models/taskModel');
var indexRouter = require('./routes/index');
var infoRouter = require('./routes/info');
const { dev } = require('./dbconfig.js');
const employees = require("./models/simple");

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://hki2050.0nva9.mongodb.net/hki2050", {
    "user": dev.user,
	"pass": dev.password
}).then(
	() => {console.log('Database connection is successful') },
	err => { console.log('Error when connecting to the database'+ err)}
);

const port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.sendFile(path.join (__dirname, './public', 'index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
