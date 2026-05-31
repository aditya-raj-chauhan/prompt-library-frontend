import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
    return (
        <div
            className="
                min-h-screen
                bg-[#FFFFFB]
                text-[#0B0B0C]
                flex
            "
        >
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div
                className="
                    flex-1
                    flex
                    flex-col
                    overflow-hidden
                "
            >
                {/* Topbar */}
                <Topbar />

                {/* Page Content */}
                <main
                    className="
                        flex-1
                        overflow-y-auto
                        p-6
                        bg-[#FFFFFB]
                    "
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;