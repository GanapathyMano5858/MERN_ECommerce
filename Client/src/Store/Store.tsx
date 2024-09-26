import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // No need for .tsx extension since it's not JSX

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
