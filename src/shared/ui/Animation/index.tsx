import React, { ReactNode, useEffect, useRef, useState } from "react";
import s from "./animations.module.scss";

interface AnimationProps {
  children: ReactNode;
  variant?:
    | "slide-bottom"
    | "slide-top"
    | "fade-in"
    | "slide-left"
    | "slide-right";
  delay?: number;
  className?: string;
}

const Animation: React.FC<AnimationProps> = ({
  children,
  variant = "slide-bottom",
  delay = 300,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);

              if (observer.current) {
                observer.current.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer.current.observe(divRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [delay]);

  return (
    <div
      ref={divRef}
      className={`${s.animation} ${variant ? s[variant] : ""} ${className ? className : ""} ${isVisible ? s.active : ""}`}
    >
      {children}
    </div>
  );
};

export default Animation;
