const express = require('express');
const app = express();

//Middelware para que express entienda JSON en el body de las peticiones
//siempre hay que usarlo al inicio, porque cuando mandamos un post por body no entiende las peticiones
app.use(express.json()),
  
app.get("/", (req, res) => {
    res.json({ mensaje: "Bienvenidoa la app Express Basica" })
  });
//req es lo que solicita el cliente
// res es como respondemos nosotros

app.post("/echo", (req, res) => {
  console.log("Body recibido:", req.body);
  //se pone res.json porque lo necesitamos y nos esta ayudando el Middelware
  
  res.json(req.body);
})

const PORT = 3000
app.listen(3000, () =>{
  //SI HACEMOS CLICK EN LA TERMINAL DONDE DICE HTTP://localhost:3000 ME LLEva directamente al la pagina
  console.log(`Servidor express escuchando en HTTP://localhost:${PORT}`)})

