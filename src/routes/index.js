const { Router } = require('express');
const product = require("./Products.js")
const price = require("./Price.js")
const users= require("./users.js")
const welcome = require("./Welcome.js")
const router = Router();


router.use("/products", product)
router.use("/", price)
router.use("/", welcome)
router.use("/users", users)

router.use((req, res, next) => {
    const error = new Error('Ruta no definida');
    error.status = 404;
    next(error); 
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

module.exports = router;