import api from "../api/axios";

export const createUpload = async (
    formData
) => {

    const response =
        await api.post(
            "/api/uploads",
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

export const getAllUploads = async () => {

    const response =
        await api.get(
            "/api/uploads"
        );

    return response.data;
};

export const getMyUploads = async () => {

    const response =
        await api.get(
            "/api/uploads/my-posts"
        );

    return response.data;
};

export const getUploadById = async (
    id
) => {

    const response =
        await api.get(
            `/api/uploads/${id}`
        );

    return response.data;
};

export const deleteUpload = async (
    id
) => {

    const response =
        await api.delete(
            `/api/uploads/${id}`
        );

    return response.data;
};