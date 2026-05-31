import {
    Compass,
    PlusSquare,
    FolderOpen,
    Bot,
    LogOut
} from "lucide-react";

import {
    NavLink,
    useNavigate
} from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Sidebar = () => {

    const navigate = useNavigate();

    const {
        logout,
        user
    } = useAuth();

    const menuItems = [
        {
            name: "Explore",
            icon: Compass,
            path: "/"
        },
        {
            name: "Create",
            icon: PlusSquare,
            path: "/create"
        },
        {
            name: "My Posts",
            icon: FolderOpen,
            path: "/my-posts"
        },
        {
            name: "Models",
            icon: Bot,
            path: "/models"
        }
    ];

    const handleLogout = () => {

        logout();

        navigate("/login");
    };

    return (

        <aside
            className="
                w-72
                min-h-screen
                bg-white
                border-r
                border-gray-200
                flex
                flex-col
                justify-between
                px-5
                py-6
            "
        >

            {/* Top */}

            <div>

                {/* Logo */}

                <div
                    className="
                        mb-8
                        px-2
                    "
                >

                    <h1
                        className="
                            text-2xl
                            font-bold
                            text-black
                        "
                    >
                        PromptLibrary
                    </h1>

                </div>

                {/* Profile */}

                <div
                    onClick={() =>
                        navigate("/profile")
                    }
                    className="
                        cursor-pointer
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-[20px]
                        bg-gray-50
                        border
                        border-gray-100
                        mb-8
                        hover:bg-gray-100
                        transition-all
                    "
                >

                    <img
                        src={
                            user?.profileImage ||
                            user?.avatar ||
                            "https://i.pravatar.cc/150"
                        }
                        alt="profile"
                        className="
                            w-12
                            h-12
                            rounded-full
                            object-cover
                        "
                    />

                    <div
                        className="
                            min-w-0
                        "
                    >

                        <h2
                            className="
                                font-semibold
                                text-black
                                truncate
                            "
                        >
                            {
                                user?.username ||
                                user?.name ||
                                "User"
                            }
                        </h2>

                        <p
                            className="
                                text-sm
                                text-gray-500
                            "
                        >
                            View Profile
                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <nav
                    className="
                        space-y-2
                    "
                >

                    {menuItems.map((item) => {

                        const Icon =
                            item.icon;

                        return (

                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({
                                    isActive
                                }) =>
                                    `
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3
                                    rounded-[16px]
                                    transition-all
                                    font-medium

                                    ${
                                        isActive
                                            ? "bg-black text-white"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-black"
                                    }
                                    `
                                }
                            >

                                <Icon
                                    size={20}
                                />

                                <span>
                                    {item.name}
                                </span>

                            </NavLink>

                        );
                    })}

                </nav>

            </div>

            {/* Bottom */}

            <button
                onClick={
                    handleLogout
                }
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3
                    rounded-[16px]
                    bg-gray-100
                    text-black
                    font-medium
                    hover:bg-black
                    hover:text-white
                    transition-all
                "
            >

                <LogOut
                    size={18}
                />

                Logout

            </button>

        </aside>

    );
};

export default Sidebar;