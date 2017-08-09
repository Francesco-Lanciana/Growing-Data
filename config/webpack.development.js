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
  parts.loadImages(),
  parts.loadFonts(),
  parts.extractHTML({
    template: path.join(PATHS.app, 'index.template.ejs'),
  }),
]);

module.exports = () => {
  return developmentConfig;
};
