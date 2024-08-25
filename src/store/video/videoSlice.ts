import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
  WithSlice,
} from "@reduxjs/toolkit";
import { rootReducer, RootState, store } from "../store";
import { fetchVideosAndCategories } from "../../lib/services/sanityService";
import { ApiStatus } from "../../lib/types";
/**
 *
 * Video Types
 *
 */
export interface VideoCategory {
  id: string;
  name: string;
  title: string;
  videos: string[];
}

export interface VideoCategoryEntity {
  [id: string]: VideoCategory;
}

export interface Video {
  id: string;
  name: string;
  categoryId: VideoCategory["id"];
  thumbnailUrl: string;
}

export interface VideoEntity {
  [id: string]: Video;
}

export interface VideoState {
  status: ApiStatus;
  lastUpdatedTime: string | null;
  categoryIds: string[];
  categoryEntities: VideoCategoryEntity;
  videoEntities: VideoEntity; // used for accessing video object with id
  videoCurrIndex: number; // used for pagination
}

declare module "../store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof videoSlice> {}
}
/**
 *
 *
 * Video Constants
 *
 */
export const VIDEO_TIME_UNTIL_NEXT_CALL = Infinity;
/**
 * Async Actions
 */
const formatVideoResponse = (
  response: {
    _id: string;
    name: string;
    title: string;
    video: { _id: string; name: string; thumbnailUrl: string }[];
  }[]
) => {
  const categoryIds: string[] = [];
  const categoryEntities: VideoCategoryEntity = {};
  const videoEntities: VideoEntity = {};

  response.forEach((category) => {
    categoryIds.push(category._id);
    categoryEntities[category._id] = {
      id: category._id,
      name: category.name,
      title: category.title,
      videos: category.video ? category.video.map((v) => v._id) : [],
    };
    category.video?.forEach((v) => {
      videoEntities[v._id] = {
        id: v._id,
        name: v.name,
        categoryId: category._id,
        thumbnailUrl: v.thumbnailUrl,
      };
    });
  });

  return { categoryIds, categoryEntities, videoEntities };
};
export const videoInitialFetch = createAsyncThunk(
  "video/initialFetch",
  async () => {
    try {
      const response = await fetchVideosAndCategories();
      return formatVideoResponse(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
/**
 *
 * Video Slice Setup
 *
 */
const initialState: VideoState = {
  status: "idle",
  lastUpdatedTime: null,
  categoryIds: [],
  categoryEntities: {},
  videoEntities: {},
  videoCurrIndex: 0,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    videoSetCurrIndex: (state, action: PayloadAction<number>) => {
      state.videoCurrIndex = action.payload;
    },
    videoNext: (state) => {
      const allVideoIds = flattenIds(state.categoryIds, state.categoryEntities);
      const maxIndex = allVideoIds.length - 1;
      if (state.videoCurrIndex < maxIndex) {
        state.videoCurrIndex++;
      } else {
        console.log("There are no more videos.");
      }
    },
    videoPrev: (state) => {
      if (state.videoCurrIndex > 0) {
        state.videoCurrIndex--;
      } else {
        console.log("There are no more videos to go back to.");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(videoInitialFetch.fulfilled, (state, action) => {
      state.lastUpdatedTime = new Date().toISOString();
      state.categoryEntities = action.payload.categoryEntities;
      state.categoryIds = action.payload.categoryIds;
      state.videoEntities = action.payload.videoEntities;
      state.status = "success";
    });
    builder.addCase(videoInitialFetch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(videoInitialFetch.rejected, (state) => {
      state.status = "fail";
    });
  },
});
/**
 *
 * Code splitting and reducer injection
 *
 */
const withVideoSlice = rootReducer.inject(videoSlice);
export const injectVideoSlice = () => {
  if (!store.getState().video) {
    store.replaceReducer(withVideoSlice);
  }
};
/**
 *
 * Slice actions
 *
 */
export const { videoNext, videoPrev, videoSetCurrIndex } = videoSlice.actions;
/**
 *
 * Slice selectors
 *
 */
const flattenIds = (
  categoryIds: string[],
  categoryEntities: VideoCategoryEntity
) => {
  return categoryIds.map((id) => categoryEntities[id].videos).flat();
};
/**
 *
 * Video Category related selectors
 *
 */
export const videoGetStatus = withVideoSlice.selector(
  (state: RootState) => state.video!.status
);

export const videoGetLastUpdatedTime = withVideoSlice.selector(
  (state: RootState) => state.video!.lastUpdatedTime
);

export const videoGetCategoryEntities = withVideoSlice.selector(
  (state: RootState) => state.video!.categoryEntities
);

export const videoGetCategoryIds = withVideoSlice.selector(
  (state: RootState) => state.video!.categoryIds
);

export const videoGetVideoEntities = withVideoSlice.selector(
  (state: RootState) => state.video!.videoEntities
);

export const videoGetCurrIndex = withVideoSlice.selector(
  (state: RootState) => state.video!.videoCurrIndex
);
/**
 *
 * This is the list of ids used for the scrolling component
 *
 */
export const videoGetAllVideoIds = createSelector(
  [
    withVideoSlice.selector((state: RootState) => state.video!.categoryIds!),
    withVideoSlice.selector(
      (state: RootState) => state.video!.categoryEntities!
    ),
  ],
  (categoryIds, categoryEntities) => flattenIds(categoryIds, categoryEntities)
);
/**
 *
 *
 * Indicates whethere we can move to the next or previous id in allVideoIds
 *
 */
export const videoGetCurrIndexStatus = createSelector(
  [
    withVideoSlice.selector(videoGetAllVideoIds),
    withVideoSlice.selector((state: RootState) => state.video!.videoCurrIndex),
  ],
  (allVideoIds, currIndex) => {
    if (allVideoIds.length === 0 || currIndex < 0) {
      return { canGoToNextVideo: false, canGoToPrevVideo: false };
    }

    return {
      canGoToNextVideo: currIndex < allVideoIds.length - 1,
      canGoToPrevVideo: currIndex > 0,
    };
  }
);
export const videoGetCurrVideoId = createSelector(
  [videoGetAllVideoIds, videoGetCurrIndex],
  (allVideoIds, currVideoIdIndex) => {
    return allVideoIds[currVideoIdIndex];
  }
);
export const videoGetCurrVideo = createSelector(
  [videoGetVideoEntities, videoGetCurrVideoId],
  (videoEntites, currVideoId) => {
    return videoEntites[currVideoId];
  }
);
/**
 *
 * Returns the category belonging to the current videoId.
 */
export const videoGetCategoryCurrIndex = createSelector(
  [videoGetCurrVideo, videoGetCategoryIds],
  (currVideo, videoCategoryIds) => {
    if (currVideo) {
      const currCategoryId = currVideo.categoryId;
      const index = videoCategoryIds.findIndex((id) => id === currCategoryId);
      return index;
    } else {
      return -1;
    }
  }
);
/**
 * Only call sanity api after a certain amount of time has elapsed.
 */
export const videoGetShouldFetch = createSelector(
  [videoGetLastUpdatedTime],
  (lastUpdatedTime) => {
    return lastUpdatedTime
      ? new Date().getMilliseconds() -
          new Date(lastUpdatedTime).getMilliseconds() >
          VIDEO_TIME_UNTIL_NEXT_CALL
      : true;
  }
);
