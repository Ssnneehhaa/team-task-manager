const Task = require("../models/Task");

exports.createTask = async (req, res) => {

    try {

        const {
            title,
            description,
            dueDate,
            priority,
            assignedTo,
            project
        } = req.body;

        if (!title || !project) {

            return res.status(400).json({
                message: "Title and project are required"
            });

        }

        const task = await Task.create({
            title,
            description,
            dueDate,
            priority,
            assignedTo,
            project
        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getTasks = async (req, res) => {

    try {

        const tasks = await Task.find()
            .populate("assignedTo", "name email")
            .populate("project", "name");

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.updateTaskStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.deleteTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};