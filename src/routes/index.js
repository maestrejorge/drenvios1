const { Router } = require('express');
const product = require("./Products.js")
const price = require("./Price.js")
const users= require("./users.js")
const router = Router();


router.use("/products", product)
router.use("/", price)
router.use("/users", users)
router.use((req, res, next) => {
    const error = new Error("Ruta no definida");
    error.status = 404;
    res.status(404).json({ error: error.message }); // Agrega esta línea para enviar el mensaje del error
    next(error);
});

module.exports = router;