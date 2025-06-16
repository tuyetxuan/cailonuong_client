import axiosInstance from "@configs/axios/axiosConfig.js";

// Hàm xử lý lỗi chung
const handleError = (error) => {
  const errorResponse = error.response?.data || {
    message: "Something went wrong",
  };
  return {
    success: false,
    error: errorResponse.message || "Unknown error",
    status: error.response?.status || 500,
  };
};

// Hàm xử lý response chung
const handleResponse = (response) => ({
  success: true,
  data: response.data,
  status: response.status,
});

// Custom GET request
const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Custom POST request
const post = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Custom PUT request
const put = async (url, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Custom DELETE request
const del = async (url, params = {}) => {
  try {
    const response = await axiosInstance.delete(url, { params });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export default {
  get,
  post,
  put,
  delete: del,
};
