import { InputVariants } from "./types";

export const TEXT_INPUT_STYLE_VARIANTS = {
  [InputVariants.PRIMARY]:
    "rounded-xl border w-full border-primary/20 bg-transparent px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/40",

  [InputVariants.SECONDARY]:
    "rounded-xl border w-full border-primary/10 bg-widget/80 px-4 py-3 outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/30 hover:border-primary/30 placeholder:text-default",
};
