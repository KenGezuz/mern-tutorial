//connect mongodb to backend
const mongoose = require('mongoose');

//
const connectDB = async () => {
    try {
        //access mongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI);
        //if connected output
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }catch(error)   {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;