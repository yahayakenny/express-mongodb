const express = require("express");
const router = express.Router();
const dbName = "test";
const { MongoClient } = require("mongodb");
const mongo_client = new MongoClient(process.env.MONGO_DB_CONNECTION);

//POST SCHOOLS
router.post("/", async (req, res) => {
  let schoolDocument = {
    name: req.body.name,
    email: req.body.email,
    is_registered: req.body.is_registered,
  };
  try {
    await mongo_client.connect();
    const db = await mongo_client.db(dbName).collection("schools");
    const school = await db.insertOne(schoolDocument);
    res.json(school);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await mongo_client.close();
  }
});

module.exports = router;
