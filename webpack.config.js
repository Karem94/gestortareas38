const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: [ 'style-loader', 'css-loader'], // Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, //regex para idientificar archivos js
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader:'babel-loader', // Loader para transpirar JS moderno a JS compatible con mas navegadores
                    options: {
                        presets: ['@babel/preset-env'], // Preset de Babel  para conver
                    }
                    }
            }
        ]
    },
    devtool: 'source-map', // Generar un source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde donde tenemos los archivos que mostramos al usuario
        compress: true, // Habilitando compresión gzip
        port: 9000, // Puerto de servidor de desarrollo 
    }
}