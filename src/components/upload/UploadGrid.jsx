import React from "react";
import Masonry from "react-masonry-css";

import UploadCard from "./UploadCard";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";

// Breakpoint configuration for React Masonry
// Keys represent max-width (e.g., 1024 means screens <= 1024px get 3 columns)
const breakpointColumnsObj = {
    default: 4,    // Max 4 columns on ultra-wide screens
    1536: 4,       // 2xl screens
    1280: 4,       // xl screens
    1024: 3,       // lg screens
    768: 2,        // md screens
    640: 1,        // sm screens (mobile)
};

const UploadGrid = ({
    uploads = [],
    loading = false
}) => {
    
    if (loading) return <Loader />;

    if (!uploads.length) {
        return (
            <EmptyState
                title="No Prompts Found"
                description="There are no prompts available yet."
            />
        );
    }

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6 w-auto"
            columnClassName="bg-clip-padding space-y-6"
        >
            {uploads.map((upload) => (
                <UploadCard
                    key={upload.id || upload._id} // Added fallback for _id just in case
                    upload={upload}
                />
            ))}
        </Masonry>
    );
};

export default UploadGrid;