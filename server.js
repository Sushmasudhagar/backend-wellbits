require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const foodRoutes = require("./routes/foodRoutes");
const dietRoutes = require("./routes/dietRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");

const healthRoutes = require("./routes/healthRoutes");
const lifestyleRoutes = require("./routes/lifestyleRoutes");
const workstyleRoutes = require("./routes/workstyleRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(
    "/uploads",
    express.static("uploads")
);

// Existing Routes
app.use("/api/food", foodRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// New Routes
app.use("/api/health", healthRoutes);
app.use("/api/lifestyle", lifestyleRoutes);
app.use("/api/workstyle", workstyleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});