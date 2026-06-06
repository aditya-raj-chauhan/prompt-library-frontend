import React from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react"; // Import Eye icon for a cleaner hover action

const UploadCard = ({ upload }) => {
    return (
        <Link
            to={`/upload/${upload.id}`}
            className="
                block
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-white/[0.02]
                border
                border-white/10
                shadow-sm
                hover:bg-white/[0.04]
                hover:border-white/20
                transition-all
                duration-300
                break-inside-avoid
                mb-6
            "
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900/50">
                {upload.imageUrl ? (
                    <img
                        src={upload.imageUrl}
                        alt={upload.title}
                        loading="lazy"
                        className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                        "
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}

                {/* Hover Overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-black/60
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        flex
                        items-center
                        justify-center
                    "
                >
                    <div 
                        className="
                            translate-y-4
                            group-hover:translate-y-0
                            transition-transform
                            duration-300
                            flex
                            items-center
                            gap-2
                            bg-white
                            text-black
                            px-5
                            py-2.5
                            rounded-full
                            text-sm
                            font-semibold
                        "
                    >
                        <Eye size={16} />
                        View Prompt
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-5">
                {/* Title */}
                <h3
                    className="
                        text-lg
                        font-semibold
                        text-white
                        line-clamp-2
                        leading-snug
                        tracking-tight
                    "
                >
                    {upload.title}
                </h3>

                {/* Description */}
                {upload.description && (
                    <p
                        className="
                            mt-2.5
                            text-sm
                            text-white/50
                            line-clamp-2
                            leading-relaxed
                        "
                    >
                        {upload.description}
                    </p>
                )}

                {/* Tags */}
                {upload.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {upload.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="
                                    px-2.5
                                    py-1
                                    rounded-lg
                                    bg-white/[0.05]
                                    border
                                    border-white/10
                                    text-white/70
                                    text-[11px]
                                    font-medium
                                    tracking-wide
                                    uppercase
                                "
                            >
                                #{tag}
                            </span>
                        ))}
                        {upload.tags.length > 3 && (
                            <span className="px-2.5 py-1 text-white/40 text-[11px] font-medium flex items-center">
                                +{upload.tags.length - 3}
                            </span>
                        )}
                    </div>
                )}

                {/* Footer (User & Date) */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-5
                        pt-4
                        border-t
                        border-white/10
                    "
                >
                    <div className="flex items-center gap-2.5 min-w-0">
                        {/* Avatar */}
                        <div
                            className="
                                w-7
                                h-7
                                rounded-full
                                bg-gradient-to-tr
                                from-zinc-700
                                to-zinc-500
                                flex
                                items-center
                                justify-center
                                text-[11px]
                                font-bold
                                text-white
                                shrink-0
                                shadow-inner
                            "
                        >
                            {upload.username?.charAt(0)?.toUpperCase() || "?"}
                        </div>

                        {/* Username */}
                        <span
                            className="
                                text-sm
                                text-white/80
                                font-medium
                                truncate
                            "
                        >
                            {upload.username || "Anonymous"}
                        </span>
                    </div>

                    {/* Date */}
                    <span
                        className="
                            text-xs
                            text-white/40
                            shrink-0
                            font-medium
                        "
                    >
                        {upload.createdAt
                            ? new Date(upload.createdAt).toLocaleDateString(undefined, { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })
                            : "Unknown Date"}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default UploadCard;