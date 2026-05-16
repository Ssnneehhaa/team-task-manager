const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createTask
} = require("../controllers/taskController");

router.post("/", authMiddleware, createTask);

module.exports = router;