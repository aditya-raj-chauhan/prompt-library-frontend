import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadGrid from "../../components/upload/UploadGrid";

import {
    getAllUploads
} from "../../services/uploadService";

const Explore = () => {

    const [uploads, setUploads] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchUploads();

    }, []);

    const fetchUploads = async () => {

        try {

            setLoading(true);

            const response =
                await getAllUploads();

            setUploads(response);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load uploads"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <DashboardLayout>

            <div
                className="
                    mb-8
                "
            >

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-[#0B0B0C]
                    "
                >
                    Explore Prompts
                </h1>

                <p
                    className="
                        text-[#2E2E31]
                        opacity-70
                        mt-2
                    "
                >
                    Discover prompts shared by creators.
                </p>

            </div>

            <UploadGrid
                uploads={uploads}
                loading={loading}
            />

        </DashboardLayout>

    );
};

export default Explore;