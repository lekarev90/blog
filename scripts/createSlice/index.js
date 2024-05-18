const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Need correct layer name: ${layers.join(' или ')}`);
}

if (!sliceName) {
  throw new Error('Provide slice name must be specified');
}

createTemplate(layer, sliceName);
