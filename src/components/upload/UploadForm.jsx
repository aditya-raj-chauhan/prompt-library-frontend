import { useState } from "react";
import { UploadCloud, Image as ImageIcon, CheckCircle2 } from "lucide-react";

const UploadForm = ({
    onSubmit,
    loading = false
}) => {
    const [formData, setFormData] = useState({
        title: "",
        prompt: "",
        description: "",
        tags: ""
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = new FormData();

        payload.append("title", formData.title);
        payload.append("prompt", formData.prompt);
        payload.append("description", formData.description);

        formData.tags
            .split(",")
            .map(tag => tag.trim())
            .filter(Boolean)
            .forEach(tag =>
                payload.append("tags", tag)
            );

        if (image) {
            payload.append("image", image);
        }

        onSubmit(payload);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                max-w-4xl
                mx-auto
                bg-white/[0.02]
                border
                border-white/10
                rounded-[32px]
                shadow-2xl
                backdrop-blur-sm
                p-8
                md:p-10
                space-y-8
            "
        >
            {/* Title */}
            <div>
                <label
                    className="
                        block
                        mb-3
                        text-sm
                        font-semibold
                        text-white/90
                    "
                >
                    Title
                </label>

                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter prompt title"
                    required
                    className="
                        w-full
                        px-5
                        py-4
                        bg-black/50
                        border
                        border-white/10
                        rounded-2xl
                        text-white
                        placeholder:text-white/30
                        focus:outline-none
                        focus:border-white/30
                        focus:ring-1
                        focus:ring-white/30
                        focus:bg-white/[0.02]
                        transition-all
                        duration-200
                    "
                />
            </div>

            {/* Description */}
            <div>
                <label
                    className="
                        block
                        mb-3
                        text-sm
                        font-semibold
                        text-white/90
                    "
                >
                    Description
                </label>

                <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your prompt..."
                    required
                    className="
                        w-full
                        px-5
                        py-4
                        bg-black/50
                        border
                        border-white/10
                        rounded-2xl
                        text-white
                        placeholder:text-white/30
                        resize-none
                        focus:outline-none
                        focus:border-white/30
                        focus:ring-1
                        focus:ring-white/30
                        focus:bg-white/[0.02]
                        transition-all
                        duration-200
                        custom-scrollbar
                    "
                />
            </div>

            {/* Prompt */}
            <div>
                <label
                    className="
                        block
                        mb-3
                        text-sm
                        font-semibold
                        text-white/90
                    "
                >
                    Prompt
                </label>

                <textarea
                    rows={8}
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                    placeholder="Write your exact AI prompt here..."
                    required
                    className="
                        w-full
                        px-5
                        py-4
                        bg-black/50
                        border
                        border-white/10
                        rounded-2xl
                        text-white
                        font-mono
                        text-sm
                        placeholder:text-white/30
                        placeholder:font-sans
                        resize-none
                        focus:outline-none
                        focus:border-white/30
                        focus:ring-1
                        focus:ring-white/30
                        focus:bg-white/[0.02]
                        transition-all
                        duration-200
                        custom-scrollbar
                    "
                />
            </div>

            {/* Tags */}
            <div>
                <label
                    className="
                        block
                        mb-3
                        text-sm
                        font-semibold
                        text-white/90
                    "
                >
                    Tags
                </label>

                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="ai, chatgpt, coding (comma separated)"
                    className="
                        w-full
                        px-5
                        py-4
                        bg-black/50
                        border
                        border-white/10
                        rounded-2xl
                        text-white
                        placeholder:text-white/30
                        focus:outline-none
                        focus:border-white/30
                        focus:ring-1
                        focus:ring-white/30
                        focus:bg-white/[0.02]
                        transition-all
                        duration-200
                    "
                />
            </div>

            {/* Cover Image */}
            <div>
                <label
                    className="
                        block
                        mb-3
                        text-sm
                        font-semibold
                        text-white/90
                    "
                >
                    Cover Image
                </label>

                <label
                    className={`
                        flex
                        flex-col
                        items-center
                        justify-center
                        h-64
                        border-2
                        border-dashed
                        rounded-[24px]
                        cursor-pointer
                        transition-all
                        duration-300
                        ${image 
                            ? "bg-white/[0.05] border-white/30" 
                            : "bg-white/[0.01] border-white/10 hover:bg-white/[0.03] hover:border-white/20"
                        }
                    `}
                >
                    {image ? (
                        <div className="flex flex-col items-center text-white">
                            <CheckCircle2 size={40} className="text-green-400 mb-4" />
                            <span className="text-lg font-semibold tracking-tight">
                                Image Selected
                            </span>
                            <span className="text-sm text-white/50 mt-2 font-medium bg-black/50 px-3 py-1 rounded-lg">
                                {image.name}
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="p-4 rounded-full bg-white/[0.02] mb-4">
                                <UploadCloud size={32} className="text-white/40" />
                            </div>
                            <span className="text-lg font-semibold text-white/90 tracking-tight">
                                Click to Upload
                            </span>
                            <span className="text-sm text-white/40 mt-2">
                                PNG, JPG, WEBP (Max 5MB)
                            </span>
                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        required
                        className="hidden"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="
                    w-full
                    h-14
                    bg-white
                    text-black
                    rounded-2xl
                    font-bold
                    text-lg
                    hover:bg-white/90
                    active:scale-[0.98]
                    transition-all
                    duration-200
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    flex
                    items-center
                    justify-center
                    gap-2
                "
            >
                {loading ? (
                    "Publishing..."
                ) : (
                    <>
                        <ImageIcon size={20} />
                        Publish Prompt
                    </>
                )}
            </button>
        </form>
    );
};

export default UploadForm;