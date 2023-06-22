let path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "./build"),
        filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
        rules: [{test: /\.js$/, exclude: /node_modules/}]
    }
}