const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",

    devServer: {
        port: 3001,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        },
    },

    entry: "./src/index.tsx",

    output: {
        publicPath: "auto",
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
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",

            exposes: {
                "./ProductsApp": "./src/App",
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

        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};