# XRM Alerts

[![Build Status](https://dev.azure.com/zhaparoff/xrm-alerts/_apis/build/status/xrm-alerts?branchName=master)](https://dev.azure.com/zhaparoff/xrm-alerts/_build/latest?definitionId=7&branchName=master)

Was forked from original Alert.js (v2.1) by Paul Nieuwelaar to bundle it into single js file, with embedded styles and images.

Having one file simplifies deployment a lot. Also this allows to include the bundle as a dependency into lager bundles and easily publish it as NPM package.


Changes from original version:
 - Migrated to TypeScript
 - Type definitions added to use in other bundles
 - Styles and images bundled into output JS using Webpack
 - Some method parameters removed, due to bundling, some were reordered
 - NPM package published


### WARNING
This version is **NOT** fully compatible with the original Alert.js, since it contains a bunch of breaking changes in the method signatures.


Anton Zhaparov, 2019
