const connectToDatabase = require("../db.js");

async function getUserById(userId) {
    try {
        const db = await connectToDatabase();
        if(!db) throw "No dataBase Found"
        const user = await  db.collection('users').find({ id: userId }).toArray();
        if(!user) throw "No User Found"
        return user;
    } catch (error) {
        throw error;
    }
}
async function getAllusers(req, res) {
    try {
        const db = await connectToDatabase();
        const user =  db.collection('users').find({}).toArray();
        console.log(user)
        return user
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getUserById,
    getAllusers
};