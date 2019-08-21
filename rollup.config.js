import path from "path";
import ts from "@wessberg/rollup-plugin-ts";
import url from "rollup-plugin-url";
import del from "rollup-plugin-delete";
import cpy from "rollup-plugin-cpy";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";


const rootDir = path.resolve(__dirname);
const input = path.join(rootDir, "src", "ts", "alert.ts");


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
            }),
            cpy({
                files: "src/typings/index.d.ts",
                dest: "dist"
            }),
            ts({
                exclude: [
                    "node_modules/**/*.*",
                ]
            }),
            url({
                emitFiles: false
            })
        ]
    },
    {
        input: input,
        output: {
            file: pkg.main,
            format: "umd",
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
            resolve(),
            ts({
                transpiler: "babel",
                exclude: [
                    "node_modules/**/*.*",
                ]
            }),
            url({
                emitFiles: false
            })
        ]
    }
];
