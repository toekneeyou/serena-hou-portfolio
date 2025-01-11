import { DribbbleIcon } from "@components/icons/DribbbleIcon";
import { InstagramIcon } from "@components/icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LInkedinIcon";
import { MailIcon } from "@components/icons/MailIcon";

export const INSTAGRAM_URL = "";
export const EMAIL_ADDRESS = "";
export const DRIBBBLE_URL = "";
export const LINKEDIN_URL = "";

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Email",
    url: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`,
    icon: MailIcon,
  },
  {
    name: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL,
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    url: import.meta.env.VITE_INSTAGRAM_URL,
    icon: InstagramIcon,
  },
  {
    name: "Dribbble",
    url: import.meta.env.VITE_DRIBBBLE_URL,
    icon: DribbbleIcon,
  },
];
