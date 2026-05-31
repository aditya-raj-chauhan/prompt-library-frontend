import { useState } from "react";

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
                bg-white
                border
                border-gray-200
                rounded-[32px]
                shadow-sm
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
                        text-black
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
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-[16px]
                        text-black
                        placeholder:text-gray-400
                        focus:outline-none
                        focus:border-black
                        transition-all
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
                        text-black
                    "
                >
                    Description
                </label>

                <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your prompt"
                    required
                    className="
                        w-full
                        px-5
                        py-4
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-[16px]
                        text-black
                        placeholder:text-gray-400
                        resize-none
                        focus:outline-none
                        focus:border-black
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
                        text-black
                    "
                >
                    Prompt
                </label>

                <textarea
                    rows={10}
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                    placeholder="Write your AI prompt here..."
                    required
                    className="
                        w-full
                        px-5
                        py-4
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-[16px]
                        text-black
                        placeholder:text-gray-400
                        resize-none
                        focus:outline-none
                        focus:border-black
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
                        text-black
                    "
                >
                    Tags
                </label>

                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="ai, chatgpt, coding"
                    className="
                        w-full
                        px-5
                        py-4
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-[16px]
                        text-black
                        placeholder:text-gray-400
                        focus:outline-none
                        focus:border-black
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
                        text-black
                    "
                >
                    Cover Image
                </label>

                <label
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        h-64
                        bg-gray-50
                        border-2
                        border-dashed
                        border-gray-300
                        rounded-[24px]
                        cursor-pointer
                        hover:bg-gray-100
                        transition-all
                    "
                >
                    <span
                        className="
                            text-lg
                            font-semibold
                            text-black
                        "
                    >
                        Upload Image
                    </span>

                    <span
                        className="
                            text-sm
                            text-gray-500
                            mt-2
                        "
                    >
                        PNG, JPG, WEBP
                    </span>

                    {image && (
                        <span
                            className="
                                mt-4
                                text-sm
                                text-black
                                font-medium
                            "
                        >
                            {image.name}
                        </span>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        required
                        className="hidden"
                        onChange={(e) =>
                            setImage(
                                e.target.files[0]
                            )
                        }
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
                    bg-black
                    text-white
                    rounded-[16px]
                    font-semibold
                    hover:bg-gray-900
                    transition-all
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >
                {loading
                    ? "Publishing..."
                    : "Publish Prompt"}
            </button>

        </form>
    );
};

export default UploadForm;