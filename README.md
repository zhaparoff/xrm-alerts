# XRM Alerts

[![Build Status](https://dev.azure.com/zhaparoff/Xrm%20Tools/_apis/build/status/GitHub/xrm-alerts?branchName=master)](https://dev.azure.com/zhaparoff/Xrm%20Tools/_build/latest?definitionId=18&branchName=master)
[![Release Status](https://vsrm.dev.azure.com/zhaparoff/_apis/public/Release/badge/72b78504-1837-4642-98f5-78bb00200d42/2/2)](https://dev.azure.com/zhaparoff/Xrm%20Tools/_release?definitionId=2)
[![npm](https://img.shields.io/npm/v/xrm-alerts)](https://www.npmjs.com/package/xrm-alerts)


Was forked from original [Alert.js](https://github.com/PaulNieuwelaar/alertjs) (v2.1) by Paul Nieuwelaar to bundle it into single js file, with embedded styles and images.

Having one file simplifies deployment a lot. Also this allows to include the bundle as a dependency into lager bundles and easily publish it as NPM package.


Changes from original version:
 - Migrated to TypeScript
 - Type definitions added to use in other bundles
 - Styles and images bundled into output JS using Webpack
 - Some method parameters removed, due to bundling, some were reordered
 - NPM package published


**WARNING**: This version is **NOT** fully compatible with the original Alert.js, since it contains a bunch of breaking changes in the method signatures.
