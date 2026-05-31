import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";

import ProfileBanner from "../../components/profile/ProfileBanner";
import ProfileUploads from "../../components/profile/ProfileUploads";

import {
    getMyUploads
} from "../../services/uploadService";

import useAuth from "../../hooks/useAuth";

const Profile = () => {

    const { user } = useAuth();

    const [uploads, setUploads] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchProfileData();

    }, []);

    const fetchProfileData = async () => {

        try {

            setLoading(true);

            const uploadsResponse =
                await getMyUploads();

            setUploads(
                uploadsResponse
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load profile"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <DashboardLayout>

            <div
                className="
                    max-w-7xl
                    mx-auto
                    space-y-8
                "
            >

                {/* Hero Profile */}

                <ProfileBanner
                    bannerImage={
                        user?.bannerImage
                    }
                    profileImage={
                        user?.profileImage
                    }
                    username={
                        user?.username
                    }
                    bio={
                        user?.bio
                    }
                    website={
                        user?.website
                    }
                    location={
                        user?.location
                    }
                />

                {/* Stats */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-3
                        gap-4
                    "
                >

                    <div
                        className="
                            bg-[#EAE5DC]
                            border
                            border-[#BEB8AF]
                            rounded-3xl
                            p-6
                            text-center
                        "
                    >
                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-[#0B0B0C]
                            "
                        >
                            {uploads.length}
                        </h2>

                        <p
                            className="
                                text-[#2E2E31]
                                opacity-70
                            "
                        >
                            Prompts
                        </p>
                    </div>

                    <div
                        className="
                            bg-[#EAE5DC]
                            border
                            border-[#BEB8AF]
                            rounded-3xl
                            p-6
                            text-center
                        "
                    >
                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-[#0B0B0C]
                            "
                        >
                            {user?.username || "-"}
                        </h2>

                        <p
                            className="
                                text-[#2E2E31]
                                opacity-70
                            "
                        >
                            Creator
                        </p>
                    </div>

                    <div
                        className="
                            bg-[#EAE5DC]
                            border
                            border-[#BEB8AF]
                            rounded-3xl
                            p-6
                            text-center
                        "
                    >
                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-[#0B0B0C]
                            "
                        >
                            AI
                        </h2>

                        <p
                            className="
                                text-[#2E2E31]
                                opacity-70
                            "
                        >
                            Prompt Designer
                        </p>
                    </div>

                </div>

                {/* Uploads */}

                <ProfileUploads
                    uploads={uploads}
                    loading={loading}
                />

            </div>

        </DashboardLayout>
    );
};

export default Profile;