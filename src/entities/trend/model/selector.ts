import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

export const selectorTrendState = (state: RootState) => state.trend;

export const selectorIsLoading = createSelector(
  selectorTrendState,
  (trendState) => trendState.isLoading
);

export const selectorTermA = createSelector(
  selectorTrendState,
  (trendState) => trendState.termA
);

export const selectorTermB = createSelector(
  selectorTrendState,
  (trendState) => trendState.termB
);

export const selectorHistory = createSelector(
  selectorTrendState,
  (trendState) => trendState.history
);
