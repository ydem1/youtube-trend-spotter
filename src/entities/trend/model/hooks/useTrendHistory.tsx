import { useNavigate } from "react-router-dom";
import { PATHNAMES } from "src/app/config/routes";
import { useAppDispatch } from "src/shared/hooks/useAppDispatch";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import { selectorHistory } from "../selector";
import { clearHistory, setTerms } from "../slice";
import { TrendStats } from "../types";

export const useTrendHistory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const history = useAppSelector(selectorHistory);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleCompareAgain = (termA: TrendStats, termB: TrendStats) => {
    dispatch(
      setTerms({
        termA,
        termB,
      })
    );

    navigate(PATHNAMES.COMPARE);
  };

  return { history, handleClearHistory, handleCompareAgain };
};
