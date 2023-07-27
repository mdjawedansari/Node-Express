const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL ||"mongodb://127.0.0.1:27017/auth";

const databaseconnect = () => {
    mongoose
    .connect(MONGODB_URL)({
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));


};


module.exports = databaseconnect;