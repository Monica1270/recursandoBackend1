
const fs = require('fs');
const path = require('path');
let input = '';
process.stdin.on('data', chunk => {
  input += chunk;
});
process.stdin.on('end', () => {
  const relativePath = input.trim();
  const absolutePath = path.join(__dirname, relativePath);
  try {
    // Leer archivo JSON de forma síncrona
    const data = fs.readFileSync(absolutePath, 'utf8');
    const json = JSON.parse(data);
    // Incrementar version o crearla si no existe
    if (typeof json.version === 'number') {
      json.version += 1;
    } else {
      json.version = 1;
    }
    // Guardar archivo actualizado
    fs.writeFileSync(absolutePath, JSON.stringify(json, null, 2), 'utf8');
    // Imprimir nuevo valor de version
    console.log(json.version);
  } catch (error) {
    console.error('Error:', error.message);
  }
});

process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  const commands = lines.slice(1, n + 1);

  const packageJson = {};

  commands.forEach(commandLine => {
    const [key, ...rest] = commandLine.split(' ');
    const value = rest.join(' ');

    // Asignar la propiedad al objeto packageJson
    packageJson[key] = value;
  });

  console.log(JSON.stringify(packageJson, null, 2));
});
