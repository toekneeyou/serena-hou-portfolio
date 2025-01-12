export interface Video {
  category: VideoCategory;
  name: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface VideoCategory {
  name: VideoCategoryName;
  title: string;
  video: Video[];
}

export type VideoCategoryName =
  | "music-video"
  | "live-concert"
  | "comedy-special"
  | "roast-battle"
  | "youtube-series";
