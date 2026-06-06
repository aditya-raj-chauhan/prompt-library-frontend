import React from "react";
import { Inbox } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = ({
    title = "Nothing Here Yet",
    description = "No data available.",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
                flex
                flex-col
                items-center
                justify-center
                py-24
                px-4
                text-center
                w-full
            "
        >
            {/* Icon Container */}
            <div
                className="
                    w-20
                    h-20
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.02]
                    border
                    border-white/10
                    mb-6
                    shadow-inner
                "
            >
                <Inbox
                    size={32}
                    strokeWidth={1.5}
                    className="text-white/40"
                />
            </div>

            {/* Title */}
            <h2
                className="
                    text-2xl
                    font-bold
                    text-white
                    tracking-tight
                    mb-2
                "
            >
                {title}
            </h2>

            {/* Description */}
            <p
                className="
                    text-white/50
                    max-w-sm
                    text-sm
                    md:text-base
                    leading-relaxed
                "
            >
                {description}
            </p>
        </motion.div>
    );
};

export default EmptyState;