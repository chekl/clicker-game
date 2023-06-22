let path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
}