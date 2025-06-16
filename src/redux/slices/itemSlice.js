import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as AuthService from "@services/authService.js";
import * as ItemService from "@services/itemService.js";

export const item = createApi({
  reducerPath: "item",
  baseQuery: fetchBaseQuery({ baseUrl: "" }), // Không cần baseUrl vì Service đã xử lý
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (credentials) => {
        const result = await AuthService.login(credentials);
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    getUserProfile: builder.query({
      queryFn: async () => {
        const result = await AuthService.getUserProfile();
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    getItems: builder.query({
      queryFn: async ({ page, limit }) => {
        const result = await ItemService.getItems({ page, limit });
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    addItem: builder.mutation({
      queryFn: async (item) => {
        const result = await ItemService.addItem(item);
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    updateItem: builder.mutation({
      queryFn: async ({ id, ...item }) => {
        const result = await ItemService.updateItem({ id, ...item });
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    deleteItem: builder.mutation({
      queryFn: async (id) => {
        const result = await ItemService.deleteItem(id);
        if (result.success) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
  }),
});

// Export hooks để sử dụng trong components
export const {
  useLoginMutation,
  useGetUserProfileQuery,
  useGetItemsQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = item;
