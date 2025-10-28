import React, { FC, useEffect, useState } from "react";
import cn from "classnames";
import { MadeBy } from "src/shared/ui/MadeBy";
import { BurgerButton } from "./BurgerButton";

interface Props {
  children: React.ReactNode;
}

export const MenuToggle: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="relative">
      <BurgerButton isOpen={isOpen} onToggle={handleToggleMenu} />

      <nav
        className={cn(
          "fixed left-0 top-0 z-10 h-full w-full transform bg-background transition-transform duration-300 ease-in-out",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
      >
        {children}
        <MadeBy className="absolute bottom-5 left-5" />
      </nav>
    </div>
  );
};
