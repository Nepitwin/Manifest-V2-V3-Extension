const { merge } = require('webpack-merge');
const common = require("./webpack.common.mf3.js");

module.exports = merge(common, {
  mode: "production"
});
