 const fs = require ('fs');
//Leer contenido de un archivo
fs.readFile('./unidad3/config.json', 'utf8', (error, data)=>{
    if (error) throw error;
    console.log(data);
}) 
//el error que tuve CUANDO LE PUSE LA RUTA DE ACCESO ./UNIDAD3 AHI ME MOSTRO LOS DATOS

//El módulo path facilita el manejo de rutas de archivos de forma portátil entre diferentes sistemas operativos.
/* //Ejemplo de uso: construir rutas absolutas o relativas para acceder a archivos sin errores.
const path = require('path');

const fullPath = path.join(__dirname, 'data', 'users.json');
console.log(fullPath); */

//El módulo http permite crear servidores web básicos y manejar solicitudes y respuestas HTTP sin frameworks externos.
/* */

//El módulo crypto ofrece funciones criptográficas básicas como hashes, generación de tokens y cifrado.
// lo que se ve en consola 6d24e7c922308514509e5b47d354b5c35b6a13aceedb448664d83c093a0e9463
//const crypto = require('crypto');

//const hash = crypto.createHash('sha256').update('miTextoSecreto').digest('hex');
//console.log(hash);//
