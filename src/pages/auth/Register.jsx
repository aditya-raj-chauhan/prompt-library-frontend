import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";

const Register = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            username: "",
            fullName: "",
            email: "",
            password: "",
            bio: "",
            website: "",
            location: ""
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

            await registerUser(
                formData
            );

            toast.success(
                "Registration successful"
            );

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Registration failed"
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
                py-8
            "
        >

            <div
                className="
                    w-full
                    max-w-2xl
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
                    Create Account
                </h1>

                <p
                    className="
                        text-center
                        text-[#2E2E31]
                        opacity-70
                        mt-2
                    "
                >
                    Join PromptLibrary
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="
                        mt-8
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-5
                    "
                >

                    {/* Username */}

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
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            required
                            value={formData.username}
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

                    {/* Full Name */}

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
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
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

                    {/* Bio */}

                    <div className="md:col-span-2">

                        <label
                            className="
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-[#2E2E31]
                            "
                        >
                            Bio
                        </label>

                        <textarea
                            rows={4}
                            name="bio"
                            value={formData.bio}
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
                                resize-none
                                focus:outline-none
                                focus:border-[#2E2E31]
                                focus:ring-2
                                focus:ring-[#BEB8AF]
                            "
                        />

                    </div>

                    {/* Website */}

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
                            Website
                        </label>

                        <input
                            type="text"
                            name="website"
                            value={formData.website}
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

                    {/* Location */}

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
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={formData.location}
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

                    {/* Submit */}

                    <div className="md:col-span-2">

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
                                    ? "Creating Account..."
                                    : "Register"
                            }
                        </button>

                    </div>

                </form>

                <p
                    className="
                        text-center
                        text-[#2E2E31]
                        opacity-70
                        mt-6
                    "
                >

                    Already have an account?

                    <Link
                        to="/login"
                        className="
                            ml-2
                            font-medium
                            text-[#0B0B0C]
                            hover:text-[#2E2E31]
                        "
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );
};

export default Register;