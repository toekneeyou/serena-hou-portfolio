import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  WithSlice,
} from "@reduxjs/toolkit";
import { ApiStatus } from "../../lib/types";
import { rootReducer, RootState, store } from "../store";

/**
 *
 * Blog Types
 *
 */
interface Post {
  id: string;
  title: string;
}

interface BlogState extends ReturnType<typeof postsAdapter.getInitialState> {
  status: ApiStatus;
  lastUpdatedTime: string | null;
}

declare module "../store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof blogSlice> {}
}
/**
 *
 *
 * Blog Constants
 *
 */
export const BLOG_TIME_UNTIL_NEXT_CALL = 1200000;
/**
 *
 * Async actions
 *
 */
export const blogInitialFetch = createAsyncThunk(
  "blog/initialFetch",
  async () => {}
);
/**
 *
 * Blog slice setup
 *
 */
const postsAdapter = createEntityAdapter<Post>();

const initialState: BlogState = postsAdapter.getInitialState({
  status: "idle",
  lastUpdatedTime: null,
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(blogInitialFetch.pending, (state) => {
      state.status = "loading";
    });
    builders.addCase(blogInitialFetch.fulfilled, (state) => {
      state.status = "success";
    });
    builders.addCase(blogInitialFetch.rejected, (state) => {
      state.status = "fail";
    });
  },
});
/**
 *
 *
 * Code splitting and reducer injection
 *
 *
 */
const withBlogSlice = rootReducer.inject(blogSlice);
export const injectBlogSlice = () => {
  if (!store.getState().blog) {
    store.replaceReducer(withBlogSlice);
  }
};
/**
 *
 *
 * Slice actions
 *
 *
 */
export const {} = blogSlice.actions;

/**
 *
 * Slice selectors
 *
 */
export const blogGetLastUpdatedTime = withBlogSlice.selector(
  (state: RootState) => state.blog!.lastUpdatedTime
);
export const {
  selectAll: blogGetPosts,
  selectEntities: blogGetPostEntities,
  selectIds: blogGetPostIds,
} = postsAdapter.getSelectors(withBlogSlice.selector((state) => state.blog));

export const blogGetShouldFetch = createSelector(
  [blogGetLastUpdatedTime],
  (lastUdatedTime) => {
    return lastUdatedTime
      ? new Date().getMilliseconds() -
          new Date(lastUdatedTime).getMilliseconds() >
          BLOG_TIME_UNTIL_NEXT_CALL
      : true;
  }
);
