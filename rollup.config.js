import path from "path";
import ts from "@wessberg/rollup-plugin-ts";
import del from "rollup-plugin-delete";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";


const rootDir = path.resolve(__dirname);
const input = path.join(rootDir, "src", "ts", "alert.ts");

const defaultPlugins = [
    ts({
        exclude: [
            "node_modules/**/*.*",
        ]
    })
];


export default [
    {
        input: input,
        output: {
            file: pkg.module,
            format: "esm",
            name: "Alert",
            globals: {
                "jquery": "$",
                "jquery": "jQuery"
            }
        },
        external: [
            "jquery"
        ],
        plugins: [
            del({
                targets: "dist/*"
            })
        ].concat(defaultPlugins)
    },
    {
        input: input,
        output: {
            file: pkg.browser,
            format: "iife",
            name: "Alert",
            globals: {
                "jquery": "$",
                "jquery": "jQuery"
            }
        },
        external: [
            "jquery"
        ],
        plugins: [resolve()].concat(defaultPlugins)
    }
];
