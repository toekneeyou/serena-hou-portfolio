import { sanityClient } from "@services/sanityService";
import { useQuery } from "@tanstack/react-query";

export const useVisuals = () => {
  const { data } = useQuery({
    queryKey: ["visuals"],
    queryFn: async () => {
      const response = await sanityClient.fetch(`
            *[_type == "visual"] | order(date desc) {
              _id,
              name,
              title,
              date,
              tags,
              "image_small": image_small.asset->url,
              "image_medium": image_medium.asset->url,
              "image_large": image_large.asset->url
            }
          `);
      return response;
    },
  });

  console.log(data);
};
