import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            email: "",
            password: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await loginUser(
                    formData
                );

            login(
                response.token
            );

            toast.success(
                "Login successful"
            );

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Invalid credentials"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div
            className="
                min-h-screen
                bg-[#FFFFFB]
                flex
                items-center
                justify-center
                px-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    bg-[#EAE5DC]
                    border
                    border-[#BEB8AF]
                    rounded-3xl
                    p-8
                    shadow-lg
                "
            >

                <h1
                    className="
                        text-3xl
                        font-bold
                        text-center
                        text-[#0B0B0C]
                    "
                >
                    PromptLibrary
                </h1>

                <p
                    className="
                        text-[#2E2E31]
                        opacity-70
                        text-center
                        mt-2
                    "
                >
                    Login to continue
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="
                        mt-8
                        space-y-5
                    "
                >

                    {/* Email */}

                    <div>

                        <label
                            className="
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-[#2E2E31]
                            "
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                bg-[#FFFFFB]
                                border
                                border-[#BEB8AF]
                                text-[#0B0B0C]
                                focus:outline-none
                                focus:border-[#2E2E31]
                                focus:ring-2
                                focus:ring-[#BEB8AF]
                            "
                        />

                    </div>

                    {/* Password */}

                    <div>

                        <label
                            className="
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-[#2E2E31]
                            "
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="
                                w-full
                                px-4
                                py-3
                                rounded-xl
                                bg-[#FFFFFB]
                                border
                                border-[#BEB8AF]
                                text-[#0B0B0C]
                                focus:outline-none
                                focus:border-[#2E2E31]
                                focus:ring-2
                                focus:ring-[#BEB8AF]
                            "
                        />

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            bg-[#2E2E31]
                            text-[#FFFFFB]
                            hover:bg-[#0B0B0C]
                            transition-all
                            py-3
                            rounded-xl
                            font-semibold
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        {
                            loading
                                ? "Logging In..."
                                : "Login"
                        }

                    </button>

                </form>

                <p
                    className="
                        text-center
                        text-[#2E2E31]
                        opacity-70
                        mt-6
                    "
                >

                    Don't have an account?

                    <Link
                        to="/register"
                        className="
                            ml-2
                            font-medium
                            text-[#0B0B0C]
                            hover:text-[#2E2E31]
                        "
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );
};

export default Login;