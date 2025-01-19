import { sanityClient } from "@services/sanityService";
import { minutesToMs } from "@helpers/conversions";
import { useQuery } from "@tanstack/react-query";
import { Video } from "../types";

export const useVideos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: async (): Promise<Video[]> => {
      const response =
        await sanityClient.fetch(`*[_type == "video" && isDisplayed == true]{
          _id,
          name,
          title,
          videoUrl,
          "category": category-> {
            title
          },
          "thumbnailUrl": thumbnail.asset->url,
        }
      `);
      return response;
    },
    staleTime: minutesToMs(30),
  });

  return {
    videos: data ?? [],
    isVideosLoading: isLoading,
    videosError: error,
  };
};
