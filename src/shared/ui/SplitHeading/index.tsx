import React from "react";
import cn from "classnames";

interface SplitHeadingProps {
  className?: string;
  text: string;
  as: keyof JSX.IntrinsicElements;
  highlightIndex?: number;
  highlightLetters?: number;
}

export const SplitHeading: React.FC<SplitHeadingProps> = ({
  className,
  text,
  as: Tag,
  highlightIndex = 1,
  highlightLetters = 2,
}) => {
  const words = text.split(" ");

  return (
    <Tag className={cn("font-bold leading-tight", className)}>
      {words.map((word, index) => {
        if (index === 0)
          return (
            <span key={index} className="text-primary">
              {word}{" "}
            </span>
          );

        if (index === highlightIndex) {
          const firstPart = word.slice(0, highlightLetters);
          const restPart = word.slice(highlightLetters);

          return (
            <span key={index}>
              <span
                className="bg-secondary px-1 text-white"
                style={{ borderRadius: "2px" }}
              >
                {firstPart}
              </span>
              <span className="text-white">{restPart} </span>
            </span>
          );
        }

        return (
          <span key={index} className="text-white">
            {word}{" "}
          </span>
        );
      })}
    </Tag>
  );
};
