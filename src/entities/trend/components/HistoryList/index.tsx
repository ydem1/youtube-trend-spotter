import { FC } from "react";
import { useAppDispatch } from "src/shared/hooks/useAppDispatch";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import Animation from "src/shared/ui/Animation";
import { Button } from "src/shared/ui/Button";
import { selectorHistory } from "../../model/selector";
import { clearHistory } from "../../model/slice";
import { HistoryCard } from "./HistoryCard";
import { HistoryEmpty } from "./HistoryEmpty";

export const HistoryList: FC = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectorHistory);

  return (
    <section className="container py-12 md:py-24">
      <Animation variant="slide-bottom" delay={200}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center">Search History</h2>
          <p className="mb-10 text-center text-default/60">
            Your recent YouTube trend comparisons
          </p>
        </div>
      </Animation>

      {history.length > 0 ? (
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {history.map((item, i) => (
            <HistoryCard key={item.date} {...item} index={i} />
          ))}

          <div className="mt-10 flex justify-center">
            <Button
              color="primary"
              variant="outline"
              onClick={() => dispatch(clearHistory())}
            >
              Clear history
            </Button>
          </div>
        </div>
      ) : (
        <HistoryEmpty />
      )}
    </section>
  );
};
