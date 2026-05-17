const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://team-task-manager-bay-sigma.vercel.app"
        ],
        credentials: true
    })
);

app.use(express.json());