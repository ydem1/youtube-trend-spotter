import React, { FC, memo, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { Loader } from "../Loader";
import { getButtonClasses } from "./constants";
import { ButtonColor, ButtonVariant } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  startContent?: ReactNode;
  endContent?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = memo(
  ({
    children,
    className,
    color = "default",
    variant = "ghost",
    type,
    startContent,
    endContent,
    isDisabled,
    isLoading,
    onClick,
  }) => {
    const combinedClassNames = cn(
      "flex justify-center items-center flex-shrink-0 outline-0 transition-all ease-in-out duration-300 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100",
      getButtonClasses(color, variant),
      className
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {startContent}
            {children}
            {endContent}
          </>
        )}
      </button>
    );
  }
);
