import { classnames } from "@helpers/helpers";

const SerenaFilm = () => (
  <img
    className={classnames("serena-film max-w-[initial]", {
      "animate-hero-film-marquee": false,
    })}
    src="/src/assets/hero-film.jpg"
    alt="film strip of serena in different poses"
  />
);

export default SerenaFilm;
