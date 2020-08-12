var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const { dev } = require('./dbconfig.js');

// Mongoose. From docs: 'useFindAndModify': true by default.
// Set to false to make findOneAndUpdate() and findOneAndRemove() 
// use native findOneAndUpdate() rather than findAndModify().
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://hki2050.0nva9.mongodb.net/hki2050", {
    "user": dev.user,
	"pass": dev.password
}).then(
	() => {console.log('Database connection is successful') },
	err => { console.log('Error when connecting to the database'+ err)}
);

// Routes
var routes = require('./routes/routes');

//const port = process.env.PORT || 3000;

var app = express();

// Logger gives at least status codes in the backend
app.use(logger('dev'));

// From docs: Returns middleware that only parses
// urlencoded bodies and only looks at requests 
// where the Content-Type header matches the type option.
app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// All the urls starting with /api will be handled in routes.js
app.use('/api', routes);

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.sendFile(path.join (__dirname, './public', 'index.html'));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
  res.json('error');
});

module.exports = app;
