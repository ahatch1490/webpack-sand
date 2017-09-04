var webpack = require("webpack"); 

 
module.exports = {
  entry: "./foo.js",
  output: {
    path: __dirname,
  filename: "bundle.js"
  },
  plugins: [
            new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery", "window.jQuery": "jquery"
        })
      ],
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"} 
    ]
 }
};

