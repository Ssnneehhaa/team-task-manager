# Team Task Manager

A modern full-stack MERN application for collaborative team project and task management with authentication, project organization, and task tracking.

---

## Live Demo

### Frontend

[https://team-task-manager-1234.netlify.app/](https://team-task-manager-1234.netlify.app/)

### Backend API

[https://team-task-manager-nh5u.onrender.com](https://team-task-manager-nh5u.onrender.com)

---

# Features

## Authentication

* User Signup
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login using Local Storage

## Project Management

* Create Projects
* View All Projects
* Organized Project Dashboard

## Task Management

* Create Tasks
* Assign Tasks to Projects
* Update Task Status
* Task Progress Tracking
* Task Status Categories:

  * To Do
  * In Progress
  * Done

## Dashboard

* Modern responsive dashboard
* Luxury beige themed UI
* Project overview
* Task overview
* Task status updates

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Frontend: Netlify / Render
* Backend: Render
* Version Control: GitHub

---

# Folder Structure

```bash
team-task-manager/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Ssnneehhaa/team-task-manager.git
```

```bash
cd team-task-manager
```

---

# Backend Setup

## 1. Navigate to Backend

```bash
cd backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Create `.env`

Create a `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 4. Start Backend Server

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## 1. Navigate to Frontend

```bash
cd frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## 4. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Signup

```http
POST /api/auth/signup
```

### Login

```http
POST /api/auth/login
```

---

## Projects

### Create Project

```http
POST /api/projects
```

### Get Projects

```http
GET /api/projects
```

---

## Tasks

### Create Task

```http
POST /api/tasks
```

### Get Tasks

```http
GET /api/tasks
```

### Update Task Status

```http
PUT /api/tasks/:id
```

---

# Deployment

## Backend Deployment (Render)

* Connected GitHub repository to Render
* Added environment variables:

  * MONGO_URI
  * JWT_SECRET
* Configured start command:

```bash
npm start
```

---

## Frontend Deployment (Netlify / Render)

Environment Variable:

```env
VITE_API_URL=YOUR_BACKEND_URL/api
```

Build Command:

```bash
npm run build
```

Publish Directory:

```bash
dist
```

---

# Demo Video

https://www.loom.com/share/70bf3ade0f01457aa59e3a0f6a6c30c3

```

---

# Future Improvements

- Team member invitations
- Role-based project management
- Drag-and-drop Kanban board
- Task due dates
- Notifications
- Real-time collaboration
- Dark mode
- AI task summaries

---

# Author

Sneha Singh

GitHub:
https://github.com/Ssnneehhaa

---

# Submission Checklist

- [x] Full-stack application completed
- [x] Frontend deployed
- [x] Backend deployed
- [x] MongoDB connected
- [x] GitHub repository uploaded
- [x] README added
- [ ] Demo video uploaded

---

# Thank You

This project was developed as part of a Full-Stack Team Task Manager Assignment to demonstrate frontend, backend, authentication, database, and deployment skills using the MERN stack.

```
