const { global } = require('../quantum-ux-all');

Object.entries(global).forEach(([key, obj]) => {
  const filename = path.join(specs, toSnakeCase(key) + '.spec.ts');
  const content = formatFile(obj);
  fs.writeFileSync(filename, content);
  console.log(filename, content);
});

function toSnakeCase(str) {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}