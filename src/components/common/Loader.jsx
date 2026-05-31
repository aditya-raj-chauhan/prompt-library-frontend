const Loader = () => {
    return (
        <div
            className="
                flex
                items-center
                justify-center
                min-h-[300px]
            "
        >
            <div
                className="
                    h-12
                    w-12
                    rounded-full
                    border-4
                    border-[#BEB8AF]
                    border-t-[#2E2E31]
                    animate-spin
                "
            />
        </div>
    );
};

export default Loader;