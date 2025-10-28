export interface TrendPoint {
  date: string;
  views: number;
}

export interface TrendStats {
  term: string;
  totalResultsApprox: number;
  totalViews: number;
  avgViews: number;
  totalLikes: number;
  avgLikes: number;
  timeline: TrendPoint[];
}

export interface MergedDataPoint {
  date: string;
  [term: string]: string | number;
}

export interface TrendHistoryItem {
  termA: TrendStats;
  termB: TrendStats;
  date: string;
}
