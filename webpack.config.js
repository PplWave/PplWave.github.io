const path = require('path');

module.exports = {
  mode: 'development', // Установите 'development' для разработки или 'production' для производства
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Изменено на '/' для общего случая
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Генерируемое имя файла будет содержать хэш
              outputPath: 'images/', // Путь к выходной папке для изображений
              publicPath: '/images/' // Публичный путь для доступа к изображениям
            }
          }ы
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jpg'], // Добавляем '.jpg'
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