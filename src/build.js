const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const fs = require("fs");
const webpackConfig = require("./webpack.config.js");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const formatWebpackMessages = require("./formatWebpackMessages");

module.exports = function build(dsConfig) {
    const { entry, outputPath, manifestPath } = dsConfig;
    const entryPoints = {};
    for (x in entry) {
        entryPoints[x] = path.join(process.cwd(), entry[x]);
    }

    const outPath = path.join(process.cwd(), outputPath);

    const mergedConfig = merge(webpackConfig, {
        entry: entryPoints,
        output: {
            path: outPath,
        },
        plugins: [
            new WebpackManifestPlugin({
                publicPath: manifestPath,
            }),
        ],
    });

    webpack(mergedConfig, (err, stats) => {
        let messages;
        if (err) {
            let errMessage = err.message;

            messages = formatWebpackMessages({
                errors: [errMessage],
                warnings: [],
            });

            console.log(messages);
        } else {
            messages = formatWebpackMessages(
                stats.toJson({ all: false, warnings: true, errors: true })
            );
            console.log(messages);
        }
        if (messages.errors.length) {
            // Only keep the first error. Others are often indicative
            // of the same problem, but confuse the reader with noise.
            if (messages.errors.length > 1) {
                messages.errors.length = 1;
            }
            return new Error(messages.errors.join("\n\n"));
        }

        const resolveArgs = {
            stats,
            warnings: messages.warnings,
        };

        return resolveArgs;
    });
};
