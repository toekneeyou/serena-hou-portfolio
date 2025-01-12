import { sanityClient } from "@services/sanityService";
import { minutesToMs } from "@helpers/conversions";
import { useQuery } from "@tanstack/react-query";
import { VideoCategory } from "../types";

export const useVideos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: async (): Promise<VideoCategory[]> => {
      const response = await sanityClient.fetch(`*[_type == "videoCategory"]{
            _id,
            name,
            title,
            video[]->{
              _id,
              name,
              "thumbnailUrl": thumbnail.asset->url,
              videoUrl,
              category->{
                _id,
              }
            },
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
