const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const srcRoot = path.resolve(__dirname, "src");
const dstRoot = path.resolve(__dirname, "dist");

module.exports = {
    entry: path.join(srcRoot, "ts/alert.ts"),
    output: {
        path: dstRoot,
        filename: "index.js",
        library: "Alert",
        libraryTarget: "umd"
    },
    externals: [
        /^(jquery|\$)$/i
    ],
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.(png|gif|ico|jpg|jpeg|bmp)$/i,
                loader: "url-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useCache: true
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: path.join(srcRoot, "typings"),
                to: path.join(dstRoot)
            }
        ])
    ]
};
