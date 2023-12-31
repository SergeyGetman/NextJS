import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice";

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
