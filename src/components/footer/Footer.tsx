import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHidden = false;

  if (isHidden) return null;

  return (
    <footer className="border-t-[1px] border-t-[rgba(255,255,255,0.5)] h-52 px-[2.25rem] between-row">
      <div className="flex items-center gap-x-[2.25rem]">
        <img src="/src/assets/sh-logo.png" className="h-14 w-auto" />
        <p>
          Check out this portfolio on a desktop for the best experience!
          <br />
          <span className="text-sm">© 2024 Serena Hou</span>
        </p>
      </div>
      <ul className="flex items-center gap-x-[2.25rem]">
        <li>
          <button>
            <img src="/src/assets/icons/email-icon.png" />
          </button>
        </li>
        <li>
          <button>
            <img src="/src/assets/icons/linkedin-icon.png" />
          </button>
        </li>
        <li>
          <button>
            <img src="/src/assets/icons/instagram-icon.png" />
          </button>
        </li>
        <li>
          <button>
            <img src="/src/assets/icons/youtube-icon.png" />
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
