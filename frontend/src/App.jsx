import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

  return (

    <div>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </div>

  );

}

export default App;