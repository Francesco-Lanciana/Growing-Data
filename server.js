var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config')();

// Create our app
const app = express();
const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 8080;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

if (process.env.NODE_ENV == 'production') {
  // Tell it which folder we want to serve
  app.use(express.static('build'));
} else {
  app.use(webpackDevMiddleware(compiler, {
    stats: 'errors-only',
    //quiet: true,
    publicPath: webpackConfig.output.publicPath, // Same as `output.publicPath` in most cases.
  }));
}

// Start the server
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
