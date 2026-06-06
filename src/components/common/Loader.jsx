import React from "react";

const Loader = () => {
    return (
        <div
            className="
                flex
                items-center
                justify-center
                min-h-[300px]
                w-full
            "
        >
            <div
                className="
                    h-12
                    w-12
                    rounded-full
                    border-4
                    border-white/10
                    border-t-white/80
                    animate-spin
                "
            />
        </div>
    );
};

export default Loader;