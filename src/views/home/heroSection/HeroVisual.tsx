import { classnames } from "../../../lib/helpers";

const HeroVisual = () => {
  return (
    <div className="hero-visual flex items-start">
      <div className="hero-marquee pointer-events-none flex translate-y-[-100%] -translate-x-20 rotate-45 origin-[0%_100%]">
        <SerenaFilm />
      </div>
    </div>
  );
};
/**
 * Film strip containing multiple photos of Serena
 */
const SerenaFilm = () => (
  <img
    className={classnames("serena-film max-w-[initial]", {
      "animate-hero-film-marquee": false,
    })}
    src="/src/assets/hero-film.jpg"
    alt="film strip of serena in different poses"
  />
);

export default HeroVisual;
