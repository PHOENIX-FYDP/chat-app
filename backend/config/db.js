const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;
// console.log(MONGO_URI);

const connectDB = async () => {
  const mongo = process.env.MONGO_URI;
  const MONGO_URI = mongo;
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    //process.exit();
  }
};

module.exports = connectDB;
