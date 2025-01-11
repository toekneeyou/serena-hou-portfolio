import { SOCIAL_MEDIA_LINKS } from "../constants";

export const ContactIcons = () => {
  return (
    <ul className="flex items-center justify-center gap-x-9 w-full mb-4">
      {SOCIAL_MEDIA_LINKS.map((sm) => {
        return (
          <li key={sm.name}>
            <a href={sm.url} target="_blank">
              <sm.icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
