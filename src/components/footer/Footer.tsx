import { ContactIcons } from "@features/contacts/components/ContactIcons";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isHidden = false;

  if (isHidden) return null;

  return (
    <footer className="border-t-[1px] border-t-[#999999] pt-4 pb-9 px-8 flex flex-col">
      <ContactIcons />
      <p className="text-center mb-2 text-xs">
        Check out this portfolio on a desktop for the best experience!
      </p>
      <p className="text-center text-xs">© 2024 Serena Hou</p>
    </footer>
  );
};
