import { ContactIcons } from "@features/contacts/components/ContactIcons";

export const Footer = () => {
  const isHidden = false;

  if (isHidden) return null;

  return (
    <footer className="border-t-[1px] border-t-[#999999] p-7 flex flex-col">
      <ContactIcons />
      <p className="text-center mb-2 text-12">
        Check out this portfolio on a desktop for the best experience!
      </p>
      <p className="text-center text-12">© 2024 Serena Hou</p>
    </footer>
  );
};
