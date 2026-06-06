import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { loginUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await loginUser(formData);
            login(response.token);
            toast.success("Login successful");
            navigate("/");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Invalid credentials"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="
                min-h-screen
                bg-black
                relative
                flex
                items-center
                justify-center
                px-4
                overflow-hidden
            "
        >
            {/* Subtle ambient background glow */}
            <div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black pointer-events-none z-0" 
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                    w-full
                    max-w-md
                    bg-white/[0.02]
                    border
                    border-white/10
                    rounded-[32px]
                    p-8
                    md:p-10
                    shadow-2xl
                    backdrop-blur-md
                    relative
                    z-10
                "
            >
                {/* Logo / Header */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="bg-white/10 p-3 rounded-2xl mb-4">
                        <Sparkles size={28} className="text-white" />
                    </div>
                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-center
                            text-white
                            tracking-tight
                        "
                    >
                        PromptLibrary
                    </h1>
                    <p
                        className="
                            text-white/50
                            text-center
                            mt-2
                            font-medium
                        "
                    >
                        Welcome back. Login to continue.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    {/* Email */}
                    <div>
                        <label
                            className="
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-white/90
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
                            placeholder="you@example.com"
                            className="
                                w-full
                                px-5
                                py-3.5
                                rounded-2xl
                                bg-white/[0.03]
                                border
                                border-white/5
                                text-white
                                placeholder:text-white/30
                                focus:outline-none
                                focus:border-white/30
                                focus:ring-1
                                focus:ring-white/30
                                focus:bg-white/[0.05]
                                transition-all
                                duration-200
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
                                text-white/90
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
                            placeholder="••••••••"
                            className="
                                w-full
                                px-5
                                py-3.5
                                rounded-2xl
                                bg-white/[0.03]
                                border
                                border-white/5
                                text-white
                                placeholder:text-white/30
                                focus:outline-none
                                focus:border-white/30
                                focus:ring-1
                                focus:ring-white/30
                                focus:bg-white/[0.05]
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            bg-white
                            text-black
                            hover:bg-white/90
                            active:scale-[0.98]
                            transition-all
                            duration-200
                            mt-4
                            py-4
                            rounded-2xl
                            font-bold
                            text-lg
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            shadow-lg
                        "
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </form>

                {/* Footer Link */}
                <p
                    className="
                        text-center
                        text-white/50
                        mt-8
                        text-sm
                    "
                >
                    Don't have an account?
                    <Link
                        to="/register"
                        className="
                            ml-2
                            font-semibold
                            text-white
                            hover:text-white/80
                            transition-colors
                        "
                    >
                        Register
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;