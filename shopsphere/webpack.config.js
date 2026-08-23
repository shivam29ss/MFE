const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },

  devtool: "source-map"
};