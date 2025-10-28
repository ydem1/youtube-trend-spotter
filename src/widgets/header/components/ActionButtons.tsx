import { FC } from "react";
import { Link } from "react-router-dom";
import { PATHNAMES } from "src/app/config/routes";
import { Button } from "src/shared/ui/Button";

interface Props {
  className?: string;
}

export const ActionButtons: FC<Props> = ({ className }) => (
  <div className={className}>
    <Link to={PATHNAMES.HISTORY}>
      <Button color="default" variant="ghost">
        History
      </Button>
    </Link>

    <Link to={PATHNAMES.COMPARE}>
      <Button color="primary" variant="solid">
        Compare
      </Button>
    </Link>
  </div>
);
