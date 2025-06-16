import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as AddressService from "@services/addressService.js";

export const address = createApi({
  reducerPath: "address",
  baseQuery: fetchBaseQuery({ baseUrl: "" }), // Không cần baseUrl vì Service đã xử lý
  endpoints: (builder) => ({
    getProvinces: builder.query({
      queryFn: async () => {
        const result = await AddressService.getProvinces();
        if (result.status === 200) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    getDistricts: builder.query({
      queryFn: async ({ provinceCode }) => {
        const result = await AddressService.getDistricts({ provinceCode });
        if (result.status === 200) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
    getWards: builder.query({
      queryFn: async ({ districtCode }) => {
        const result = await AddressService.getWards({ districtCode });
        if (result.status === 200) {
          return { data: result.data };
        }
        return { error: { message: result.error, status: result.status } };
      },
    }),
  }),
});

// Export hooks để sử dụng trong components
export const { useGetProvincesQuery, useGetDistrictsQuery, useGetWardsQuery } =
  address;
