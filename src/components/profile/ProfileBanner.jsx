import React, { useRef } from "react";
import { Globe, MapPin, Camera } from "lucide-react";

const ProfileBanner = ({
    bannerImage,
    profileImage,
    username,
    bio,
    website,
    location,
    onProfileImageUpload,
    onBannerImageUpload,
}) => {
    const profileInputRef = useRef(null);
    const bannerInputRef = useRef(null);

    const handleProfileFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file && onProfileImageUpload) onProfileImageUpload(file);
        e.target.value = "";
    };

    const handleBannerFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file && onBannerImageUpload) onBannerImageUpload(file);
        e.target.value = "";
    };

    return (
        <div
            className="
                bg-white/[0.02]
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                backdrop-blur-sm
            "
        >
            {/* Banner */}
            <div
                className="
                    h-48
                    md:h-64
                    w-full
                    bg-white/5
                    relative
                    overflow-hidden
                    group
                    cursor-pointer
                "
                onClick={() => bannerInputRef.current?.click()}
                title="Click to change banner"
            >
                <img
                    src={
                        bannerImage ||
                        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    }
                    alt="banner"
                    className="w-full h-full object-cover opacity-80"
                />

                {/* Original gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Upload hover overlay */}
                <div
                    className="
                        absolute inset-0
                        bg-black/50
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200
                    "
                >
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/40 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                        <Camera size={16} />
                        <span>Change Banner</span>
                    </div>
                </div>

                <input
                    ref={bannerInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleBannerFileChange}
                />
            </div>

            {/* Profile Section */}
            <div className="px-6 md:px-10 pb-10 relative">

                {/* Avatar */}
                <div className="absolute -top-16 md:-top-20 group">
                    <div
                        className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer"
                        onClick={() => profileInputRef.current?.click()}
                        title="Click to change profile picture"
                    >
                        <img
                            src={profileImage || "https://i.pravatar.cc/300"}
                            alt="profile"
                            className="
                                w-full h-full
                                rounded-full
                                object-cover
                                border-4
                                border-black
                                bg-zinc-900
                                shadow-xl
                            "
                        />

                        {/* Upload hover overlay */}
                        <div
                            className="
                                absolute inset-0
                                rounded-full
                                bg-black/50
                                flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-200
                                border-4 border-black
                            "
                        >
                            <Camera size={24} className="text-white/90" />
                        </div>
                    </div>

                    {/* Small camera badge */}
                    <button
                        type="button"
                        onClick={() => profileInputRef.current?.click()}
                        className="
                            absolute bottom-1 right-1
                            w-8 h-8 rounded-full
                            bg-zinc-800 border-2 border-black
                            flex items-center justify-center
                            hover:bg-zinc-700 transition-colors
                            shadow-lg
                        "
                        title="Change profile picture"
                    >
                        <Camera size={14} className="text-white/80" />
                    </button>

                    <input
                        ref={profileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfileFileChange}
                    />
                </div>

                {/* User Info */}
                <div className="pt-20 md:pt-24">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {username || "Anonymous Creator"}
                    </h1>

                    {bio && (
                        <p className="text-white/60 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
                            {bio}
                        </p>
                    )}

                    {(website || location) && (
                        <div className="flex flex-wrap gap-6 mt-6 text-white/50 text-sm font-medium">
                            {website && (
                                <div className="flex items-center gap-2 group">
                                    <Globe size={18} className="text-white/40 group-hover:text-white/80 transition-colors" />
                                    <a
                                        href={website.startsWith("http") ? website : `https://${website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        {website.replace(/^https?:\/\//, "")}
                                    </a>
                                </div>
                            )}

                            {location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-white/40" />
                                    <span>{location}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;