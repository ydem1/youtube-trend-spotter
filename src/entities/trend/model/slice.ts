import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setTerms: (
      state,
      actions: PayloadAction<{
        termA: TrendStats | null;
        termB: TrendStats | null;
      }>
    ) => {
      state.termA = actions.payload.termA;
      state.termB = actions.payload.termB;
    },
    clearTerms: (state) => {
      state.termA = null;
      state.termB = null;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers(builder) {
    fetchTrendsReducer(builder);
  },
});

export const { setTerms, clearTerms, clearHistory } = trendSlice.actions;
export default trendSlice.reducer;
