const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {},
    mode: 'production',
    plugins: [
        // // add a hash to the filename of our bundles for easy and efficient cache busting.
        // new MiniCssExtractPlugin({
        //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        // })
        
        // copy over variables and let downstream modules compile 
        new CopyWebpackPlugin({
            patterns: [
                {
                    // copy static scss files into the dist dir to be used by LabKey module apps
                    from: '_immunespace.scss',
                    to: ''
                }
            ]
        }),
    ]
};