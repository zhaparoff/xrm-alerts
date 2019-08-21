module.exports = function (api) {
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

    api.cache(true);

    return {
        presets,
        plugins
    };
};
