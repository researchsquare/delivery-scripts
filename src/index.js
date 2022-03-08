#!/usr/bin/env node

const dsConfig = require(`${process.cwd()}/ds.config.js`);
const args = process.argv.slice(2);
const build = require("./build");

if (!dsConfig) {
    throw new Error(
        "A ds.config.js file must exist in the root of your application"
    );
}

if (args[0] === "build") {
    executeBuild();
} else {
    throw new Error(
        "The only currently supported command is: delivery-scripts build"
    );
}

async function executeBuild() {
    await build(dsConfig);
}
