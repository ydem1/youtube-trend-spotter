export interface TermStats {
  term: string;
  totalResultsApprox: number;
  totalViews: number;
  avgViews: number;
  totalLikes: number;
  avgLikes: number;
  timeline: {
    date: string;
    views: number;
  }[];
}

export interface CompareResult {
  termA: TermStats | null;
  termB: TermStats | null;
}
