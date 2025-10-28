import React, { FC, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

interface Props {
  icon: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<Props> = ({
  icon,
  className,
  type = "button",
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "flex items-center justify-center rounded-full transition duration-300 active:translate-y-0.5 disabled:opacity-50",
        className
      )}
    >
      {icon}
    </button>
  );
};
