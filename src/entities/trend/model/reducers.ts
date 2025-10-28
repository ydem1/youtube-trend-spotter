import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { TrendState } from "./slice";
import { fetchTrendsAsync } from "./thunks";
import { TrendStats } from "./types";

type ActionReducerMapBuilderWithBlogState = ActionReducerMapBuilder<TrendState>;

export const fetchTrendsReducer = (
  builder: ActionReducerMapBuilderWithBlogState
) => {
  builder.addCase(fetchTrendsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    fetchTrendsAsync.fulfilled,
    (
      state,
      actions: PayloadAction<{
        termA: TrendStats | null;
        termB: TrendStats | null;
      }>
    ) => {
      state.isLoading = false;
      state.termA = actions.payload.termA;
      state.termB = actions.payload.termB;
    }
  );

  builder.addCase(fetchTrendsAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
