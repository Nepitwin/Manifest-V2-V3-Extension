const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

// Manifest V3
module.exports = {
  entry: {
    background: path.join(__dirname, "src/background.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CopyPlugin({
        patterns: [
            { from: 'ressource' }
        ]
    })
]
};
