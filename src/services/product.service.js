const connectToDatabase = require("../db.js");

async function getAllProducts() {
    try {
        const db = await connectToDatabase();
        if (!db) throw "No Data "
        const info = await db.collection('products').find({}).toArray();
        console.log(info)
        return info
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