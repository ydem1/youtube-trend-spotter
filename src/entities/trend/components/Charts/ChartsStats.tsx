import { TrendStats } from "../../model/types";

interface Props {
  terms: [TrendStats, TrendStats];
}

export const ChartsStats = ({ terms }: Props) => (
  <div className="mt-10 grid grid-cols-2 gap-6 text-center text-default/80">
    {terms.map((term) => (
      <div
        key={term.term}
        className="rounded-2xl border border-primary/10 bg-background/60 p-6 transition-all hover:bg-background/70"
      >
        <h4 className="mb-2 text-lg font-semibold text-primary">{term.term}</h4>
        <p className="text-sm text-default/60">
          Total Videos:{" "}
          <span className="font-medium text-default">
            {term.totalResultsApprox.toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-default/60">
          Total Views:{" "}
          <span className="font-medium text-default">
            {term.totalViews.toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-default/60">
          Avg Views:{" "}
          <span className="font-medium text-default">
            {Math.round(term.avgViews).toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-default/60">
          Avg Likes:{" "}
          <span className="font-medium text-default">
            {Math.round(term.avgLikes).toLocaleString()}
          </span>
        </p>
      </div>
    ))}
  </div>
);
