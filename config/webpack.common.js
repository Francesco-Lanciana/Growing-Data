const path = require('path');

exports.config = ({ entry, buildPath }) => ({
  context: path.resolve(__dirname, "../app"),
  entry: {
    app: entry,
  },
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "../app/components"),
      path.resolve(__dirname, "../app/styles"),
      path.resolve(__dirname, "../data"),
    ],
    extensions: [".js", ".json", ".scss", ".ejs"],
    alias: {
      ComponentStyles: path.resolve(__dirname, '../app/styles/components/'),
    }
  },
});
