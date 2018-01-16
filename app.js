var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const http = require('http');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* http server */
const server = http.createServer(app);

app.use('/', index);
app.use('/users', users);

/* serving auth files to route */
/* index.js file will be called by default if you don't mention any file name explicitly   
  ...auth/index or .../auth  both represents same thing  */
app.use('/auth',require('./controllers/auth'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

/* will be assinging dynamic ports if it's available  else port will be 3000*/
const port = process.env.PORT || 3000;

/* running application server on port 3000 */
server.listen(port,()=>{
  console.log(`Hey! I'm running on ${server.address().port}`);
})

module.exports = app;
