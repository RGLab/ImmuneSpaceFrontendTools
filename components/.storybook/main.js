const path = require("path");
module.exports = {
    stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-essentials"],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loaders: ["babel-loader", "ts-loader"],
        });

        config.module.rules.push({
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
        });

        config.resolve.extensions.push(".ts", ".tsx", ".scss");

        // Return the altered config
        return config;
    },
};
