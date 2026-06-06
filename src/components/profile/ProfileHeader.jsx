import React, { useState, useEffect } from "react";
import { Globe, MapPin } from "lucide-react";

const ProfileHeader = ({
    // Keeping props as fallbacks
    profileImage: initialProfileImage,
    username: initialUsername,
    fullName: initialFullName,
    bio: initialBio,
    website: initialWebsite,
    location: initialLocation,
    totalPosts = 0
}) => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Retrieve token from local storage (or your preferred state management)
                const token = localStorage.getItem("token"); 

                if (!token) {
                    console.warn("No token found, skipping profile fetch.");
                    return;
                }

                const response = await fetch("http://localhost:8080/api/users/logged-in", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error("Failed to fetch user data for profile header", error);
            }
        };
        
        fetchUserData();
    }, []);

    // Prioritize fetched data, fallback to props, then fallback to defaults
    const displayImage = profileData?.profileImage || initialProfileImage || "https://i.pravatar.cc/300";
    const displayUsername = profileData?.username || initialUsername || "Anonymous";
    const displayFullName = profileData?.fullName || initialFullName;
    const displayBio = profileData?.bio || initialBio;
    const displayWebsite = profileData?.website || initialWebsite;
    const displayLocation = profileData?.location || initialLocation;
    // Assuming the backend might return a post count, otherwise default to the prop
    const displayPosts = profileData?.totalPosts ?? totalPosts;

    return (
        <div
            className="
                bg-white/[0.02]
                border
                border-white/10
                rounded-[32px]
                p-6
                md:p-8
                flex
                flex-col
                md:flex-row
                gap-6
                md:gap-8
                items-center
                md:items-start
                shadow-2xl
                backdrop-blur-sm
            "
        >
            {/* Profile Image */}
            <img
                src={displayImage}
                alt={displayUsername}
                className="
                    w-32
                    h-32
                    md:w-36
                    md:h-36
                    rounded-full
                    object-cover
                    border-4
                    border-black
                    bg-zinc-900
                    shadow-xl
                    shrink-0
                "
            />

            {/* User Details */}
            <div
                className="
                    flex-1
                    text-center
                    md:text-left
                    flex
                    flex-col
                    justify-center
                    min-w-0
                "
            >
                <h1
                    className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-white
                        tracking-tight
                        truncate
                    "
                >
                    {displayUsername}
                </h1>

                {displayFullName && (
                    <p
                        className="
                            text-white/50
                            mt-1
                            font-medium
                            truncate
                        "
                    >
                        {displayFullName}
                    </p>
                )}

                {displayBio && (
                    <p
                        className="
                            text-white/70
                            mt-4
                            max-w-2xl
                            leading-relaxed
                        "
                    >
                        {displayBio}
                    </p>
                )}

                <div
                    className="
                        flex
                        flex-wrap
                        gap-6
                        mt-6
                        justify-center
                        md:justify-start
                        text-sm
                        font-medium
                    "
                >
                    {displayWebsite && (
                        <div className="flex items-center gap-2 group">
                            <Globe size={18} className="text-white/40 group-hover:text-white/80 transition-colors" />
                            <a
                                href={displayWebsite.startsWith('http') ? displayWebsite : `https://${displayWebsite}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                {displayWebsite.replace(/^https?:\/\//, '')}
                            </a>
                        </div>
                    )}

                    {displayLocation && (
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-white/50
                            "
                        >
                            <MapPin size={18} className="text-white/40" />
                            <span>{displayLocation}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats */}
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-1
                    bg-white/[0.03]
                    border
                    border-white/5
                    rounded-2xl
                    px-8
                    py-6
                    shrink-0
                    self-center
                "
            >
                <h2
                    className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-white
                        tracking-tight
                    "
                >
                    {displayPosts}
                </h2>

                <p
                    className="
                        text-white/50
                        text-xs
                        uppercase
                        tracking-widest
                        font-semibold
                        mt-1
                    "
                >
                    Posts
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;