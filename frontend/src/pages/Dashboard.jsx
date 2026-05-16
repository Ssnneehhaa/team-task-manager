import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import API from "../services/api";

function Dashboard() {

    const token = localStorage.getItem("token");

    const [projectName, setProjectName] = useState("");

    const [projects, setProjects] = useState([]);

    const [tasks, setTasks] = useState([]);

    const [taskTitle, setTaskTitle] = useState("");

    const [selectedProject, setSelectedProject] = useState("");

    if (!token) {

        return <Navigate to="/login" />;

    }

    // fetch projects
    const fetchProjects = async () => {

        try {

            const res = await API.get("/projects", {
                headers: {
                    authorization: token
                }
            });

            setProjects(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    // fetch tasks
    const fetchTasks = async () => {

        try {

            const res = await API.get("/tasks", {
                headers: {
                    authorization: token
                }
            });

            setTasks(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    // create project
    const createProject = async () => {

        try {

            await API.post(
                "/projects",
                {
                    name: projectName
                },
                {
                    headers: {
                        authorization: token
                    }
                }
            );

            alert("Project created successfully");

            setProjectName("");

            fetchProjects();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Project creation failed"
            );

        }

    };

    // create task
    const createTask = async () => {

        try {

            await API.post(
                "/tasks",
                {
                    title: taskTitle,
                    project: selectedProject
                },
                {
                    headers: {
                        authorization: token
                    }
                }
            );

            alert("Task created successfully");

            setTaskTitle("");

            fetchTasks();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Task creation failed"
            );

        }

    };

    // update task status
    const updateTaskStatus = async (taskId, status) => {

        try {

            await API.put(
                `/tasks/${taskId}`,
                { status },
                {
                    headers: {
                        authorization: token
                    }
                }
            );

            fetchTasks();

        } catch (error) {

            console.log(error);

            alert("Failed to update task");

        }

    };

    useEffect(() => {

        fetchProjects();

        fetchTasks();

    }, []);

    return (

        <div className="min-h-screen bg-[#f6f1ea] text-[#3d2f27] p-8">

            <div className="max-w-6xl mx-auto">

                {/* HEADER */}

                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h1 className="text-5xl font-black tracking-tight">
                            Team Task Manager
                        </h1>

                        <p className="mt-2 text-lg text-[#7a6557]">
                            Elegant productivity for modern teams.
                        </p>

                    </div>

                    <button
                        onClick={() => {

                            localStorage.removeItem("token");

                            window.location.href = "/login";

                        }}
                        className="bg-[#3d2f27] text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
                    >
                        Logout
                    </button>

                </div>

                {/* FORMS */}

                <div className="grid md:grid-cols-2 gap-8 mb-10">

                    {/* CREATE PROJECT */}

                    <div className="bg-[#efe5da] p-6 rounded-3xl shadow-lg">

                        <h2 className="text-2xl font-bold mb-5">
                            Create Project
                        </h2>

                        <input
                            type="text"
                            placeholder="Project name"
                            value={projectName}
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                            className="w-full p-4 rounded-2xl bg-white outline-none mb-4"
                        />

                        <button
                            onClick={createProject}
                            className="w-full bg-[#8c6a5d] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition"
                        >
                            Create Project
                        </button>

                    </div>

                    {/* CREATE TASK */}

                    <div className="bg-[#efe5da] p-6 rounded-3xl shadow-lg">

                        <h2 className="text-2xl font-bold mb-5">
                            Create Task
                        </h2>

                        <input
                            type="text"
                            placeholder="Task title"
                            value={taskTitle}
                            onChange={(e) =>
                                setTaskTitle(e.target.value)
                            }
                            className="w-full p-4 rounded-2xl bg-white outline-none mb-4"
                        />

                        <select
                            value={selectedProject}
                            onChange={(e) =>
                                setSelectedProject(e.target.value)
                            }
                            className="w-full p-4 rounded-2xl bg-white outline-none mb-4"
                        >

                            <option value="">
                                Select Project
                            </option>

                            {
                                projects.map((project) => (

                                    <option
                                        key={project._id}
                                        value={project._id}
                                    >
                                        {project.name}
                                    </option>

                                ))
                            }

                        </select>

                        <button
                            onClick={createTask}
                            className="w-full bg-[#3d2f27] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition"
                        >
                            Create Task
                        </button>

                    </div>

                </div>

                {/* PROJECTS */}

                <div className="mb-10">

                    <h2 className="text-3xl font-black mb-5">
                        Your Projects
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">

                        {
                            projects.map((project) => (

                                <div
                                    key={project._id}
                                    className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-1 transition"
                                >

                                    <h3 className="text-2xl font-bold">
                                        {project.name}
                                    </h3>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* TASKS */}

                <div>

                    <h2 className="text-3xl font-black mb-5">
                        Your Tasks
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        {
                            tasks.map((task) => (

                                <div
                                    key={task._id}
                                    className="bg-white rounded-3xl p-6 shadow-md"
                                >

                                    <div className="flex justify-between items-start mb-4">

                                        <div>

                                            <h3 className="text-2xl font-bold">
                                                {task.title}
                                            </h3>

                                            <p className="text-[#7a6557] mt-1">
                                                {task.project?.name}
                                            </p>

                                        </div>

                                        <div className="bg-[#f3ebe3] px-4 py-2 rounded-full text-sm font-semibold">
                                            {task.status}
                                        </div>

                                    </div>

                                    <select
                                        value={task.status}
                                        onChange={(e) =>
                                            updateTaskStatus(
                                                task._id,
                                                e.target.value
                                            )
                                        }
                                        className="w-full p-4 rounded-2xl bg-[#f6f1ea] outline-none"
                                    >

                                        <option value="To Do">
                                            To Do
                                        </option>

                                        <option value="In Progress">
                                            In Progress
                                        </option>

                                        <option value="Done">
                                            Done
                                        </option>

                                    </select>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;