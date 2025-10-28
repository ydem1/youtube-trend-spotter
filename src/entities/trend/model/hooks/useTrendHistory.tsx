import { useAppDispatch } from "src/shared/hooks/useAppDispatch";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import { selectorHistory } from "../selector";
import { clearHistory } from "../slice";

export const useTrendHistory = () => {
  const dispatch = useAppDispatch();

  const history = useAppSelector(selectorHistory);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleCompareAgain = (termA: string, termB: string) => {
    console.log(termA, termB);
  };

  return { history, handleClearHistory, handleCompareAgain };
};
