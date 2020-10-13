const path = require('path');
const webpack = require('webpack');
const root = path.join(__dirname, '../../');
const filename = 'quantum-ux-module.js';
const moduleFileName = path.join(root, filename);

const promise = new Promise((resolve, reject) => {
  const compiler = webpack(
    {
      mode: 'production',
      entry: path.join(__dirname, 'sass-extract.js'),
      devtool: false,
      output: {
        library: 'quantum',
        libraryTarget: 'commonjs-module',
        path: root,
        filename,
      },
      resolve: {
        extensions: ['.js', '.scss', '.css'],
        modules: [
          path.resolve(__dirname, 'quantum'),
          'node_modules',
          'node_modules/@micro-focus',
        ],
      },
      module: {
        rules: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.scss$/,
            loader: 'sass-extract-loader',
            options: {
              plugins: ['minimal'],
            },
          },
        ],
      },
    },
    (err, stats) => {
      // Stats Object
      if (err || stats.hasErrors()) {
        console.error(err);
      }
      // Done processing
    },
  );

  // "invalid" event fires when you have changed a file, and Webpack is
  // recompiling a bundle. WebpackDevServer takes care to pause serving the
  // bundle, so if you refresh, it'll wait instead of serving the old one.
  // "invalid" is short for "bundle invalidated", it doesn't imply any errors.
  compiler.plugin('invalid', function() {
    clearConsole();
    console.log('Compiling...');
  });

  // "done" event fires when Webpack has finished recompiling the bundle.
  // Whether or not you have warnings or errors, you will get this event
  compiler.plugin('done', function(stats) {
    if (stats.hasErrors()) {
      console.error(stats.compilation.errors);
      reject();
    } else {
      console.log(`Webpack is done compiling ${moduleFileName}`);
      resolve();
    }
  });
});

async function extract() {
  await promise;
}

module.exports = {
  extract,
  moduleFileName,
};
