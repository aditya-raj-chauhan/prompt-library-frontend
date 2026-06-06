import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadGrid from "../../components/upload/UploadGrid";

import { getAllUploads } from "../../services/uploadService";

const Explore = () => {
    const [uploads, setUploads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUploads();
    }, []);

    const fetchUploads = async () => {
        try {
            setLoading(true);
            const response = await getAllUploads();
            setUploads(response);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to load uploads"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Explore Prompts
                </h1>
                
                <p className="text-white/50 mt-2 text-sm md:text-base">
                    Discover prompts shared by creators.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <UploadGrid
                    uploads={uploads}
                    loading={loading}
                />
            </motion.div>
        </DashboardLayout>
    );
};

export default Explore;