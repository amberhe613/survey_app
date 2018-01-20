const express = require("express");
require("./services/passport");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

//Set up serves
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log("Serves started in ", PORT);
});