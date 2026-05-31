import Masonry from "react-masonry-css";

import UploadCard from "./UploadCard";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";

const breakpointColumnsObj = {
    default: 5,
    1536: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
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
            className="flex gap-6"
            columnClassName="space-y-6"
        >
            {uploads.map((upload) => (
                <UploadCard
                    key={upload.id}
                    upload={upload}
                />
            ))}
        </Masonry>
    );
};

export default UploadGrid;