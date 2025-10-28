import { FC } from "react";
import Animation from "src/shared/ui/Animation";

export const NoDataYet: FC = () => (
  <Animation variant="slide-bottom" delay={200}>
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-3xl border border-primary/10 bg-gradient-to-br from-widget/70 to-background/70 p-12 text-center shadow-primary-glow backdrop-blur-md">
      <h4>No data yet</h4>
      <p className="mt-2 max-w-md text-sm text-default/60 md:text-base">
        Enter two topics above and compare their popularity on YouTube to see
        detailed charts and statistics here.
      </p>
    </div>
  </Animation>
);
