const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const srcRoot = path.resolve(__dirname, "src");
const dstRoot = path.resolve(__dirname, "dist");

module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    return {
        devtool: isDev ? "source-map" : false,
        entry: path.join(srcRoot, "ts/alert.ts"),
        output: {
            path: dstRoot,
            filename: "alert.js",
            library: "Alert",
            libraryTarget: "umd",
            libraryExport: "default"
        },
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
                    loader: "awesome-typescript-loader"
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    };
}
