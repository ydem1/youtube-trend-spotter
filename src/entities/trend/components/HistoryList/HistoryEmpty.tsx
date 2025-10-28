import { FC } from "react";
import Animation from "src/shared/ui/Animation";

export const HistoryEmpty: FC = () => (
  <Animation variant="fade-in" delay={300}>
    <div className="mx-auto max-w-md rounded-3xl border border-primary/10 bg-gradient-to-br from-widget/70 to-background/70 p-10 text-center shadow-primary-glow backdrop-blur-md">
      <h4 className="mb-2">No history yet</h4>
      <p>Start comparing two topics to see them appear here.</p>
    </div>
  </Animation>
);
