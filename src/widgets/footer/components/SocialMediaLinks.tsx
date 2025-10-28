import { Icon } from "src/shared/ui/Icon";
import { SOCIAL_MEDIA_LINKS } from "../config/constants";

export const SocialMediaLinks = () => (
  <nav>
    <ul className="flex flex-wrap gap-5">
      {SOCIAL_MEDIA_LINKS.map(({ href, icon }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon name={icon} className="text-widget" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
