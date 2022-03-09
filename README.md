# delivery-scripts

A build toolkit built and maintained by the Delivery engineering team. This is kinda like `react-scripts` and inspired by `paypal-scripts`.


# Why?

We maintain several different applications that have custom build tooling. Managing all of those dependencies in each project was getting out of hand and we found ourselves frequently 
copy/pasting config between the projects. 

# Principles

 - Hide internals and expose an easy API that can evolve over the years
 - Developer experience above everything else (including performance if it comes down to that)
 - Easy to upgrade
 - Remove bloated dependency trees in client code


## Installation


```bash
  yarn add @researchsquarecompany/delivery-scripts
```
    
## Usage/Examples

Add a `ds.config.js` to the root of your application

```
module.exports = {
    outputPath: "dist/",
    manifestPath: "dist/",
    entry: {
        index: "./src/index.js",
    },
};
```

## Documentation

### outputPath
This is the folder where the built and bundled assets will end up.

### manifestPath
This is the folder where a manifest file will be generated upon successfull build.

### entry
An object of key values where the key will generate the name of the bundled file and the value is the location of the file you want to bundle.

