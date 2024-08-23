import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const handleNoResults = (response: unknown) => {
  if (Array.isArray(response) && response.length === 0) {
    throw new Error("No results");
  }
};

export const fetchVideosAndCategories = async () => {
  const response = await sanityClient.fetch(`*[_type == "videoCategory"]{
    _id,
    name,
    title,
    video[]->{
      _id,
      name,
      "thumbnailUrl": thumbnail.asset->url,
      category->{
        _id,
      }
    },
  }
`);
  handleNoResults(response);
  return response;
};

export const fetchVisuals = async () => {
  const response = await sanityClient.fetch(`*[_type == "visual"]{
    _id,
    name,
    title,
    date,
    tags,
    "image": image.asset->url
    }
  `);
  handleNoResults(response);
  return response;
};

export const fetchProjects = async () => {
  const response = await sanityClient.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    imageDescription,
    skills,
    "image": image.asset->url
  }`);
  handleNoResults(response);
  return response;
};
