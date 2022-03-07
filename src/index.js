#!/usr/bin/env node
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const args = process.argv.slice(2);

if (args[0] === "build") {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            console.error(info.errors);
        }

        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        // Log result...
    });
} else {
    throw new Error(
        "The only currently supported command is: delivery-scripts build"
    );
}
