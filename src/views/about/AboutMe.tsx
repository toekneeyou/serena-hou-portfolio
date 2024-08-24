const AboutMe = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="centered-row w-24 transition-transform">
        <h2 className="text-nowrap inline-block -rotate-90 uppercase font-oswald text-8xl">
          About Me
        </h2>
      </div>
      ;
      <div className="flex-grow centered-row gap-x-28 px-36">
        <p>
          <span className="block text-3xl font-bold mb-10">
            Hey there, I'm Serena!
          </span>{" "}
          <span className="block mb-4">
            I’m a <strong>UX/UI designer</strong> and{" "}
            <strong>post-production supervisor</strong> based in Los Angeles.
          </span>
          <span className="block mb-4">
            With over 10 years diving deep into video production, I've pretty
            much done it all – directing, producing, designing, editing – you
            name it. From comedy videos to documentaries and eye-catching ads,
            I've brought plenty of ideas to life.
          </span>
          <span className="block mb-4">
            My journey into UX/UI design? Let's just say it was a bit
            unexpected. Surrounded by tech whizzes and design gurus in LA, I
            felt the itch for something fresh. Whether as a lead post-production
            specialist or visual designer, I've always loved making things look
            good and keeping people engaged.
          </span>
          <span className="block mb-4">
            But hey, life isn't all frames and designs! You can find me sharing
            bits of my adventures on social media. What started as a fun hobby
            turned into a big passion project. Oh, and I've even tried my hand
            at marketing and social media strategy – because, why not, right?
          </span>
          <span className="block">
            Let's chat and share stories – I'm excited to get to know you!
          </span>
        </p>

        <img src="/src/assets/about-me-photo.jpg" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default AboutMe;
