//EXTERNAL IMPORTS
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose_dbConnection = require("./db_connection/mongoose")
// const mongo_dbConnection = require("./db_connection/mongo_db")

const app = express();

//INTERNAL IMPORTS
//>>>>mongodb
// const schoolRoutes = require("./routes/schools_");
//>>>>mongoose
const schoolRoutes = require("./routes/schools");


///MIDDLEWARES 
app.use(cors())
app.use(bodyParser.json())
app.use("/schools", schoolRoutes);


//ROUTES
app.get("/", (req, res) => {
  res.send("Home page");
});


//DB CONNECTION
mongoose_dbConnection()
// mongo_dbConnection()


//SERVER
app.listen(3000);
