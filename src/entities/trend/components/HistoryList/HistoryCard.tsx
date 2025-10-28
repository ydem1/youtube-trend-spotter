import { FC } from "react";
import Animation from "src/shared/ui/Animation";
import { Button } from "src/shared/ui/Button";

interface Props {
  termA: string;
  termB: string;
  date: string;
  index: number;
  onCompareAgain: () => void;
}

export const HistoryCard: FC<Props> = ({
  termA,
  termB,
  date,
  index,
  onCompareAgain,
}) => (
  <Animation variant="slide-top" delay={100 * index}>
    <div className="w-full rounded-2xl border border-primary/10 bg-gradient-to-br from-widget/70 to-background/70 p-6 shadow-primary-glow backdrop-blur-md transition-all duration-300 hover:shadow-primary-glow-hover">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">
            {termA} <span className="text-primary">vs</span> {termB}
          </p>

          <p className="mt-1">{new Date(date).toLocaleString()}</p>
        </div>

        <Button color="primary" variant="outline" onClick={onCompareAgain}>
          Compare again
        </Button>
      </div>
    </div>
  </Animation>
);
