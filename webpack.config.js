const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/client/js/app.js",
    output: {
        path: path.resolve(__dirname, "bin/client/js"),
        library: "app",
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
