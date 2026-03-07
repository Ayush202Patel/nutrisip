const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const juiceRoutes = require("./routes/juiceRoutes");

dotenv.config();

const app =express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/v1/", juiceRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});