const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from backend/.env or parent directories
dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Check environment variables
console.log("MONGODB_URI loaded:", !!process.env.MONGODB_URI);
console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "JWT Auth API is running",

        endpoints: {
            register: "POST /api/auth/register",
            login: "POST /api/auth/login",
            logout: "POST /api/auth/logout",
            me: "GET /api/auth/me (Bearer token required)"
        }
    });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server
const startServer = async () => {
    try {

        // Connect MongoDB first
        await connectDB();

        // Start Express server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error("Failed to start server:", error.message);

        process.exit(1);
    }
};

startServer();