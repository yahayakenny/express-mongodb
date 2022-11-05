const mongoose = require("mongoose");
require("dotenv/config");

//DB CONNECTION
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    console.log("Mongoose connected");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connect
