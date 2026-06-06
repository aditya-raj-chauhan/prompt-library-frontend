import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { motion } from "framer-motion";

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

    // Framer motion variants for the staggered grid animation
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <DashboardLayout>
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Supported Models
                </h1>
                <p className="mt-3 text-white/50 text-base md:text-lg">
                    Browse AI models and discover prompts.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >
                {models.map((model) => {
                    const Icon = model.icon;

                    return (
                        <motion.div
                            variants={itemVariants}
                            key={model.name}
                            className="
                                group
                                bg-white/[0.02]
                                border
                                border-white/10
                                rounded-[32px]
                                overflow-hidden
                                hover:bg-white/[0.04]
                                hover:border-white/20
                                transition-all
                                duration-300
                                flex
                                flex-col
                            "
                        >
                            {/* Visual Section */}
                            <div
                                className="
                                    h-56
                                    bg-gradient-to-br
                                    from-white/[0.05]
                                    to-transparent
                                    flex
                                    items-center
                                    justify-center
                                    border-b
                                    border-white/5
                                    group-hover:from-white/[0.08]
                                    transition-colors
                                    duration-300
                                "
                            >
                                <Icon
                                    size={90}
                                    strokeWidth={1.5}
                                    className="
                                        text-white/40
                                        group-hover:text-white/80
                                        group-hover:scale-110
                                        transition-all
                                        duration-500
                                    "
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex-1 flex flex-col">
                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-white/40
                                        font-semibold
                                        mb-2
                                    "
                                >
                                    {model.category}
                                </span>

                                <h2 className="text-2xl font-bold text-white">
                                    {model.name}
                                </h2>

                                <p className="mt-3 text-white/50 leading-relaxed text-sm">
                                    {model.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </DashboardLayout>
    );
};

export default SupportedModels;