const path = require('path');

module.exports = {
    entry: './wwwroot/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
};