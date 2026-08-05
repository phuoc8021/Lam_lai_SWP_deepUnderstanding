import axiosClient from "./axiosClient";

/**
 * Đăng nhập
 * @param {Object} request
 * @returns Response từ Backend
 */
export const loginApi = async (request) => {
    try {
        const response = await axiosClient.post("/auth/login", request);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
};

/**
 * Đăng xuất
 */
export const logoutApi = async () => {
    try {
        const response = await axiosClient.post("/auth/logout");
        return response.data;
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};

/**
 * Quên mật khẩu
 */
export const forgotPasswordApi = async (email) => {
    try {
        const response = await axiosClient.post("/auth/forgot-password", {
            email,
        });

        return response.data;
    } catch (error) {
        console.error("Forgot Password Error:", error);
        throw error;
    }
};

/**
 * Đặt lại mật khẩu
 */
export const resetPasswordApi = async (request) => {
    try {
        const response = await axiosClient.post(
            "/auth/reset-password",
            request
        );

        return response.data;
    } catch (error) {
        console.error("Reset Password Error:", error);
        throw error;
    }
};