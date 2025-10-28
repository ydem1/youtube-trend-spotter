import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { APP_NAME } from "src/app/config/projectName";
import { PATHNAMES } from "src/app/config/routes";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => (
  <Link className={cn("text-3xl font-bold", className)} to={PATHNAMES.HOME}>
    {APP_NAME}
  </Link>
);
