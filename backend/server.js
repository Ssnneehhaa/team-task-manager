const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Railway / Production Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("API Running");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/test", require("./routes/testRoutes"));

app.use("/api/projects", require("./routes/projectRoutes"));

app.use("/api/tasks", require("./routes/taskRoutes"));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log("MongoDB Connected");

    app.listen(PORT, () => {

        console.log(`Server running on port ${PORT}`);

    });

})
.catch((err) => {

    console.log("MongoDB Error:", err.message);

});