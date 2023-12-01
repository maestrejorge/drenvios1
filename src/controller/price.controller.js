const productService = require("../services/product.service.js");
const userService = require("../services/users.services.js");

async function getPriceForUserAndProduct(req, res) {
    try {
        const { user_id, nombre_producto } = req.params;

        const user = await userService.getUserById(parseInt(user_id));
        const product = await productService.getProductByName(nombre_producto);
        
        if (user.length !== 0 && product.length !== 0) {
            const metadata = user[0].metadata;

            if (metadata !== undefined) {
                const specialPrices = metadata.precios_especiales;
                const specialPrice = specialPrices.find(price => price.nombre_producto === nombre_producto);

                if (specialPrice !== undefined) {
                    res.json({ precio_especial_personal: specialPrice.precio_especial_personal });
                } else {
                    res.json({ precio_base: product[0].precio_base });
                }
            } else {
                res.json({ precio_base: product[0].precio_base });
            }
        } else {
            res.status(404).json({ error: "No se encontró el usuario o el producto especificado." });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getAllusers(req, res) {
    try {
        const users = await userService.getAllusers()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



module.exports = {
    getPriceForUserAndProduct, 
    getAllusers
};