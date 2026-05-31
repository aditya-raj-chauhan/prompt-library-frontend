import api from "../api/axios";

export const loginUser = async (
    loginData
) => {

    const response =
        await api.post(
            "/api/auth/login",
            loginData
        );

    return response.data;
};

export const registerUser = async (
    userData
) => {

    const response =
        await api.post(
            "/api/users/register",
            userData
        );

    return response.data;
};