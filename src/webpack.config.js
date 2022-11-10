const path = require("path");
const webpack = require("webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require("./babel.config.js");

const env = process.env.NODE_ENV || "production";
const isDev = env === "development";

module.exports = {
    mode: isDev ? "development" : "production",
    resolve: {
        modules: ["node_modules"],
        fallback: {
            stream: false,
        },
        extensions: ["", ".js", ".jsx", ".es6"],
    },
    output: {
        filename: "[name].[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        ...babelConfig,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    require.resolve("css-loader"),
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext][query]",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            title: "Caching",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"],
        }),
    ],
    optimization: {
        minimize: !isDev,
        usedExports: true,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                common: {
                    name: "common",
                    minChunks: 2,
                    enforce: true,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                },
            },
        },
    },
    devtool: isDev ? 'eval-source-map' : 'hidden-source-map',
};
