const path = require('path')

var config = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
               },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)?$/,
                use: [
                    {
                      loader: 'url-loader',
                    },
                  ],
              }
        ]
    },

    devServer: {
        port: 3000,
        contentBase: './public',
        inline: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};

module.exports = config;