import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchTrendsAsync } from "src/entities/trend/model/thunks";
import { useAppDispatch } from "src/shared/hooks/useAppDispatch";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import { CompareFormData, compareSchema } from "./schema";

export const useCompareForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((s) => s.trend);

  const methods = useForm<CompareFormData>({
    resolver: zodResolver(compareSchema),
    mode: "onBlur",
  });

  const onSubmit = async ({ termA, termB }: CompareFormData) => {
    await dispatch(
      fetchTrendsAsync({
        termA,
        termB,
        onSuccess: () => {
          document
            .getElementById("charts")
            ?.scrollIntoView({ behavior: "smooth" });
        },
      })
    );
  };

  return { methods, onSubmit, isLoading };
};
