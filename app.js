require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
require("./config/db");

const foodRoutes =
require("./routes/foodRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
    "/uploads",
    express.static("uploads")
);

app.use(
    "/api/food",
    foodRoutes
);

app.listen(5000, () => {

    console.log(
        "Server Running on Port 5000"
    );
});