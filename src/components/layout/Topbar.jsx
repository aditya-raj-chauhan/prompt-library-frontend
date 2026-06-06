import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../common/SearchBar";
import useAuth from "../../hooks/useAuth";

const Topbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header
            className="
                h-20
                bg-black/100
                backdrop-blur-xl
                border-b
                border-white/10
                flex
                items-center
                justify-between
                px-6
                sticky
                top-0
                z-30
            "
        >
            {/* Logo */}
            <div className="flex items-center shrink-0">
                <h1 className="text-xl font-bold text-white tracking-tight">
                    PromptLibrary
                </h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-8 flex justify-start">
                <SearchBar />
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="
                    flex
                    items-center
                    gap-2
                    bg-white/[0.02]
                    border
                    border-white/10
                    text-white/70
                    hover:bg-red-500/10
                    hover:text-red-400
                    hover:border-red-500/20
                    px-4
                    py-2.5
                    rounded-xl
                    transition-all
                    duration-200
                    shadow-sm
                    text-sm
                    font-medium
                    shrink-0
                "
            >
                <LogOut size={16} />
                <span>Logout</span>
            </button>
        </header>
    );
};

export default Topbar;