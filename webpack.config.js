const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  watch: process.env.NODE_ENV === "production" ? false : true,
  entry: path.resolve(__dirname, "./src/index.js"),
  target: "web",
  output: {
    path: path.resolve(__dirname, "./lib"),
    libraryTarget: "umd",
    filename: "app.bundle.js",
    umdNamedDefine: true,
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};
