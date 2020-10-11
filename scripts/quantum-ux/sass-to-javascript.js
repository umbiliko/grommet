global.window = {};
const fs = require('fs');
const path = require('path');
const { stringify } = require('javascript-stringify');
const webpack = require('webpack');
const { camelCase, camelCaseTransformMerge: transform } = require('camel-case');
// if not found run `yarn build` first
const { deepMerge } = require('../../dist/utils');

const root = path.join(__dirname, '../../');
const specs = path.join(root, 'src', 'js', 'themes', 'microfocus', 'specs');
const moduleFileName = 'quantum-spec-module';

function filter(obj) {
  return Object.entries(obj)
    .filter(([key, val]) => {
      switch (typeof val) {
        case 'string':
          // remove icons
          if (val.startsWith('data:image/svg+xml;base64,')) {
            console.info('excluded', key);
            return false;
          }
          break;
      }
      return true;
    })
    .reduce((acc, [key, val]) => {
      if (val instanceof Object) {
        return Object.assign(acc, { [key]: filter(val) });
      }
      return Object.assign(acc, { [key]: val });
    }, {});
}

function formatFile(obj) {
  return (
    'export default ' + stringify(obj, null, ' ').replace(/(\\n)/gm, '\n') + ';'
  );
}

function inflate(obj, prefix = '$qtm-', split = '__') {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const value =
      val && typeof val === 'object' && !Array.isArray(val)
        ? inflate(val)
        : val;
    if (key.startsWith(prefix)) {
      const end = key.indexOf(split);
      if (end > 0) {
        const name = camelCase(key.substring(prefix.length, end), {
          transform,
        });
        const prop = camelCase(key.substring(end + split.length), {
          transform,
        });
        return deepMerge(acc, { [name]: { [prop]: value } });
      } else {
        const prop = camelCase(key.substring(prefix.length), { transform });
        return deepMerge(acc, { [prop]: value });
      }
    }
    return deepMerge(acc, { [camelCase(key, { transform })]: value });
  }, {});
}

const compiler = webpack(
  {
    mode: 'production',
    entry: path.join(__dirname, 'sass-extract.js'),
    devtool: false,
    output: {
      library: 'quantum',
      libraryTarget: 'commonjs-module',
      path: root,
      filename: moduleFileName + '.js',
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
  }
  console.log(`Webpack is done compiling ${moduleFileName}`);
  try {
    const raw = require(path.join(root, moduleFileName)).default;
    fs.writeFileSync(path.join(root, 'quantum-ux-raw.js'), formatFile(raw));
    const allFormatted = inflate(raw);
    const slimFormatted = inflate(filter(raw));
    fs.writeFileSync(
      path.join(root, 'quantum-ux-all.ts'),
      formatFile(allFormatted),
    );
    fs.writeFileSync(
      path.join(root, 'quantum-ux-slim.ts'),
      formatFile(slimFormatted),
    );
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
});
