import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  clearTerms,
  selectorIsLoading,
  selectorTermA,
  selectorTermB,
} from "src/entities/trend";
import { fetchTrendsAsync } from "src/entities/trend/model/thunks";
import { useAppDispatch } from "src/shared/hooks/useAppDispatch";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import { CompareFormData, compareSchema } from "./schema";

export const useCompareForm = () => {
  const dispatch = useAppDispatch();
  const termA = useAppSelector(selectorTermA);
  const termB = useAppSelector(selectorTermB);
  const isLoading = useAppSelector(selectorIsLoading);

  const methods = useForm<CompareFormData>({
    resolver: zodResolver(compareSchema),
    mode: "onBlur",
    defaultValues: {
      termA: termA?.term || "",
      termB: termB?.term || "",
    },
  });

  const onSubmit = async ({ termA, termB }: CompareFormData) => {
    await dispatch(
      fetchTrendsAsync({
        termA,
        termB,
        onSuccess: () => {
          methods.reset();
          document
            .getElementById("charts")
            ?.scrollIntoView({ behavior: "smooth" });
        },
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(clearTerms());
    };
  }, [dispatch]);

  return { methods, onSubmit, isLoading };
};
