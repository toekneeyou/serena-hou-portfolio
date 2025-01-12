import { sanityClient } from "@services/sanityService";
import { useQuery } from "@tanstack/react-query";
import { Visual } from "../types";
import { minutesToMs } from "@helpers/conversions";

export const useVisuals = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["visuals"],
    queryFn: async (): Promise<Visual[]> => {
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
    staleTime: minutesToMs(30),
  });

  return {
    visuals: data ?? [],
    isVisualsLoading: isLoading,
    visualsError: error,
  };
};
