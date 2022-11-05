const { MongoClient } = require("mongodb");
require("dotenv/config");

//DB CONNECTION
async function connect() {
  const mongo_client = new MongoClient(process.env.MONGO_DB_CONNECTION);
  try {
    await mongo_client.connect();
    console.log("MongoDB connected properly");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connect
