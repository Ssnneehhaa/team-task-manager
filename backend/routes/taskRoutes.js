const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createTask,
    getTasks,
    updateTaskStatus,
    deleteTask
} = require("../controllers/taskController");

router.post("/", authMiddleware, createTask);

router.get("/", authMiddleware, getTasks);

router.put("/:id", authMiddleware, updateTaskStatus);

router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;