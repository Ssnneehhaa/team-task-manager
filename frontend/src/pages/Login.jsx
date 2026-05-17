import { useState } from "react";
import API from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            alert("Login successful");

            window.location.href = "/dashboard";

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };

    return (

        <div className="min-h-screen bg-[#f6f1ea] flex items-center justify-center p-6">

            <div className="bg-[#efe5da] p-10 rounded-[35px] shadow-xl w-full max-w-md">

                <h1 className="text-4xl font-black text-[#3d2f27] mb-2 text-center">
                    Welcome Back
                </h1>

                <p className="text-[#7a6557] mb-8 text-center">
                    Login to continue managing your team.
                </p>

                <form
                    onSubmit={handleLogin}
                    className="space-y-4"
                >

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full p-4 rounded-2xl bg-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full p-4 rounded-2xl bg-white outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#3d2f27] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-[#7a6557]">

                    Don’t have an account?{" "}

                    <a
                        href="/signup"
                        className="font-bold text-[#3d2f27] hover:underline"
                    >
                        Signup
                    </a>

                </p>

            </div>

        </div>

    );

}

export default Login;
