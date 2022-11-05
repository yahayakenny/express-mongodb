//EXTERNAL IMPORTS
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const dbConnection = require("./db_connection/db_connection")
const app = express();

//INTERNAL IMPORTS
const schoolRoutes = require("./routes/schools");
const userRoutes = require("./routes/users");

///MIDDLEWARES 
app.use(cors())
app.use(bodyParser.json())
app.use("/schools", schoolRoutes);
app.use("/users", userRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("Home page");
});

//DB CONNECTION
dbConnection()

//SERVER
app.listen(3000);
