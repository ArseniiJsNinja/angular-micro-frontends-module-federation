const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");

// const ContainerReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");
// const ContainerPlugin = require("webpack/lib/container/ContainerPlugin");

const shellConfig = {
  entry: ["./projects/shell/src/polyfills.ts", "./projects/shell/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "@ngtools/webpack" }]
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        customers: "customers",
        pnc: "pnc"
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/shell/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/shell/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([{ from: "projects/shell/src/assets", to: "assets" }]),
    new HtmlWebpackPlugin({
      template: "./projects/shell/src/index.html"
    })
  ],
  output: {
    filename: "[id].[name].js",
    path: __dirname + "/dist/shell",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

const customersConfig = {
  entry: [
    "./projects/customers/src/polyfills.ts",
    "./projects/customers/src/main.ts"
  ],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/customers"),
    port: 3000
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "@ngtools/webpack" }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "customers",
      library: { type: "var", name: "customers" },
      filename: "remoteEntry.js",
      exposes: {
        Component: "./projects/customers/src/app/app.component.ts",
        Module: "./projects/customers/src/app/customers/customers.module.ts"
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/customers/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/customers/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([{ from: "projects/customers/src/assets", to: "assets" }]),
    new HtmlWebpackPlugin({
      template: "./projects/customers/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].js",
    path: __dirname + "/dist/customers",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

const pncConfig = {
  entry: ["./projects/pnc/src/polyfills.ts", "./projects/pnc/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/pnc"),
    port: 4000
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "@ngtools/webpack" }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pnc",
      library: { type: "var", name: "pnc" },
      filename: "remoteEntry.js",
      exposes: {
        Component: "./projects/pnc/src/app/app.component.ts",
        Module: "./projects/pnc/src/app/pnc/pnc.module.ts"
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/pnc/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/pnc/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([{ from: "projects/pnc/src/assets", to: "assets" }]),
    new HtmlWebpackPlugin({
      template: "./projects/pnc/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:4000/",
    filename: "[name].js",
    path: __dirname + "/dist/pnc",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

module.exports = [shellConfig, customersConfig, pncConfig];
