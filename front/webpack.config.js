module.exports = {
  mode: "development",
  entry: {
    index: "./scripts/index.js",
    handler: "./scripts/handler.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name]Bundle.js",
  },
};
