
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dietRoutes = require("./routes/dietRoutes");
mongoose.connect("mongodb://127.0.0.1:27017/HabitDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.use(express.json());
app.use(
    "/api/diet",
    dietRoutes
);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});