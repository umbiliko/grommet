const fs = require('fs');
const path = require('path');
const { stringify } = require('javascript-stringify');
const { camelCase, camelCaseTransformMerge: transform } = require('camel-case');
// if not found run `yarn build` first
const { deepMerge } = require('../../dist/utils');
const { moduleFileName } = require('./sass-to-javascript');
const root = path.join(__dirname, '../../');
const allFileName = path.join(root, 'quantum-ux-all.js');
const slimFileName = path.join(root, 'quantum-ux-slim.js');

function _filter(obj) {
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
        return Object.assign(acc, { [key]: _filter(val) });
      }
      return Object.assign(acc, { [key]: val });
    }, {});
}

function _inflate(obj, prefix = '$qtm-', split = '__') {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const value =
      val && typeof val === 'object' && !Array.isArray(val)
        ? _inflate(val)
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

function formatFile(obj) {
  return (
    'module.exports = ' +
    stringify(obj, null, ' ').replace(/(\\n)/gm, '\n') +
    ';'
  );
}
function inflate() {
  try {
    const raw = require(moduleFileName).default;
    fs.writeFileSync(path.join(root, 'quantum-ux-raw.js'), formatFile(raw));
    const allFormatted = _inflate(raw);
    const slimFormatted = _inflate(_filter(raw));
    fs.writeFileSync(allFileName, formatFile(allFormatted));
    fs.writeFileSync(slimFileName, formatFile(slimFormatted));
    console.log('Done inflating quantum-ux module');
  } catch (err) {
    console.error(err);
  }
  process.exit();
}

module.exports = {
  inflate,
  allFileName,
  slimFileName,
};
