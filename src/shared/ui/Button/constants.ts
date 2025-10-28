import cn from "classnames";
import { ButtonColor, ButtonVariant } from "./types";

const BASE =
  "rounded-xl text-lg font-normal py-4 px-6 leading-[120%] disabled:hover:shadow-none";

const COLOR_STYLES: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    solid: cn(
      "bg-primary text-inverse hover:bg-primary/90 hover:shadow-primary-glow disabled:hover:bg-primary",
      BASE
    ),
    outline: cn(
      "border border-primary text-primary hover:bg-primary/10 hover:shadow-primary-glow disabled:hover:bg-inherit",
      BASE
    ),
    ghost: cn("text-primary", BASE),
  },
  default: {
    solid: cn(
      "bg-default text-black hover:bg-default/90 hover:shadow-default-glow disabled:hover:bg-default",
      BASE
    ),
    outline: cn(
      "border border-default text-default hover:bg-default/10 hover:shadow-default-glow disabled:hover:bg-inherit",
      BASE
    ),
    ghost: cn("text-default", BASE),
  },
};

export const getButtonClasses = (
  color?: ButtonColor,
  variant?: ButtonVariant
): string => {
  if (!color || !variant) return "";
  return COLOR_STYLES[color]?.[variant] ?? "";
};
