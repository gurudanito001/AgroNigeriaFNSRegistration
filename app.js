const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require('cors');

const DelegateRoutes = require("./routes/DelegateRoutes");

// parse application/json
app.use(BodyParser.json());
app.use(cors());

app.use("/api/delegate", DelegateRoutes);
app.post("/wakeup", function(req, res){
    res.send("Awake")
})

module.exports = app;