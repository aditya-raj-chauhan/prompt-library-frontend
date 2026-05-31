import { Globe, MapPin } from "lucide-react";

const ProfileHeader = ({
    profileImage,
    username,
    fullName,
    bio,
    website,
    location,
    totalPosts = 0
}) => {

    return (
        <div
            className="
                bg-[#EAE5DC]
                border
                border-[#BEB8AF]
                rounded-3xl
                p-6
                flex
                flex-col
                md:flex-row
                gap-6
                items-center
                shadow-sm
            "
        >
            {/* Profile Image */}

            <img
                src={
                    profileImage ||
                    "https://i.pravatar.cc/300"
                }
                alt={username}
                className="
                    w-32
                    h-32
                    rounded-full
                    object-cover
                    border-4
                    border-[#BEB8AF]
                    shadow-md
                "
            />

            {/* User Details */}

            <div
                className="
                    flex-1
                    text-center
                    md:text-left
                "
            >
                <h1
                    className="
                        text-3xl
                        font-bold
                        text-[#0B0B0C]
                    "
                >
                    {username}
                </h1>

                <p
                    className="
                        text-[#2E2E31]
                        opacity-70
                        mt-1
                    "
                >
                    {fullName}
                </p>

                <p
                    className="
                        text-[#2E2E31]
                        mt-4
                    "
                >
                    {bio}
                </p>

                <div
                    className="
                        flex
                        flex-wrap
                        gap-4
                        mt-4
                        justify-center
                        md:justify-start
                    "
                >
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                text-[#2E2E31]
                                hover:text-[#0B0B0C]
                                transition-colors
                            "
                        >
                            <Globe size={18} />
                            {website}
                        </a>
                    )}

                    {location && (
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-[#2E2E31]
                                opacity-80
                            "
                        >
                            <MapPin size={18} />
                            {location}
                        </div>
                    )}
                </div>
            </div>

            {/* Stats */}

            <div
                className="
                    flex
                    gap-6
                "
            >
                <div className="text-center">
                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-[#2E2E31]
                        "
                    >
                        {totalPosts}
                    </h2>

                    <p
                        className="
                            text-[#2E2E31]
                            opacity-70
                        "
                    >
                        Posts
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;