export const APP_NAME =
    "PromptLibrary";

export const API_BASE_URL =
    "http://localhost:8080";

export const TOKEN_KEY =
    "token";

export const ROUTES = {

    LOGIN:
        "/login",

    REGISTER:
        "/register",

    HOME:
        "/",

    CREATE:
        "/create",

    MY_POSTS:
        "/my-posts",

    PROFILE:
        "/profile",

    MODELS:
        "/models"
};

export const SIDEBAR_MENU = [

    {
        name: "Explore",
        path: "/"
    },

    {
        name: "Create Prompt",
        path: "/create"
    },

    {
        name: "My Posts",
        path: "/my-posts"
    },

    {
        name: "AI Models",
        path: "/models"
    }
];

export const DEFAULT_PROFILE_IMAGE =
    "https://i.pravatar.cc/300";

export const DEFAULT_BANNER_IMAGE =
    "https://images.unsplash.com/photo-1518770660439-4636190af475";

export const TOAST_DURATION =
    3000;

export const MAX_FILE_SIZE =
    5 * 1024 * 1024;

export const SUPPORTED_IMAGE_TYPES = [

    "image/png",

    "image/jpeg",

    "image/jpg",

    "image/webp"
];

export const AI_MODELS = [

    {
        name: "GPT-5",
        category: "Text Generation"
    },

    {
        name: "Claude",
        category: "Text Generation"
    },

    {
        name: "Gemini",
        category: "Multimodal"
    },

    {
        name: "Grok",
        category: "Text Generation"
    },

    {
        name: "Midjourney",
        category: "Image Generation"
    },

    {
        name: "Flux",
        category: "Image Generation"
    }
];