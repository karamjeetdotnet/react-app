const path = require("path");
module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: 'bundle.min.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        hot: true,
        hotOnly: true,
        inline: true,
        openPage: path.join('views', 'index.html'),
        overlay: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchContentBase: true,
        port: 9000
    }
};