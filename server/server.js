require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/expertAcademy";

console.log("Connecting to MongoDB...");
mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log(" MongoDB Connected to:", MONGO_URI.includes("mongodb+srv") ? "Atlas" : "Local"))
    .catch(err => {
        console.error(" MongoDB Connection Error:", err.message);
    });

const path = require("path");

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Serving built frontend in production
const clientBuildPath = path.join(__dirname, "../new_client/dist");
app.use(express.static(clientBuildPath));

// Dashboard or SPA fallback
app.use((req, res) => {
    if (req.originalUrl.startsWith("/api")) return res.status(404).json({ error: "API route not found" });
    res.sendFile(path.join(clientBuildPath, "index.html"));
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(` Server running on port ${PORT}`));

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(` Port ${PORT} is already in use. Please stop the existing process.`);
    } else {
        console.error("Server Error:", err.message);
    }
    process.exit(1);
});
