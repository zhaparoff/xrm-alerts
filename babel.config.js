module.exports = function () {
    const presets = [
        [
            "@babel/preset-env",
            {
                "debug": false,
                "modules": false,
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": false
                },
                "targets": {
                    "ie": "11"
                }
            }
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
};
