const Project = require("../models/Project");

exports.createProject = async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {

            return res.status(400).json({
                message: "Project name is required"
            });

        }

        const project = await Project.create({
            name,
            admin: req.user.id,
            members: [req.user.id]
        });

        res.status(201).json({
            message: "Project created successfully",
            project
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getProjects = async (req, res) => {

    try {

        const projects = await Project.find({
            members: req.user.id
        });

        res.status(200).json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};