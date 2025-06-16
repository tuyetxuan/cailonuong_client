import axios from "axios";

// Base URL của API - https://provinces.open-api.vn/api
const BASE_URL =
  import.meta.env.VITE_BASE_OPEN_API || "https://provinces.open-api.vn/api";

// Lấy danh sách tỉnh
export const getProvinces = async ({ page = 1, limit = 10 } = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/p/`, {
      params: { page, limit },
    });
    return response || [];
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error;
  }
};

// Lấy danh sách quận/huyện theo mã tỉnh
export const getDistricts = async ({
  provinceCode,
  page = 1,
  limit = 10,
} = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/d/${provinceCode}`, {
      params: { page, limit },
    });
    return response.data || [];
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};

// Lấy danh sách xã/phường theo mã quận/huyện
export const getWards = async ({ districtCode, page = 1, limit = 10 } = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/w/${districtCode}`, {
      params: { page, limit },
    });
    return response.data || [];
  } catch (error) {
    console.error("Error fetching wards:", error);
    throw error;
  }
};
