import api from "../api/axios";

export const getUserByEmail = async (
    email
) => {

    const response =
        await api.get(
            `/api/users/user/${email}`
        );

    return response.data;
};

export const getAllUsers = async () => {

    const response =
        await api.get(
            "/api/users/all-users"
        );

    return response.data;
};

export const uploadProfileImage = async (
    email,
    image
) => {

    const formData =
        new FormData();

    formData.append(
        "email",
        email
    );

    formData.append(
        "image",
        image
    );

    const response =
        await api.post(
            "/api/users/profile-image",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );

    return response.data;
};

export const uploadBannerImage = async (
    email,
    image
) => {

    const formData =
        new FormData();

    formData.append(
        "email",
        email
    );

    formData.append(
        "image",
        image
    );

    const response =
        await api.post(
            "/api/users/banner-image",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );

    return response.data;
};

export const deleteUser = async (
    email
) => {

    const response =
        await api.delete(
            `/api/users/user/delete/${email}`
        );

    return response.data;
};