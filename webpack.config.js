const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    //punto de entrada
    entry: './src/index.js',
    //punto de salida
    output:{
        //donde se guarda el punto de salida
        path: path.resolve(__dirname, 'dist'),
        //el nombre del punto de salida
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                //ESta expresion dice que vamos a ocupar los archivos que terminan en js y jsx
                test: /\.(js|jsx)$/,
                //Excluye la carpeta de node_modules
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                //Dice que vamos a cargar todos los html
                test: /\.html$/,
                use:[{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        //Nos esta diciendo que tendremos una plantilla index.html y la vamos a empujar a index.html
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        })
    ]
}