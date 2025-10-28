import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTermData } from "./api/fetchTermData";
import { TrendStats } from "./types";

export const TREND_DATA_SLICE_NAME = "trend";

export const fetchTrendsAsync = createAsyncThunk<
  { termA: TrendStats | null; termB: TrendStats | null },
  { termA: string; termB: string }
>(
  `${TREND_DATA_SLICE_NAME}/fetchTrendsData`,
  async ({ termA, termB }, { rejectWithValue }) => {
    try {
      const [dataA, dataB] = await Promise.all([
        fetchTermData(termA),
        fetchTermData(termB),
      ]);

      return { termA: dataA, termB: dataB };
    } catch {
      return rejectWithValue(
        "Failed to fetch YouTube data due to a general error."
      );
    }
  }
);
