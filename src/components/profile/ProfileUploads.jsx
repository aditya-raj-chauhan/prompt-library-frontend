import React from "react";
import UploadCard from "../upload/UploadCard";
import EmptyState from "../common/EmptyState";

const ProfileUploads = ({
    uploads = []
}) => {
    if (uploads.length === 0) {
        return (
            <EmptyState
                title="No Uploads Yet"
                description="Create your first prompt and start sharing with the community."
            />
        );
    }

    return (
        <div className="mt-12">
            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-8
                    pb-4
                    border-b
                    border-white/10
                "
            >
                <h2
                    className="
                        text-2xl
                        font-bold
                        text-white
                        tracking-tight
                    "
                >
                    My Uploads
                </h2>

                <span
                    className="
                        px-3
                        py-1
                        rounded-full
                        bg-white/[0.05]
                        border
                        border-white/10
                        text-white/60
                        text-sm
                        font-medium
                    "
                >
                    {uploads.length} {uploads.length === 1 ? 'Post' : 'Posts'}
                </span>
            </div>

            {/* Grid */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-6
                "
            >
                {uploads.map((upload) => (
                    <UploadCard
                        key={upload.id || upload._id}
                        upload={upload}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileUploads;