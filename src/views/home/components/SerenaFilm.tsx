import { classnames } from "@helpers/helpers";

const SerenaFilm = () => (
  <img
    className={classnames(
      "serena-film max-w-[initial] h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[17rem] ",
      {
        "animate-hero-film-marquee": false,
      }
    )}
    src="/src/assets/hero-film.jpg"
    alt="film strip of serena in different poses"
  />
);

export default SerenaFilm;
