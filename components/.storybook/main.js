const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');module.exports = {
    stories: ['../src/components/**/*.stories.[tj]s'],
    addons: ['@storybook/addon-knobs/register'],
    webpackFinal: async (config, { configType }) => {
    
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loaders: ['babel-loader', 'ts-loader']
        });
    
        config.module.rules.push({
            test: /\.module\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader', 
                    options: {
                        sourceMap: true
                    }
                }
            ]
        })
        
        config.module.rules.push({
            test: /\.scss$/,
            exclude: /\.module.(scss)$/,
            use: [
                'style-loader', 
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        });
    
        config.resolve.extensions.push('.ts', '.tsx', ".scss");
    
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css' ,
            chunkFilename: '[id].css'
        }))

        // Return the altered config
        return config;
    }
}
    
