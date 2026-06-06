import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadForm from "../../components/upload/UploadForm";

import { createUpload } from "../../services/uploadService";

const CreatePrompt = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            const response = await createUpload(formData);
            toast.success("Prompt created successfully");
            navigate(`/upload/${response.id}`);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to create prompt"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Create Prompt
                    </h1>

                    <p className="text-white/50 mt-2 text-sm md:text-base">
                        Share your best prompts with the community.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <UploadForm
                        onSubmit={handleSubmit}
                        loading={loading}
                    />
                </motion.div>
            </div>
        </DashboardLayout>
    );
};

export default CreatePrompt;