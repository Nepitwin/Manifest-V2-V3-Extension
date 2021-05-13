const { merge } = require('webpack-merge');
const common = require("./webpack.common.mf2.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map"
});
