import { configureStore } from "@reduxjs/toolkit";
import { ApiAuth } from "../Services";

const store = configureStore({
  reducer: {
    [ApiAuth.reducerPath]: ApiAuth.reducer,
  },
  middleware: (middleware) => middleware().concat(ApiAuth.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
