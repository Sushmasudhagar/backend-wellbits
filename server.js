
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dietRoutes = require("./routes/dietRoutes");

const authRoutes =
    require("./routes/authRoutes");

const profileRoutes =
    require("./routes/profileRoutes");
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
app.use(express.json());
app.use(
    "/api/diet",
    dietRoutes
);

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});