import axios from "axios";

// Tạo instance Axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: "http://your-api-url", // Thay bằng URL API của bạn
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Lưu trữ refresh token request để tránh gọi nhiều lần
let refreshTokenRequest = null;

// Interceptor cho request: Đính kèm token vào header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // Nếu không có token, có thể thêm xử lý tùy chọn
      console.warn("No access token found in localStorage");
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Interceptor cho response: Xử lý lỗi và refresh token
axiosInstance.interceptors.response.use(
  (response) => {
    // Trả về response nếu thành công
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const errorMessage = error.response?.data?.message || "Unknown error";

    // Kiểm tra lỗi cụ thể: Token hết hạn
    if (
      status === 401 &&
      errorMessage.includes("Token expired") &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Nếu chưa có refresh request, tạo mới
        refreshTokenRequest =
          refreshTokenRequest ||
          axios.post(
            "http://your-api-url/refresh-token", // Thay bằng endpoint refresh token
            { refreshToken: localStorage.getItem("refreshToken") },
          );

        const { data } = await refreshTokenRequest;
        const { accessToken, refreshToken } = data;

        // Lưu token mới
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // Reset refreshTokenRequest
        refreshTokenRequest = null;

        // Cập nhật header cho request gốc
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        // Thử lại request gốc
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Xử lý lỗi refresh token
        console.error("Refresh token failed:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        refreshTokenRequest = null;
        window.location.href = "/login"; // Chuyển hướng đến trang đăng nhập
        return Promise.reject(refreshError);
      }
    }

    // Xử lý các lỗi khác
    if (status === 403) {
      console.error(
        "Forbidden: You do not have permission to access this resource",
      );
    } else if (status === 400) {
      console.error("Bad Request:", errorMessage);
    } else if (status === 500) {
      console.error("Server Error:", errorMessage);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
