import {
  IconBrandDribbble,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export const INSTAGRAM_URL = "";
export const EMAIL_ADDRESS = "";
export const DRIBBBLE_URL = "";
export const LINKEDIN_URL = "";

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Email",
    url: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`,
    icon: IconMail,
  },
  {
    name: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL,
    icon: IconBrandLinkedin,
  },
  {
    name: "Instagram",
    url: import.meta.env.VITE_INSTAGRAM_URL,
    icon: IconBrandInstagram,
  },
  {
    name: "Dribbble",
    url: import.meta.env.VITE_DRIBBBLE_URL,
    icon: IconBrandDribbble,
  },
];
