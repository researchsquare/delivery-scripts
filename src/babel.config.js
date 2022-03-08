module.exports = {
    compact: false,
    presets: [
        require.resolve("@babel/preset-react"),
        [
            require.resolve("@babel/preset-env"),
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
        require.resolve("@babel/plugin-proposal-object-rest-spread"),
        require.resolve("@babel/plugin-transform-runtime"),
        require.resolve("@babel/plugin-proposal-class-properties"),
    ],
    env: {
        test: {
            plugins: [
                require.resolve("@babel/plugin-transform-modules-commonjs"),
            ],
        },
    },
};
