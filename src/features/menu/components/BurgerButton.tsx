import React, { FC } from "react";
import cn from "classnames";
import { IconButton } from "src/shared/ui/Button/IconButton";

const DEFAULT_CLASSNAME =
  "bg-default absolute block h-[3px] w-full rounded-sm transition-all duration-300 ease-in-out";

interface Props {
  isOpen: boolean;
  onToggle: VoidFunction;
}

export const BurgerButton: FC<Props> = ({ isOpen, onToggle }) => (
  <IconButton
    className="relative z-50 block h-6 w-6 cursor-pointer"
    onClick={onToggle}
    icon={
      <>
        <div
          className={cn(
            "rounded-full border border-primary opacity-0 transition-all duration-300",
            { "p-10 opacity-100": isOpen }
          )}
        />

        <span
          className={cn(DEFAULT_CLASSNAME, "top-1", {
            "!top-1/2 -translate-y-1/2 rotate-45": isOpen,
            "left-0 !w-1/2": !isOpen,
          })}
        />
        <span
          className={cn(DEFAULT_CLASSNAME, {
            "w-0 opacity-0": isOpen,
          })}
        />
        <span
          className={cn(DEFAULT_CLASSNAME, "bottom-1", {
            "!bottom-1/2 translate-y-1/2 -rotate-45": isOpen,
            "right-0 !w-1/2": !isOpen,
          })}
        />
      </>
    }
  />
);
