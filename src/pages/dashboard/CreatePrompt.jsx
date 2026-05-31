import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadForm from "../../components/upload/UploadForm";

import {
    createUpload
} from "../../services/uploadService";

const CreatePrompt = () => {

    const navigate =
        useNavigate();

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (
        formData
    ) => {

        try {

            setLoading(true);

            const response =
                await createUpload(
                    formData
                );

            toast.success(
                "Prompt created successfully"
            );

            navigate(
                `/upload/${response.id}`
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create prompt"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <DashboardLayout>

            <div
                className="
                    max-w-5xl
                    mx-auto
                "
            >

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
                        Create Prompt
                    </h1>

                    <p
                        className="
                            text-[#2E2E31]
                            opacity-70
                            mt-2
                        "
                    >
                        Share your best prompts with the community.
                    </p>

                </div>

                <UploadForm
                    onSubmit={
                        handleSubmit
                    }
                    loading={
                        loading
                    }
                />

            </div>

        </DashboardLayout>

    );
};

export default CreatePrompt;