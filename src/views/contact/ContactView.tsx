import { CopyIcon } from "@components/icons/CopyIcon";
import { SOCIAL_MEDIA_LINKS } from "@constants/contacts";
import serenaContactGif from "@assets/serena-contact.gif";

const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

export const ContactView = () => {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    alert("Email successfully copied to clipboard!");
  };

  return (
    <main className="main-content-layout">
      <div className="space-y-14 mx-auto mobile-container">
        <h2
          className={`text-40 text-center font-mango font-black leading-none tracking-wider`}
        >
          LET'S CONNECT!
        </h2>

        <div className="h-40 w-40 rounded-full center-row mx-auto overflow-hidden">
          <img src={serenaContactGif} className="w-full" alt="Serena" />
        </div>

        <div className="space-y-6">
          <div className="centered-row gap-x-4">
            <p>{emailAddress}</p>

            <button onClick={handleCopyEmail} aria-label="Copy Email">
              <CopyIcon />
            </button>
          </div>
          <ul className="centered-col gap-y-6">
            {SOCIAL_MEDIA_LINKS.filter(
              (socialMedia) => socialMedia.name !== "Email"
            ).map((sm) => {
              const handleClick = () => {
                window.open(sm.url, "_blank");
              };

              return (
                <li key={sm.name}>
                  <button className="btn" onClick={handleClick}>
                    {sm.name}
                  </button>
                </li>
              );
            })}
          </ul>{" "}
        </div>
      </div>
    </main>
  );
};

// export const ContactView = () => {
//   return (
//     <section className="h-screen grid grid-rows-[max-content_1fr_max-content] p-[8rem]">
//       <div className="between-row">
//         <span className="opacity-80">BASED IN LOS ANGELES</span>
//         <span className="opacity-80">WORKING WORLDWIDE</span>
//       </div>
//       <CopyEmail />
//       <ContactButtons />
//     </section>
//   );
// };

// const CopyEmail = () => {
//   /**
//    * Copy email to clipboard and alert users.
//    */
//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText(emailAddress);
//     alert("Email successfully copied to clipboard!");
//   };

//   return (
//     <div className="copy-email centered-col">
//       <h2 className="opacity-50 text-[5rem] mb-[2.25rem]">LET'S CONNECT!</h2>
//       <div className="centered-row gap-x-4">
//         <a href={`mailto:${emailAddress}`} className="font-bold text-[1.5rem]">
//           {emailAddress}
//         </a>
//         <button onClick={handleCopyEmail}>
//           <DocumentDuplicateIcon className="size-6 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const ContactButtons = () => {
//   return (
//     <ul className="contact-buttons between-row">
//       <li>
//         <ContactButton
//           name="INSTAGRAM"
//           logoSrc="/src/assets/instagram-logo.png"
//           onClick={() =>
//             window.open(import.meta.env.VITE_INSTAGRAM_URL, "_blank")
//           }
//         />
//       </li>
//       <li>
//         <ContactButton
//           name="LINKEDIN"
//           logoSrc="/src/assets/linkedin-logo.png"
//           onClick={() =>
//             window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank")
//           }
//         />
//       </li>
//       <li>
//         <ContactButton
//           name="YOUTUBE"
//           logoSrc="/src/assets/youtube-logo.png"
//           onClick={() =>
//             window.open(import.meta.env.VITE_YOUTUBE_URL, "_blank")
//           }
//         />
//       </li>
//     </ul>
//   );
// };
