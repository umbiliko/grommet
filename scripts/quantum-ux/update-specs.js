const fs = require('fs');
const path = require('path');
const { stringify } = require('javascript-stringify');
const { allFileName } = require('./module-to-json');
const root = path.join(__dirname, '../../');
const specs = path.join(root, 'src', 'js', 'themes', 'microfocus', 'specs');

try {
  const { global } = require(allFileName);
  Object.entries(global).forEach(([key, obj]) => {
    const filename = path.join(specs, toSnakeCase(key) + '.spec.ts');
    const content = formatFile(obj);
    fs.writeFileSync(filename, content);
    console.log(filename, content);
  });
  console.log('Done updating specs');
} catch (err) {
  console.error(err);
}

function formatFile(obj) {
  return (
    'export default ' + stringify(obj, null, ' ').replace(/(\\n)/gm, '\n') + ';'
  );
}

function toSnakeCase(str) {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}
