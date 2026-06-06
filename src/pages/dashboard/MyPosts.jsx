import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadGrid from "../../components/upload/UploadGrid";

import { getMyUploads } from "../../services/uploadService";

const MyPosts = () => {
    const [uploads, setUploads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyUploads();
    }, []);

    const fetchMyUploads = async () => {
        try {
            setLoading(true);
            const response = await getMyUploads();
            setUploads(response);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to load your uploads"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            {/* Header Section */}
            <div
                className="
                    mb-12
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                    gap-6
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <span
                        className="
                            inline-block
                            px-3
                            py-1
                            rounded-full
                            bg-white/[0.05]
                            border
                            border-white/10
                            text-white/70
                            text-xs
                            font-medium
                            tracking-wider
                            uppercase
                            mb-4
                        "
                    >
                        Dashboard
                    </span>

                    <h1
                        className="
                            text-4xl
                            md:text-5xl
                            font-bold
                            text-white
                            tracking-tight
                        "
                    >
                        My Posts
                    </h1>

                    <p
                        className="
                            mt-3
                            text-base
                            md:text-lg
                            text-white/50
                        "
                    >
                        Manage and explore your uploaded prompts.
                    </p>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="
                        bg-white/[0.02]
                        border
                        border-white/10
                        rounded-[24px]
                        px-6
                        py-5
                        shadow-lg
                        backdrop-blur-sm
                        min-w-[180px]
                    "
                >
                    <p
                        className="
                            text-sm
                            text-white/50
                            mb-1
                            font-medium
                        "
                    >
                        Total Posts
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-white
                        "
                    >
                        {uploads.length}
                    </h2>
                </motion.div>
            </div>

            {/* Posts Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <UploadGrid
                    uploads={uploads}
                    loading={loading}
                />
            </motion.div>
        </DashboardLayout>
    );
};

export default MyPosts;