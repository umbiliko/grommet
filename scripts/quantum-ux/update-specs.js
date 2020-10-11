const fs = require('fs');
const path = require('path');
const { stringify } = require('javascript-stringify');
const { allFileName } = require('./module-to-json');
const root = path.join(__dirname, '../../');
const specs = path.join(root, 'src', 'js', 'themes', 'quantum-ux');

(function () {
  try {
    if (!fs.existsSync(specs)) {
      fs.mkdirSync(specs, {
        recursive: true
      });
    }
    const { global } = require(allFileName);
    Object.entries(global).forEach(([key, obj]) => {
      const filename = path.join(specs, toSnakeCase(key) + '.ts');
      const content = formatFile(obj);
      fs.writeFileSync(filename, content);
    });
    console.log('Done updating specs at', specs);
  } catch (err) {
    console.error(err);
  }
  process.exit();
})();

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
