  const path = require('path');

  module.exports = {
    mode: 'development', // Установите 'development' для разработки или 'production' для производства
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/', // Изменено на '/' для корректной работы путей к ассетам
    },
    module: {
      rules: [
        {
          // Обработка JS и JSX файлов
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // Обработка CSS файлов
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          // Обработка изображений
          test: /\.(png|jpeg|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]', // Настройка выходного пути для изображений
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true,
    },
  };
