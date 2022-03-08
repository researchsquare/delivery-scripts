# delivery-scripts

Kinda like `react-scripts` and inspired by `paypal-scripts`

This is the toolchain we will use to build legacy apps, or JavaScript apps that do not use a framework.

```
ds.config.js

const path = require("path");

module.exports = {
    outputPath: "dist/",
    manifestPath: "dist/",
    entry: {
        index: "./src/index.js",
    },
};

```

