const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connection to MONGO_DB Successful !');

    } catch (err){
        console.error("Connection Error : " , err.mmessange);
        process.exit(1);
    }

}
module.exports = connectDB;