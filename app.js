const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morganDebug = require('morgan-debug');
const helmet = require("helmet");
const data = require("./data.json");

const routes = require('./routes/index');
const assignmentRoutes = require('./routes/assignment');

const app = express();
app.locals.data = data;

app.use(helmet());
app.use(morganDebug('myapp:server','dev'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/assign', assignmentRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
	next(createError(500, err));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  next(createError(500, err));
});


module.exports = app;
