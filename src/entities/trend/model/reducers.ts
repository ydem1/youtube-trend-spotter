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
      const { termA, termB } = actions.payload;

      state.isLoading = false;
      state.termA = termA;
      state.termB = termB;

      if (termA && termB) {
        state.history.unshift({
          termA,
          termB,
          date: new Date().toISOString(),
        });
      }
    }
  );

  builder.addCase(fetchTrendsAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
