import { Logo } from "src/shared/ui/Logo";
import { MadeBy } from "src/shared/ui/MadeBy";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer className="border-t bg-white py-12">
    <div className="container flex flex-wrap items-center justify-between gap-10">
      <div className="flex flex-col gap-4">
        <Logo className="text-widget" />
        <MadeBy className="text-widget" />
      </div>

      <SocialMediaLinks />
    </div>
  </footer>
);
