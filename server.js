require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const healthRoutes = require("./routes/healthRoutes");
const lifestyleRoutes = require("./routes/lifestyleRoutes");
const workstyleRoutes = require("./routes/workstyleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/health", healthRoutes);
app.use("/api/lifestyle", lifestyleRoutes);
app.use("/api/workstyle", workstyleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});