module.exports = {
    compact: false,
    presets: [
        "@babel/react",
        [
            "@babel/env",
            {
                modules: false,
                targets: {
                    chrome: "25",
                    edge: "14",
                    firefox: "22",
                    ie: "11",
                    safari: "7",
                },
            },
        ],
    ],
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/transform-runtime",
        "@babel/plugin-proposal-class-properties",
    ],
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
    },
};
