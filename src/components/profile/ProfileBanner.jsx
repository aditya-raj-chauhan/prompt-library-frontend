import { Globe, MapPin } from "lucide-react";

const ProfileBanner = ({
    bannerImage,
    profileImage,
    username,
    bio,
    website,
    location
}) => {

    return (
        <div
            className="
                bg-[#EAE5DC]
                rounded-3xl
                overflow-hidden
                border
                border-[#BEB8AF]
                shadow-sm
            "
        >
            {/* Banner */}

            <div
                className="
                    h-64
                    w-full
                    bg-[#BEB8AF]
                "
            >
                <img
                    src={
                        bannerImage ||
                        "https://images.unsplash.com/photo-1518770660439-4636190af475"
                    }
                    alt="banner"
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                />
            </div>

            {/* Profile Section */}

            <div
                className="
                    px-8
                    pb-8
                    relative
                "
            >
                {/* Avatar */}

                <img
                    src={
                        profileImage ||
                        "https://i.pravatar.cc/300"
                    }
                    alt="profile"
                    className="
                        w-32
                        h-32
                        rounded-full
                        object-cover
                        border-4
                        border-[#EAE5DC]
                        absolute
                        -top-16
                        shadow-md
                    "
                />

                {/* User Info */}

                <div className="pt-20">
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
                            mt-3
                            max-w-2xl
                            opacity-80
                        "
                    >
                        {bio}
                    </p>

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-6
                            mt-4
                            text-[#2E2E31]
                        "
                    >
                        {website && (
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <Globe
                                    size={18}
                                    className="text-[#2E2E31]"
                                />

                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        hover:text-[#0B0B0C]
                                        transition-colors
                                    "
                                >
                                    {website}
                                </a>
                            </div>
                        )}

                        {location && (
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <MapPin
                                    size={18}
                                    className="text-[#2E2E31]"
                                />

                                <span>
                                    {location}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;