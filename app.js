//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

//var app = express();

// view engine setup
//app.set('views', __dirname + '/public');
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//var index = require('./routes/index');
//var users = require('./routes/users');

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//  res.status(err.status || 500);
//  res.render('error');
//});

//module.exports = app;


var express = require('express');
var path = require('path');
var app = express();

// Set Static files path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist/views')));

// serving template files
app.set('views', __dirname + '/dist/views');
app.set('view engine', 'ejs');

var index = require('./dist/routes/index');
app.use('/', index);

module.exports = app;