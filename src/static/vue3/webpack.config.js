const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const {
  getExposedComponents,
  getAppName,
  generateRemoteRoutes,
} = require("./src/utils/utils");
process.env.VUE_APP_BASE_URL = "/";
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "."), // Ensure correct path
  mode: process.env.NODE_ENV || "development",
  // Entry point
  entry: "./src/main.ts",
  target: "web",
  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true, // Cleans the output directory before building
    publicPath: "auto", // Needed for Module Federation,
    chunkFilename: "[name].[contenthash].js",
  },
  // Resolve extensions and aliases
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@apps": path.resolve(__dirname, "../../apps"),
      "@root": path.resolve(__dirname, "../../"),
    },
  },
  // Module rules for different file types
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead", // Adjust based on your target browsers
                  useBuiltIns: "usage",
                  corejs: "3",
                },
              ],
            ],
          },
        },
      },
    ],
  },

  // Plugins
  plugins: [
    new VueLoaderPlugin(),
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only compress files > 10kb
      minRatio: 0.8, // Only compress if compression ratio is better than 0.8
    }),
    // Define BASE_URL as a global variable
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/"),
    }),
    new ModuleFederationPlugin({
      name: getAppName(),
      filename: "remoteEntry.js",
      exposes: getExposedComponents(),
      remotes: generateRemoteRoutes(),
      shared: {
        vue: { singleton: true, eager: true, requiredVersion: "^3.0.0" },
        vuex: { singleton: true, eager: true, requiredVersion: "^4.0.0" },
        "vue-router": {
          singleton: true,
          eager: true,
          requiredVersion: "^4.0.0",
        },
        // Add more shared dependencies as needed
      },
    }),
  ],

  //   // DevServer configuration
  devServer: {
    historyApiFallback: true,
    hot: true,
    watchFiles: ["src/**/*"],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  devtool:
    process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
};
