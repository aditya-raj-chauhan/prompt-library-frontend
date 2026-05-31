import { Inbox } from "lucide-react";

const EmptyState = ({
    title = "Nothing Here Yet",
    description = "No data available.",
}) => {
    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                py-20
                text-center
            "
        >
            <div
                className="
                    p-5
                    rounded-full
                    bg-[#2E2E31]
                    mb-4
                    shadow-md
                "
            >
                <Inbox
                    size={48}
                    className="text-[#BEB8AF]"
                />
            </div>

            <h2
                className="
                    text-2xl
                    font-semibold
                    text-[#0B0B0C]
                    mb-2
                "
            >
                {title}
            </h2>

            <p
                className="
                    text-[#2E2E31]
                    max-w-md
                    opacity-80
                "
            >
                {description}
            </p>
        </div>
    );
};

export default EmptyState;