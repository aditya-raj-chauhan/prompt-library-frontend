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
                border-b
                border-[#BEB8AF]/30
                bg-[#FFFFFB]
                flex
                items-center
                justify-between
                px-6
            "
        >
            {/* Logo */}

            <div
                className="
                    flex
                    items-center
                    gap-2
                "
            >
                <h1
                    className="
                        text-2xl
                        font-bold
                        text-[#2E2E31]
                    "
                >
                    PromptLibrary
                </h1>
            </div>

            {/* Search */}

            <SearchBar />

            {/* Logout */}

            <button
                onClick={handleLogout}
                className="
                    flex
                    items-center
                    gap-2
                    bg-[#2E2E31]
                    text-[#FFFFFB]
                    hover:bg-[#0B0B0C]
                    px-4
                    py-2
                    rounded-xl
                    transition-all
                    shadow-sm
                "
            >
                <LogOut size={18} />

                <span>
                    Logout
                </span>
            </button>
        </header>
    );
};

export default Topbar;