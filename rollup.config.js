import path from "path";
import ts from "@wessberg/rollup-plugin-ts";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import cssNano from "cssnano";
import autoprefixer from "autoprefixer";
import pkg from "./package.json";


const rootDir = path.resolve(__dirname);


export default {
    input: path.join(rootDir, "src", "ts", "alert.ts"),
    output: [
        {
            file: "dist/alert.js",
            format: "iife",
            name: "Alert",
            globals: {
                "jquery": "$",
                "jquery": "jQuery"
            }
        },
        {
            file: pkg.main,
            format: "cjs",
            name: "Alert",
            globals: {
                "jquery": "$",
                "jquery": "jQuery"
            }
        },
        {
            file: pkg.module,
            format: "esm",
            name: "Alert",
            globals: {
                "jquery": "$",
                "jquery": "jQuery"
            }
        }
    ],
    external: [
        "jquery"
    ],
    plugins: [
        del({
            targets: "dist/*"
        }),
        postcss({
            inject: false,
            plugins: [
                autoprefixer(),
                url({
                    url: "inline"
                }),
                cssNano()
            ]
        }),
        ts({
            exclude: [
                "node_modules/**/*.*",
            ]
        })
    ]
};
