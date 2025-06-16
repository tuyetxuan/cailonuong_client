import apiClient from "@api/apiClient.js";

export const getItems = async ({ page = 1, limit = 10 }) => {
  return apiClient.get("/items", { page, limit });
};

export const addItem = async (item) => {
  return apiClient.post("/items", item);
};

export const updateItem = async ({ id, ...item }) => {
  return apiClient.put(`/items/${id}`, item);
};

export const deleteItem = async (id) => {
  return apiClient.delete(`/items/${id}`);
};
