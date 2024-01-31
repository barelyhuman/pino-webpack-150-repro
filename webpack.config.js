const { PinoWebpackPlugin } = require("pino-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "index.cjs",
  },
  target: "node",
  plugins: [new PinoWebpackPlugin({ transports: ["pino-pretty"] })],
  optimization: {
    minimize: false,
  },
};
