const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const juiceRoutes = require("./routes/juiceRoutes");
const cors=require("cors")

dotenv.config();

const app =express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/v1/", juiceRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});