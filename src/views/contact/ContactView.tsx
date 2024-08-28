import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import ContactButton from "./ContactButton";

const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

export const ContactView = () => {
  return (
    <section className="h-screen grid grid-rows-[max-content_1fr_max-content] p-[8rem]">
      <div className="between-row">
        <span className="opacity-80">BASED IN LOS ANGELES</span>
        <span className="opacity-80">WORKING WORLDWIDE</span>
      </div>
      <CopyEmail />
      <ContactButtons />
    </section>
  );
};

const CopyEmail = () => {
  /**
   * Copy email to clipboard and alert users.
   */
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert("Email successfully copied to clipboard!");
  };

  return (
    <div className="copy-email centered-col">
      <h2 className="opacity-50 text-[5rem] mb-[2.25rem]">LET'S CONNECT!</h2>
      <div className="centered-row gap-x-4">
        <a href={`mailto:${emailAddress}`} className="font-bold text-[1.5rem]">
          {emailAddress}
        </a>
        <button onClick={handleCopyEmail}>
          <DocumentDuplicateIcon className="size-6 text-white" />
        </button>
      </div>
    </div>
  );
};

const ContactButtons = () => {
  return (
    <ul className="contact-buttons between-row">
      <li>
        <ContactButton
          name="INSTAGRAM"
          logoSrc="/src/assets/instagram-logo.png"
          onClick={() =>
            window.open(import.meta.env.VITE_INSTAGRAM_URL, "_blank")
          }
        />
      </li>
      <li>
        <ContactButton
          name="LINKEDIN"
          logoSrc="/src/assets/linkedin-logo.png"
          onClick={() =>
            window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank")
          }
        />
      </li>
      <li>
        <ContactButton
          name="YOUTUBE"
          logoSrc="/src/assets/youtube-logo.png"
          onClick={() =>
            window.open(import.meta.env.VITE_YOUTUBE_URL, "_blank")
          }
        />
      </li>
    </ul>
  );
};
