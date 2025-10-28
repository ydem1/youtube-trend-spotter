import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendsReducer } from "./reducers";
import { TrendStats } from "./types";

export interface TrendState {
  termA: TrendStats | null;
  termB: TrendStats | null;
  isLoading: boolean;
}

const initialState: TrendState = {
  termA: null,
  termB: null,
  isLoading: false,
};

export const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers(builder) {
    fetchTrendsReducer(builder);
  },
});

export default trendSlice.reducer;
