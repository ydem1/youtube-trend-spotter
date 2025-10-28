import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendsReducer } from "./reducers";
import { TrendHistoryItem, TrendStats } from "./types";

export interface TrendState {
  termA: TrendStats | null;
  termB: TrendStats | null;
  isLoading: boolean;
  history: TrendHistoryItem[];
}

const initialState: TrendState = {
  termA: null,
  termB: null,
  isLoading: false,
  history: [],
};

export const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers(builder) {
    fetchTrendsReducer(builder);
  },
});

export const { clearHistory } = trendSlice.actions;
export default trendSlice.reducer;
