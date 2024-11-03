const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const jokeRoutes = require("./routes/jokes");
require("dotenv").config();

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

console.log(process.env.MONGODB_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(limiter);

// Routes
app.use("/api/jokes", jokeRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Submit Jokes Service running on port ${PORT}`);
});

module.exports = app;
