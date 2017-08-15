const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
};

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  parts.generateSourceMaps({ type: 'cheap-module-source-map' }),
  parts.loadStyleSheets({ exlude: /node_modules/ }),
  parts.loadImages({options: {limit: 25000}}),
  parts.loadFonts(),
  parts.loadJavaScript({
    include: PATHS.app,
    exclude: /(node_modules|bower_components)/,
  }),
  parts.extractHTML({
    template: path.join(PATHS.app, 'index.template.ejs'),
  }),
]);

module.exports = () => {
  return developmentConfig;
};
