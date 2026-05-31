import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Loader from "../../components/common/Loader";

import {
    getUploadById
} from "../../services/uploadService";

const UploadDetails = () => {

    const { id } = useParams();

    const [upload, setUpload] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchUpload();

    }, [id]);

    const fetchUpload = async () => {

        try {

            setLoading(true);

            const response =
                await getUploadById(id);

            setUpload(response);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load upload"
            );

        } finally {

            setLoading(false);
        }
    };

    const handleCopyPrompt = async () => {

        try {

            await navigator.clipboard.writeText(
                upload.prompt
            );

            toast.success(
                "Prompt copied successfully!"
            );

        } catch {

            toast.error(
                "Failed to copy prompt"
            );
        }
    };

    if (loading) {

        return (
            <DashboardLayout>
                <Loader />
            </DashboardLayout>
        );
    }

    if (!upload) {

        return (
            <DashboardLayout>
                <div
                    className="
                        text-center
                        text-gray-500
                        py-20
                    "
                >
                    Upload not found.
                </div>
            </DashboardLayout>
        );
    }

    return (

        <DashboardLayout>

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                "
            >

                <div
                    className="
                        bg-white
                        rounded-[32px]
                        overflow-hidden
                        border
                        border-gray-200
                        shadow-sm
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            lg:grid-cols-2
                        "
                    >

                        {/* Image */}

                        <div
                            className="
                                bg-gray-50
                            "
                        >

                            <img
                                src={upload.imageUrl}
                                alt={upload.title}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />

                        </div>

                        {/* Content */}

                        <div
                            className="
                                p-8
                                lg:p-12
                            "
                        >

                            <h1
                                className="
                                    text-4xl
                                    lg:text-5xl
                                    font-bold
                                    text-black
                                    leading-tight
                                "
                            >
                                {upload.title}
                            </h1>

                            <p
                                className="
                                    mt-4
                                    text-gray-600
                                    leading-relaxed
                                "
                            >
                                {upload.description}
                            </p>

                            {/* Creator */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mt-8
                                    pb-8
                                    border-b
                                    border-gray-100
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-full
                                            bg-gray-200
                                            flex
                                            items-center
                                            justify-center
                                            font-semibold
                                            text-black
                                        "
                                    >
                                        {
                                            upload.username
                                                ?.charAt(0)
                                                ?.toUpperCase()
                                        }
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                font-semibold
                                                text-black
                                            "
                                        >
                                            {upload.username}
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                text-gray-500
                                            "
                                        >
                                            Creator
                                        </p>

                                    </div>

                                </div>

                                <span
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    {
                                        upload.createdAt
                                            ? new Date(
                                                upload.createdAt
                                            ).toLocaleDateString()
                                            : ""
                                    }
                                </span>

                            </div>

                            {/* Tags */}

                            {
                                upload.tags?.length > 0 && (

                                    <div
                                        className="
                                            flex
                                            flex-wrap
                                            gap-2
                                            mt-8
                                        "
                                    >

                                        {
                                            upload.tags.map(
                                                (tag) => (

                                                    <span
                                                        key={tag}
                                                        className="
                                                            px-4
                                                            py-2
                                                            rounded-full
                                                            bg-gray-100
                                                            text-gray-700
                                                            text-sm
                                                        "
                                                    >
                                                        #{tag}
                                                    </span>

                                                )
                                            )
                                        }

                                    </div>

                                )
                            }

                            {/* Prompt */}

                            <div
                                className="
                                    mt-10
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        mb-4
                                    "
                                >

                                    <h2
                                        className="
                                            text-2xl
                                            font-bold
                                            text-black
                                        "
                                    >
                                        Prompt
                                    </h2>

                                    <button
                                        onClick={
                                            handleCopyPrompt
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            px-4
                                            py-2
                                            bg-black
                                            text-white
                                            rounded-[14px]
                                            text-sm
                                            font-medium
                                            hover:bg-gray-800
                                            transition-all
                                        "
                                    >
                                        <Copy
                                            size={16}
                                        />

                                        Copy Prompt
                                    </button>

                                </div>

                                <div
                                    className="
                                        bg-gray-50
                                        border
                                        border-gray-100
                                        rounded-[24px]
                                        p-6
                                        text-gray-700
                                        whitespace-pre-wrap
                                        leading-relaxed
                                        max-h-[500px]
                                        overflow-y-auto
                                    "
                                >
                                    {upload.prompt}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );
};

export default UploadDetails;