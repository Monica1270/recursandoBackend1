const express = require("express");
const app = express();

app.use(express.json());
//vamos a crear una base de datos simulada en memoria const mapStateToProps = (state) => ({})
// se pone let porque na va a ser una constante

let items = [];
let nextId = 1;

// primero vamos a usar el POST para crear.
//El cliente manda datos , nosotros creamos el recurso y devolvemos un código 201(creado)
/*=========================================POST==========================================*/
app.post("/items", (req, res) => {
    //nos traemos el name
    const { name } = req.body;
    //hacemos la validación 
    if (!name) {
        return res.status(400).json({ error: "El campo name es requerido"});
    }
        //crear el items
        const newItem = {id: nextId++, name};
        items.push(newItem);
        res.status(201).json(newItem);
 });
    /*=======================GET========================================*/
    //RED (CON ESTE CÓDIGO VAMOS A LEER TODOS LOS ITEMS)
    //El get sin id devuelve la colección completa por tal motivos identificamos los array con id
    app.get("/items", (req, res) => {
        //aca es si el usuario hizo todo bien traeme el imtes en formato json
        res.status(200).json(items);
    });
    // si quiero que me traiga un solo items lo debo solicitar con :id
    app.get("/items/:id", (req, res) => {
        //creamos una constante para parsear un entero, y luego con params buscamos el parametro o sea el id en el localhost
        const itemId = parseInt(req.params.id);
        const item = items.find((i) => i.id === itemId);//find sirve para buscar
        if (!item) {
            return res.status(404).json({ error: "Item no encontrado" });
        }
        res.status(200).json(item);
    });
    /**======================PUT O patch =========================================== */
    // Lo más complejo es el UPDATE es igual a actualización
    //Usamos put o patch para actualizar. se busca por id. Si existe lo pisamos
    app.put("/items/:id", (req, res) => {
        //se busca por id, por tal motivo se crean las constantes
        const itemId = parseInt(req.params.id);
        // name puede ser nombre de personas, nombres de frutas, nombres de auto, nombre de lo que sea
        const { name } = req.body;
        const itemIndex = items.findIndex((i) => i.id === itemId);

        //vamos a hacer la primera validación
        if (itemIndex === -1) {
            return res.status(404).json({ error: "Item no encontrado para actualizar" });
        }
        // segunda validación
        if (!name) {
            return res.status(404).json({ error: "El campo name es requerido"});
        }
        //finanlmente actualizamos el item a modificar
        items[itemIndex].name = name;
        res.status(200).json(items[itemIndex]);//este itemIndex es el que vamos a actualizar
    });
        /**===================DELETE ========================================= */
        app.delete("/items/:id", (req, res) => {
            //se busca por id, por tal motivo se crean las constantes
            const itemId = parseInt(req.params.id);
            const itemIndex = items.findIndex((i) => i.id === itemId);
            //validamos 
            if (itemIndex === -1) {
                return res.status(404).json({
                    error: "Item no encontrado para eliminar"
                });
            }
                //con splice lo que hago es borrar el espacio vacio, que dejo al eliminar el item seleccionado
                items.splice(itemIndex, 1);
                res.status(200).json({
                    message: `Item ${itemId} eliminado con éxito`});

            });




const PORT = 3000
app.listen(3000, () => {
    //SI HACEMOS CLICK EN LA TERMINAL DONDE DICE HTTP://localhost:3000 ME LLEva directamente al la pagina
    console.log(`CRUD en memoria corriendo en  HTTP://localhost:${PORT}`);
    console.log("  Rutas:");
    console.log("        -Post     /items");
    console.log("        -Get      /items");
    console.log("        -Get      /items/:id");
    console.log("        -Put      /items/:id");
    console.log("        -Delete   /items/:id");

});
