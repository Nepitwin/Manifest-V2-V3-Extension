const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: path.join(__dirname, "src/manifest/v2/ts/background.ts")
  },
  output: {
    path: path.join(__dirname, "dist/mf2"),
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
            { from: 'ressource' },
            { from: 'src/manifest/v2/ressource' },
        ]
    })
]
};
