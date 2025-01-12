import { SOCIAL_MEDIA_LINKS } from "@constants/contacts";

export const Footer = () => {
  const isHidden = false;

  if (isHidden) return null;

  return (
    <footer className="border-t-[1px] border-t-[#999999] p-7 flex flex-col">
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
      <p className="text-center mb-2 text-12">
        Check out this portfolio on a desktop for the best experience!
      </p>
      <p className="text-center text-12">© 2024 Serena Hou</p>
    </footer>
  );
};
