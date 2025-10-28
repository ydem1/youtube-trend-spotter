import { FC } from "react";
import { Link } from "react-router-dom";

interface MadeByProps {
  className?: string;
}

export const MadeBy: FC<MadeByProps> = ({ className }) => (
  <Link
    className={className}
    to="https://vadym-bavorovskyi.vercel.app/"
    target="_blank"
  >
    <span className="text-xl font-normal tracking-tight">
      &copy; Made by Bavorovskiy Vadym
    </span>
  </Link>
);
