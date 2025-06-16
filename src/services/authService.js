import apiClient from "@api/apiClient.js";

// Đăng nhập
export const login = async (credentials) => {
  const response = await apiClient.post("/login", credentials);
  const { accessToken, refreshToken } = response.data;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  return response.data;
};

// Đăng xuất
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

// Lấy thông tin người dùng
export const getUserProfile = async () => {
  return apiClient.get("/user/profile");
};
