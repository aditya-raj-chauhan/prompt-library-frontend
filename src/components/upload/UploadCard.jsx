import { Link } from "react-router-dom";

const UploadCard = ({ upload }) => {

    return (
        <Link
            to={`/upload/${upload.id}`}
            className="
                block
                group
                overflow-hidden
                rounded-[28px]
                bg-[#FFFFFB]
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                break-inside-avoid
            "
        >
            {/* Image */}

            <div
                className="
                    relative
                    overflow-hidden
                "
            >
                <img
                    src={upload.imageUrl}
                    alt={upload.title}
                    className="
                        w-full
                        h-auto
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/15
                        transition-all
                    "
                />

                <button
                    className="
                        absolute
                        top-4
                        right-4
                        bg-[#2E2E31]
                        text-[#FFFFFB]
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                    "
                >
                    View
                </button>
            </div>

            {/* Content */}

            <div className="p-4">
                {/* Title */}

                <h3
                    className="
                        text-[15px]
                        font-semibold
                        text-[#0B0B0C]
                        line-clamp-2
                        leading-6
                    "
                >
                    {upload.title}
                </h3>

                {/* Description */}

                {upload.description && (
                    <p
                        className="
                            mt-2
                            text-sm
                            text-[#2E2E31]
                            opacity-75
                            line-clamp-2
                        "
                    >
                        {upload.description}
                    </p>
                )}

                {/* Tags */}

                {upload.tags?.length > 0 && (
                    <div
                        className="
                            flex
                            flex-wrap
                            gap-2
                            mt-3
                        "
                    >
                        {upload.tags
                            .slice(0, 3)
                            .map((tag) => (
                                <span
                                    key={tag}
                                    className="
                                        px-2
                                        py-1
                                        rounded-full
                                        bg-[#EAE5DC]
                                        text-[#2E2E31]
                                        text-xs
                                        font-medium
                                    "
                                >
                                    #{tag}
                                </span>
                            ))}
                    </div>
                )}

                {/* Footer */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-4
                        pt-3
                        border-t
                        border-[#EAE5DC]
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            min-w-0
                        "
                    >
                        <div
                            className="
                                w-8
                                h-8
                                rounded-full
                                bg-[#BEB8AF]
                                flex
                                items-center
                                justify-center
                                text-xs
                                font-semibold
                                text-[#0B0B0C]
                                shrink-0
                            "
                        >
                            {upload.username?.charAt(0)?.toUpperCase()}
                        </div>

                        <span
                            className="
                                text-sm
                                text-[#2E2E31]
                                font-medium
                                truncate
                            "
                        >
                            {upload.username}
                        </span>
                    </div>

                    <span
                        className="
                            text-xs
                            text-[#2E2E31]
                            opacity-60
                            shrink-0
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
            </div>
        </Link>
    );
};

export default UploadCard;