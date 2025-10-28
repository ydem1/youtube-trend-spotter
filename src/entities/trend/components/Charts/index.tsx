import { FC } from "react";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import Animation from "src/shared/ui/Animation";
import { useMergedData } from "../../model/hooks/useMergedData";
import { ChartsGraph } from "./ChartsGraph";
import { ChartsHeader } from "./ChartsHeader";
import { ChartsStats } from "./ChartsStats";
import { NoDataYet } from "./NoDataYet";

export const Charts: FC = () => {
  const { termA, termB } = useAppSelector((s) => s.trend);
  const merged = useMergedData(termA, termB);

  const hasData = termA && termB;

  return (
    <section id="charts" className="container py-12 md:py-24">
      {hasData ? (
        <Animation variant="slide-bottom" delay={250}>
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-primary/10 bg-gradient-to-br from-widget to-background/80 p-10 shadow-primary-glow backdrop-blur-md transition-all duration-700 hover:shadow-primary-glow-hover">
            <ChartsHeader termA={termA.term} termB={termB.term} />
            <ChartsGraph data={merged} termA={termA.term} termB={termB.term} />
            <ChartsStats terms={[termA, termB]} />
          </div>
        </Animation>
      ) : (
        <NoDataYet />
      )}
    </section>
  );
};
