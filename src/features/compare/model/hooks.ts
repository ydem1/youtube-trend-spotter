import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompareFormData, compareSchema } from "./schema";

export const useCompareForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<CompareFormData>({
    resolver: zodResolver(compareSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: CompareFormData) => {
    setIsLoading(true);

    // TODO: handle logic here
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    console.log(data);
  };

  return { methods, onSubmit, isLoading };
};
