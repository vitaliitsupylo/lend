const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/main.js'
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.module = {
        rules: [{
            test: /\.js$/,
            exclude: '/(node_modules|bower_components)/',
            loaders: 'babel-loader',
            query: {
                presets: ['env']
            }
        },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true
                        }
                    }, 'sass-loader']
                })
            }
        ]
    };
    module.exports.plugins = [
        new ExtractTextPlugin({
            filename: './css/main.css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
} else {
    module.exports.module = {
        rules: [{
            test: /\.(scss|sass)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {url: false, sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            })
        }]
    };
    module.exports.devtool = "source-map";
    module.exports.plugins = [
        new ExtractTextPlugin({
            filename: './css/main.css'
        })
    ]

}
