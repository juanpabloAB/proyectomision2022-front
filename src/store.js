import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import serverReducer from "./features/server";

export default configureStore({
  reducer: {
    auth: authReducer,
    server: serverReducer,
  },
});
