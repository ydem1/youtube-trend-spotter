import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTermData } from "./api/fetchTermData";

export const TREND_DATA_SLICE_NAME = "trend";

interface FetchTrendsArgs {
  termA: string;
  termB: string;
  onSuccess: () => void;
}

export const fetchTrendsAsync = createAsyncThunk(
  `${TREND_DATA_SLICE_NAME}/fetchBlogPosts`,
  async ({ termA, termB, onSuccess }: FetchTrendsArgs, { rejectWithValue }) => {
    try {
      const [dataA, dataB] = await Promise.all([
        fetchTermData(termA),
        fetchTermData(termB),
      ]);

      onSuccess();

      return { termA: dataA, termB: dataB };
    } catch {
      return rejectWithValue(
        "Failed to fetch YouTube data due to a general error."
      );
    }
  }
);
