# XRM Alerts

Was forked from original Alert.js (v2.1) by Paul Nieuwelaar to bundle it into single js file, with embedded styles and images.

Having one file simplifies deployment a lot. Also this allows to include the bundle as a dependency into lager bundles and easily publish it as NPM package.


## WARNING
This version is **NOT** fully compatible with the original Alert.js, since it contains a bunch of breaking changes in the method signatures.


Changes from original version:
 - Migrated to TypeScript
 - Type definitions added to use in other bundles
 - Styles and images bundled into output JS using Webpack
 - Some method parameters removed, due to bundling, some were reordered
 - NPM package published

Anton Zhaparov, 2019
