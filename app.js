const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const { handle404Error, handleDevErrors } = require('./app/middlewares/errorHandlers');
const mysqlMidd = require('./app/middlewares/mysql');
const index = require('./app/routes/index');

const app = express();

// cors being added for more information refer https://www.npmjs.com/package/cors
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'pug');


app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* connecting MongoDB */
app.use(require('./app/middlewares/mongodb').connectMongoDb);

/* http server */
const server = http.createServer(app);

app.use('/', index);


/* serving auth files to route */
/* index.js file will be called by default if you don't mention any file name explicitly
  ...auth/index or .../auth  both represents same thing  */
app.use('/auth', mysqlMidd.getConnection, require('./app/controllers/auth'));
app.use('/getPosts', require('./app/middlewares/verifyToken').verifyToken, require('./app/controllers/posts/getPosts').getPosts);

/* these are set of mongodb examples */
app.use('/mongo', require('./app/controllers/mongoDB'));


// catch 404 and forward to error handler
app.use(handle404Error);

// error handler
app.use(handleDevErrors);

/* will be assinging env port if it's available  else port will be 3000 */
const port = process.env.PORT || 3000;

/* running application server on port 3000 */
server.listen(port, () => {
  console.log(`Hey! I'm running on ${server.address().port}`);
});

module.exports = app;
