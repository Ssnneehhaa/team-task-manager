import { useState } from "react";
import API from "../services/api";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await API.post("/auth/signup", {
                name,
                email,
                password
            });

            alert("Signup successful");

            window.location.href = "/login";

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Signup failed"
            );

        }

    };

    return (

        <div className="min-h-screen bg-[#f6f1ea] flex items-center justify-center p-6">

            <div className="bg-[#efe5da] p-10 rounded-[35px] shadow-xl w-full max-w-md">

                <h1 className="text-4xl font-black text-[#3d2f27] mb-2 text-center">
                    Create Account
                </h1>

                <p className="text-[#7a6557] mb-8 text-center">
                    Join your team workspace beautifully.
                </p>

                <form
                    onSubmit={handleSignup}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full p-4 rounded-2xl bg-white outline-none"
                    />

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
                        className="w-full bg-[#8c6a5d] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition"
                    >
                        Signup
                    </button>

                </form>

                <p className="text-center mt-6 text-[#7a6557]">

                    Already have an account?{" "}

                    <a
                        href="/login"
                        className="font-bold text-[#3d2f27] hover:underline"
                    >
                        Login
                    </a>

                </p>

            </div>

        </div>

    );

}

export default Signup;
