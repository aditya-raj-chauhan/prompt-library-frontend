import DashboardLayout from "../../components/layout/DashboardLayout";

import {
    Bot,
    Sparkles,
    Brain,
    Image as ImageIcon
} from "lucide-react";

const SupportedModels = () => {

    const models = [
        {
            name: "GPT-5",
            category: "Text Generation",
            icon: Bot,
            description:
                "Advanced reasoning, coding, writing and prompt generation."
        },
        {
            name: "Claude",
            category: "Text Generation",
            icon: Brain,
            description:
                "Long-context reasoning and document analysis."
        },
        {
            name: "Gemini",
            category: "Multimodal",
            icon: Sparkles,
            description:
                "Text, image and multimodal AI capabilities."
        },
        {
            name: "Grok",
            category: "Text Generation",
            icon: Bot,
            description:
                "Conversational and real-time knowledge AI model."
        },
        {
            name: "Midjourney",
            category: "Image Generation",
            icon: ImageIcon,
            description:
                "High-quality AI image generation."
        },
        {
            name: "Flux",
            category: "Image Generation",
            icon: ImageIcon,
            description:
                "Modern image generation and design workflows."
        }
    ];

    return (
        <DashboardLayout>

            <div className="mb-12">
                <h1
                    className="
                        text-5xl
                        font-bold
                        text-black
                    "
                >
                    Supported Models
                </h1>

                <p
                    className="
                        mt-3
                        text-gray-500
                        text-lg
                    "
                >
                    Browse AI models and discover prompts.
                </p>
            </div>

            <div
                className="
                    columns-1
                    md:columns-2
                    xl:columns-3
                    gap-6
                "
            >
                {models.map((model) => {

                    const Icon = model.icon;

                    return (
                        <div
                            key={model.name}
                            className="
                                mb-6
                                break-inside-avoid
                                bg-white
                                rounded-[32px]
                                overflow-hidden
                                shadow-sm
                                hover:shadow-xl
                                transition-all
                                duration-300
                                border
                                border-gray-100
                            "
                        >
                            {/* Visual Section */}

                            <div
                                className="
                                    h-56
                                    bg-gradient-to-br
                                    from-gray-50
                                    to-gray-100
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Icon
                                    size={90}
                                    className="
                                        text-black
                                        opacity-90
                                    "
                                />
                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-gray-500
                                        font-medium
                                    "
                                >
                                    {model.category}
                                </span>

                                <h2
                                    className="
                                        mt-3
                                        text-2xl
                                        font-bold
                                        text-black
                                    "
                                >
                                    {model.name}
                                </h2>

                                <p
                                    className="
                                        mt-3
                                        text-gray-600
                                        leading-relaxed
                                    "
                                >
                                    {model.description}
                                </p>

                            </div>
                        </div>
                    );
                })}
            </div>

        </DashboardLayout>
    );
};

export default SupportedModels;