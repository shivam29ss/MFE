const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: process.env.NODE_ENV || "development",

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "shell",

      remotes: {
        products: `promise new Promise((resolve, reject) => {
      const remoteUrl =
        window.__SHOPSPHERE_CONFIG__.PRODUCTS_MFE_URL;

      const script = document.createElement("script");

      script.src = remoteUrl + "/remoteEntry.js";

      script.onload = () => {
        const proxy = {
          get: (request) =>
            window.products.get(request),

          init: (arg) => {
            try {
              return window.products.init(arg);
            } catch (e) {
              console.log(
                "Products MFE already initialized"
              );
            }
          },
        };

        resolve(proxy);
      };

      script.onerror = () => {
        reject(
          new Error(
            "Unable to load Products MFE from " +
              remoteUrl
          )
        );
      };

      document.head.appendChild(script);
    })`,
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "19.2.8",
        },

        "react-dom": {
          singleton: true,
          requiredVersion: "19.2.8",
        },

        "react-router-dom": {
          singleton: true,
        },
      },
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

  devtool: "source-map",
};