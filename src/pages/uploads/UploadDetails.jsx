import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Copy, ArrowLeft, Check } from "lucide-react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Loader from "../../components/common/Loader";

import { getUploadById } from "../../services/uploadService";

const UploadDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [upload, setUpload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        fetchUpload();
    }, [id]);

    const fetchUpload = async () => {
        try {
            setLoading(true);
            const response = await getUploadById(id);
            setUpload(response);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to load upload"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCopyPrompt = async () => {
        try {
            await navigator.clipboard.writeText(upload.prompt);
            setIsCopied(true);
            toast.success("Prompt copied to clipboard!");
            
            // Reset copy icon after 2 seconds
            setTimeout(() => setIsCopied(false), 2000);
        } catch {
            toast.error("Failed to copy prompt");
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[50vh]">
                    <Loader />
                </div>
            </DashboardLayout>
        );
    }

    if (!upload) {
        return (
            <DashboardLayout>
                <div className="text-center text-white/50 py-20 font-medium">
                    Upload not found.
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto"
            >
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white/50 hover:text-white mb-6 transition-colors font-medium text-sm w-fit"
                >
                    <ArrowLeft size={16} />
                    Back to Explore
                </button>

                <div className="bg-white/[0.02] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Image Section */}
                        <div className="bg-black/50 border-r border-white/5 relative min-h-[300px] lg:min-h-full flex items-center justify-center p-6 lg:p-12">
                            <img
                                src={upload.imageUrl}
                                alt={upload.title}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl relative z-10 border border-white/10"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12 flex flex-col h-full">
                            
                            {/* Header */}
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight break-words">
                                    {upload.title}
                                </h1>
                                <p className="mt-4 text-white/60 leading-relaxed text-lg break-words">
                                    {upload.description}
                                </p>
                            </div>

                            {/* Creator Metadata */}
                            <div className="flex items-center justify-between mt-8 pb-8 border-b border-white/10 shrink-0">
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-white text-lg shrink-0">
                                        {upload.username?.charAt(0)?.toUpperCase() || "?"}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-white truncate">
                                            {upload.username || "Anonymous"}
                                        </p>
                                        <p className="text-sm text-white/40">Creator</p>
                                    </div>
                                </div>
                                <span className="text-sm text-white/40 font-medium shrink-0 ml-4">
                                    {upload.createdAt
                                        ? new Date(upload.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })
                                        : "Unknown Date"}
                                </span>
                            </div>

                            {/* Tags */}
                            {upload.tags?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-8 shrink-0">
                                    {upload.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 text-sm font-medium tracking-wide"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Prompt Box */}
                            <div className="mt-10 flex-1 flex flex-col min-h-0">
                                <div className="flex items-center justify-between mb-4 shrink-0">
                                    <h2 className="text-xl font-bold text-white tracking-tight">
                                        Prompt
                                    </h2>
                                    <button
                                        onClick={handleCopyPrompt}
                                        className="
                                            flex items-center gap-2 px-4 py-2 
                                            bg-white text-black rounded-xl text-sm font-bold 
                                            hover:bg-white/90 active:scale-95 transition-all
                                        "
                                    >
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.div
                                                key={isCopied ? "check" : "copy"}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                {isCopied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                                            </motion.div>
                                        </AnimatePresence>
                                        {isCopied ? "Copied!" : "Copy"}
                                    </button>
                                </div>

                                <div className="
                                    flex-1
                                    bg-black/50
                                    border border-white/10
                                    rounded-[24px]
                                    p-6
                                    text-white/80
                                    whitespace-pre-wrap
                                    leading-relaxed
                                    overflow-y-auto
                                    max-h-[350px]
                                    font-mono
                                    text-sm
                                    shadow-inner
                                    [&::-webkit-scrollbar]:hidden
                                    [-ms-overflow-style:none]
                                    [scrollbar-width:none]
                                ">
                                    {upload.prompt}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </DashboardLayout>
    );
};

export default UploadDetails;