import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trend from "src/entities/trend/model/slice";

export const store = configureStore({
  reducer: combineReducers({
    trend,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
