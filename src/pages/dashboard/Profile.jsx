import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import ProfileBanner from "../../components/profile/ProfileBanner";
import ProfileUploads from "../../components/profile/ProfileUploads";

import { getMyUploads } from "../../services/uploadService";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    const [profileData, setProfileData] = useState(null);
    const [uploads, setUploads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.warn("No token found, skipping profile fetch.");
                return;
            }

            const response = await fetch("http://localhost:8080/api/users/logged-in", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setProfileData(data);
            } else {
                console.error("Failed to fetch fresh user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        const fetchUploadsData = async () => {
            try {
                setLoading(true);
                const uploadsResponse = await getMyUploads();
                setUploads(uploadsResponse);
            } catch (error) {
                toast.error(
                    error.response?.data?.message || "Failed to load uploads"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
        fetchUploadsData();
    }, []);

    // ── Image upload handlers ──────────────────────────────────────────────

    const handleProfileImageUpload = async (file) => {
        const email = displayUser?.email;
        if (!email) {
            toast.error("User email not found");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", file);

        const toastId = toast.loading("Uploading profile image…");
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:8080/api/users/profile-image", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                    // Do NOT set Content-Type — browser sets it with boundary for multipart
                },
                body: formData
            });

            if (!response.ok) throw new Error("Upload failed");

            const updated = await response.json();
            setProfileData((prev) => ({ ...prev, profileImage: updated.profileImage }));
            toast.success("Profile image updated!", { id: toastId });
        } catch (err) {
            console.error(err);
            toast.error("Failed to upload profile image", { id: toastId });
        }
    };

    const handleBannerImageUpload = async (file) => {
        const email = displayUser?.email;
        if (!email) {
            toast.error("User email not found");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", file);

        const toastId = toast.loading("Uploading banner image…");
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:8080/api/users/banner-image", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) throw new Error("Upload failed");

            const updated = await response.json();
            setProfileData((prev) => ({ ...prev, bannerImage: updated.bannerImage }));
            toast.success("Banner image updated!", { id: toastId });
        } catch (err) {
            console.error(err);
            toast.error("Failed to upload banner image", { id: toastId });
        }
    };

    // ─────────────────────────────────────────────────────────────────────

    // Prioritize freshly fetched profile data, fallback to auth context user
    const displayUser = profileData || user;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Hero Profile */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProfileBanner
                        bannerImage={displayUser?.bannerImage}
                        profileImage={displayUser?.profileImage}
                        username={displayUser?.username}
                        fullName={displayUser?.fullName}
                        bio={displayUser?.bio}
                        website={displayUser?.website}
                        location={displayUser?.location}
                        onProfileImageUpload={handleProfileImageUpload}
                        onBannerImageUpload={handleBannerImageUpload}
                    />
                </motion.div>

                {/* Stats & User Details */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {/* Stat Card 1: Uploads */}
                    <motion.div
                        variants={cardVariants}
                        className="
                            bg-white/[0.02]
                            border border-white/10
                            rounded-3xl p-6
                            text-center shadow-sm backdrop-blur-sm
                            hover:bg-white/[0.04] hover:border-white/20
                            transition-all duration-300
                            flex flex-col justify-center
                        "
                    >
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            {uploads.length}
                        </h2>
                        <p className="text-white/50 mt-1 text-sm font-medium uppercase tracking-widest">
                            Prompts
                        </p>
                    </motion.div>

                    {/* Stat Card 2: Username */}
                    <motion.div
                        variants={cardVariants}
                        className="
                            bg-white/[0.02]
                            border border-white/10
                            rounded-3xl p-6
                            text-center shadow-sm backdrop-blur-sm
                            hover:bg-white/[0.04] hover:border-white/20
                            transition-all duration-300
                            flex flex-col justify-center min-w-0
                        "
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight truncate px-2">
                            @{displayUser?.username || "anonymous"}
                        </h2>
                        <p className="text-white/50 mt-1 text-sm font-medium uppercase tracking-widest">
                            Username
                        </p>
                    </motion.div>

                    {/* Stat Card 3: Full Name */}
                    <motion.div
                        variants={cardVariants}
                        className="
                            bg-white/[0.02]
                            border border-white/10
                            rounded-3xl p-6
                            text-center shadow-sm backdrop-blur-sm
                            hover:bg-white/[0.04] hover:border-white/20
                            transition-all duration-300
                            flex flex-col justify-center min-w-0
                        "
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight truncate px-2">
                            {displayUser?.fullName || displayUser?.email || "Member"}
                        </h2>
                        <p className="text-white/50 mt-1 text-sm font-medium uppercase tracking-widest">
                            {displayUser?.fullName ? "Name" : "Account"}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Uploads Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ProfileUploads uploads={uploads} loading={loading} />
                </motion.div>

            </div>
        </DashboardLayout>
    );
};

export default Profile;