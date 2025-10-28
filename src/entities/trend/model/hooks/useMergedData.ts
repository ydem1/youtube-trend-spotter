import { useMemo } from "react";
import dayjs from "dayjs";
import { MergedDataPoint, TrendStats } from "../types";

export const useMergedData = (
  termA: TrendStats | null,
  termB: TrendStats | null
): MergedDataPoint[] => {
  return useMemo(() => {
    if (!termA || !termB) return [];

    return [
      ...termA.timeline.map((p) => ({
        date: dayjs(p.date).format("MMM D, YYYY"),
        [termA.term]: p.views,
      })),
      ...termB.timeline.map((p) => ({
        date: dayjs(p.date).format("MMM D, YYYY"),
        [termB.term]: p.views,
      })),
    ];
  }, [termA, termB]);
};
