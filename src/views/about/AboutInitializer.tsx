import { useEffect } from "react";
import { injectBlogSlice } from "../../store/blog/blogSlice";

const AboutInitializer = () => {
  useEffect(() => {
    injectBlogSlice();
  }, []);

  return null;
};

export default AboutInitializer;
