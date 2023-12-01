const connectToDatabase = require("../db.js");

async function getAllProducts() {
    try {
        const db = await connectToDatabase();
        if (!db) throw "No Data "
        const allProduct = await db.collection('products').find({}).toArray();
        return allProduct
    } catch (error) {
        throw error;
    }
}


async function getProductByName(productName) {
    try {
        const db = await connectToDatabase();
        const product = await db.collection('products').find({ nombre: productName }).toArray()
        return product;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductByName
};