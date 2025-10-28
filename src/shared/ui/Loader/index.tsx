import React, { type FC } from "react";
import cn from "classnames";
import { Sizes } from "src/shared/types/sizes";
import { LOADER_SIZES } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({ size = Sizes.XS, className }) => (
  <div
    className={cn(
      "mx-auto animate-spin rounded-full border-2 border-primary/60 border-t-gray-400",
      LOADER_SIZES[size],
      className
    )}
  />
);
