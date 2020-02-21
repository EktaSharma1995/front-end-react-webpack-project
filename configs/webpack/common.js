// shared config (dev and prod)
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader"); //speed-up compilation
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ["babel-loader", "source-map-loader"],
      //   exclude: /node_modules/
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }, //The option importLoaders allows you to configure
          //how many loaders before css-loader should be applied to @imported resources.
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&esModule:false&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  performance: {
    hints: false
    //False means do nothing. Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are found.
    //We recommend using hints: "error" during production builds to help prevent deploying production bundles that are too large, impacting webpage performance.
  }
};
