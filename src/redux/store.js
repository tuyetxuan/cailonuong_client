import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { address } from "@slice/addressSlice.js";
import { item } from "@slice/itemSlice.js";

export const store = configureStore({
  reducer: {
    [item.reducerPath]: item.reducer,
    [address.reducerPath]: address.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(item.middleware).concat(address.middleware),
});

// Thiết lập listeners cho RTK Query
setupListeners(store.dispatch);
