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
        <div className="mt-8">
            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-6
                "
            >
                <h2
                    className="
                        text-2xl
                        font-bold
                        text-[#0B0B0C]
                    "
                >
                    My Uploads
                </h2>

                <span
                    className="
                        text-[#2E2E31]
                        opacity-70
                        font-medium
                    "
                >
                    {uploads.length} Posts
                </span>
            </div>

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
                        key={upload.id}
                        upload={upload}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileUploads;