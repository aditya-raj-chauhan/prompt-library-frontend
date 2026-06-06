import React, { useState, useEffect } from "react";
import {
    Compass,
    PlusSquare,
    FolderOpen,
    Bot,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Sparkles
} from "lucide-react";
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import useAuth from "../../hooks/useAuth";
// Removed getUserByEmail import

const Sidebar = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuth(); // If useAuth provides the token, destructure it here (e.g., const { logout, user, token } = useAuth();)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const menuItems = [
        { name: "Explore", icon: Compass, path: "/explore" },
        { name: "Create", icon: PlusSquare, path: "/create" },
        { name: "My Posts", icon: FolderOpen, path: "/my-posts" },
        { name: "Models", icon: Bot, path: "/models" }
    ];

    // Fetch fresh user data using the new JWT-secured endpoint
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Adjust this if your token is stored somewhere else (like inside useAuth context)
                const token = localStorage.getItem("token"); 

                if (!token) {
                    console.warn("No token found, skipping user fetch.");
                    return;
                }

                const response = await fetch("http://localhost:8080/api/users/logged-in", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error("Failed to fetch user data for sidebar", error);
            }
        };
        
        fetchUserData();
    }, []); // Dependency array is empty so it fetches on mount. Add token here if it comes from useAuth.

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <motion.aside
            initial={false}
            animate={{ 
                width: isCollapsed ? "88px" : "288px" 
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="
                min-h-screen
                bg-black
                border-r
                border-white/10
                flex
                flex-col
                justify-between
                py-6
                relative
                z-200
            "
        >
            {/* Toggle Collapse Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="
                    absolute
                    top-9
                    -right-3.5
                    w-7
                    h-7
                    flex
                    items-center
                    justify-center
                    bg-black
                    border
                    border-white/10
                    rounded-full
                    text-white/50
                    hover:text-white
                    hover:bg-zinc-800
                    hover:scale-110
                    transition-all
                    z-50
                    shadow-md
                "
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            {/* Top Section */}
            <div className="px-5 overflow-hidden">
                {/* Logo */}
                <div 
                    className="mb-10 flex items-center gap-3 cursor-pointer group"
                    onClick={() => navigate('/')}
                >
                    <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-colors shrink-0">
                        <Sparkles size={20} className="text-white" />
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.h1
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="text-xl font-bold text-white tracking-tight whitespace-nowrap"
                            >
                                PromptLibrary
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </div>

                {/* Profile */}
                <div
                    onClick={() => navigate("/profile")}
                    className="
                        group
                        cursor-pointer
                        flex
                        items-center
                        gap-3
                        p-2
                        rounded-2xl
                        bg-white/[0.02]
                        border
                        border-white/5
                        mb-8
                        hover:bg-white/[0.05]
                        hover:border-white/10
                        transition-all
                        duration-300
                    "
                >
                    <img
                        src={profileData?.profileImage || user?.profileImage || user?.avatar || "https://i.pravatar.cc/150"}
                        alt="profile"
                        className="
                            w-10
                            h-10
                            rounded-xl
                            object-cover
                            border
                            border-white/10
                            group-hover:border-white/30
                            transition-colors
                            shrink-0
                        "
                    />

                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="min-w-0 flex-1 whitespace-nowrap overflow-hidden"
                            >
                                <h2 className="font-medium text-white text-sm truncate">
                                    {profileData?.username || profileData?.fullName || user?.username || user?.name || "Member"}
                                </h2>
                                <p className="text-[11px] text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-wider mt-0.5">
                                    View Profile
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <nav className="space-y-1.5">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className="outline-none block"
                            >
                                {({ isActive }) => (
                                    <div className={`
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        px-3
                                        py-2.5
                                        rounded-xl
                                        transition-all
                                        duration-200
                                        font-medium
                                        text-sm
                                        group
                                        ${isActive 
                                            ? "bg-white/[0.08] text-white shadow-sm" 
                                            : "text-white/50 hover:bg-white/[0.03] hover:text-white/90"
                                        }
                                    `}>
                                        {/* Active Indicator Line */}
                                        {isActive && (
                                            <motion.div 
                                                layoutId="activeIndicator"
                                                className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white rounded-r-full"
                                            />
                                        )}

                                        <Icon 
                                            size={18} 
                                            className={`shrink-0 transition-transform duration-200 ${isActive ? "text-white" : "group-hover:scale-110"}`} 
                                        />
                                        
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span 
                                                    initial={{ opacity: 0, w: 0 }}
                                                    animate={{ opacity: 1, w: "auto" }}
                                                    exit={{ opacity: 0, w: 0 }}
                                                    className="whitespace-nowrap"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="px-5 overflow-hidden">
                <button
                    onClick={handleLogout}
                    className={`
                        flex
                        items-center
                        gap-3
                        w-full
                        p-3
                        rounded-xl
                        border
                        border-transparent
                        text-white/40
                        font-medium
                        text-sm
                        hover:bg-red-500/10
                        hover:text-red-400
                        hover:border-red-500/20
                        transition-all
                        duration-200
                        group
                        ${isCollapsed ? "justify-center" : "justify-start"}
                    `}
                    title={isCollapsed ? "Logout" : ""}
                >
                    <LogOut size={18} className="shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="whitespace-nowrap"
                            >
                                Logout
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </motion.aside>
    );
};

export default Sidebar;