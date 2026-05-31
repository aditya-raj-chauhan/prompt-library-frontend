import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadGrid from "../../components/upload/UploadGrid";

import {
    getMyUploads
} from "../../services/uploadService";

const MyPosts = () => {

    const [uploads, setUploads] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchMyUploads();

    }, []);

    const fetchMyUploads = async () => {

        try {

            setLoading(true);

            const response =
                await getMyUploads();

            setUploads(response);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load your uploads"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <DashboardLayout>

            {/* Header */}

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

                <div>

                    <span
                        className="
                            inline-block
                            px-3
                            py-1
                            rounded-full
                            bg-gray-100
                            text-gray-600
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
                            text-5xl
                            font-bold
                            text-black
                            tracking-tight
                        "
                    >
                        My Posts
                    </h1>

                    <p
                        className="
                            mt-3
                            text-lg
                            text-gray-500
                        "
                    >
                        Manage and explore your uploaded prompts.
                    </p>

                </div>

                {/* Stats Card */}

                <div
                    className="
                        bg-white
                        border
                        border-gray-200
                        rounded-[24px]
                        px-6
                        py-5
                        shadow-sm
                        min-w-[180px]
                    "
                >

                    <p
                        className="
                            text-sm
                            text-gray-500
                            mb-1
                        "
                    >
                        Total Posts
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-black
                        "
                    >
                        {uploads.length}
                    </h2>

                </div>

            </div>

            {/* Posts Grid */}

            <UploadGrid
                uploads={uploads}
                loading={loading}
            />

        </DashboardLayout>

    );
};

export default MyPosts;