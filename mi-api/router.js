
/* se crea este archivo  
se hizo un archivo Router porque en vez de poner todo en un archivo principal 
(hay que pensar en la estructura de mercado libre) si se mete todo en un index.js
tendríamos un archivo de millones de lineas que lo hace muy lento
con  express.router partimos nuestras obligaciones en modulos separados es como tener 
mini servidores para que luego el archivo  principal (index)
app.use appi router
Esta es la arquitectura base que voy a ver en todos los proyectos
*/
const express = require("express");
const router = express.Router();
//si no declaramos el router no lo podemos usarlo
const validarNombre = (req, res, next) => {
    const { name } = req.body;
    //hacemos la lógica
    if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            error: "El campo 'name' es obligatorio y debe ser una cadena no vacía",
        });
    }
    //si todo esto funciona bien le decimos que siga 
    next();
}

//Nunca nos debemos de olvidar de declar la ruta 
router.post("/saludo", validarNombre, (req, res) => {
    res.status(200).json({message: `Hola, ${req.body.name}`});
});

// no olvidar de exportar el router
module.exports = router;