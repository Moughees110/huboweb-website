const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL;
    //  Deprecated options removed
    await mongoose.connect(mongoURI);
    console.log(` MongoDB Connected Successfully! Database `);
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};
module.exports = connectDB;