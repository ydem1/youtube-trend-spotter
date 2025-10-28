import { useMediaQuery } from "react-responsive";
import { SCREEN_BREAKPOINTS } from "src/app/config/screenBreakpoints";
import { MenuToggle } from "src/features/menu";
import { Logo } from "src/shared/ui/Logo";
import { ActionButtons } from "./ActionButtons";

export const Header = () => {
  const isMDScreenBreakpoint = useMediaQuery({
    maxWidth: SCREEN_BREAKPOINTS.MD,
  });

  return (
    <header className="relative mb-24 flex w-full justify-center md:mb-36">
      <div className="fixed inset-x-5 top-4 z-20 flex h-16 items-center justify-between rounded-xl bg-widget p-4 shadow-md md:top-6 md:h-24 lg:inset-x-0 lg:mx-auto lg:max-w-5xl">
        <Logo />

        <div className="flex items-center gap-5">
          {isMDScreenBreakpoint ? (
            <MenuToggle>
              <ActionButtons className="flex h-full flex-col items-center justify-center gap-10" />
            </MenuToggle>
          ) : (
            <ActionButtons className="flex items-center gap-5" />
          )}
        </div>
      </div>
    </header>
  );
};
