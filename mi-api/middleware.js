const express = require("express");
const app = express();
//Con  const express app.use y const Port lo copie de appIndex.js y lo pegue aca
// siempre que tengo un archivo nuevo tengo que hacer estas declaraciones
//Middelware para que express entienda JSON en el body de las peticiones
//siempre hay que usarlo al inicio, porque cuando mandamos un post por body no entiende las peticiones
/* 🤓❗si salta un error en el modulo de ruta puede ser por el package.json que deje dos rutas funcionando*/
app.use(express.json());
// 🗣️ "Importamos el router modular desde nuestro archivo"
const router = require("./router");
// 🗣️ "Montamos el router en el prefijo '/api'"
// Esto significa que la ruta será POST /api/saludo
app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  //SI HACEMOS CLICK EN LA TERMINAL DONDE DICE HTTP://localhost:3000 ME LLEva directamente al la pagina
  console.log(`Servidor express escuchando en http://localhost:${PORT}`);
  console.log(" Ruta activa: POST /api/saludo");
});

