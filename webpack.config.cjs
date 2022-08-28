/* eslint-disable */
const path = require("path")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: {
    compiler: "./src/compiler/index.ts",
    engine:  "./src/engine/index.ts",
  },
  mode: "production",
  target: "node",
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs-static",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimize: false
  }
}
