import { Search } from "lucide-react";

const SearchBar = ({
    value,
    onChange,
    placeholder = "Search prompts..."
}) => {
    return (
        <div
            className="
                relative
                w-full
                max-w-md
            "
        >
            <Search
                size={18}
                className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-[#2E2E31]
                    opacity-60
                "
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    pl-10
                    pr-4
                    py-2.5
                    rounded-xl
                    bg-[#EAE5DC]
                    border
                    border-[#BEB8AF]
                    text-[#0B0B0C]
                    placeholder:text-[#2E2E31]
                    placeholder:opacity-60
                    outline-none
                    focus:border-[#2E2E31]
                    focus:ring-2
                    focus:ring-[#BEB8AF]
                    transition-all
                "
            />
        </div>
    );
};

export default SearchBar;