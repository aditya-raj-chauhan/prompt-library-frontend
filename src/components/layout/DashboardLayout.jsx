import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
    return (
        <div
            className="
                min-h-screen
                bg-black
                text-white
                flex
                font-sans
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
                    relative
                "
            >
                {/* Subtle ambient background glow to match the premium theme */}
                <div 
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black pointer-events-none z-0" 
                />

                {/* Topbar */}
                <div className="relative z-10">
                    <Topbar />
                </div>

                {/* Page Content */}
                <main
                    className="
                        flex-1
                        overflow-y-auto
                        p-4
                        md:p-8
                        relative
                        z-10
                    "
                >
                    {/* Max-width container to keep content readable on ultra-wide screens */}
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;