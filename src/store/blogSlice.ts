import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  WithSlice,
} from "@reduxjs/toolkit";
import { rootReducer, RootState, store } from "./store";
/**
 *
 *
 * Slice Types
 *
 *
 */
interface Post {
  id: string;
  title: string;
}

interface BlogState extends ReturnType<typeof postsAdapter.getInitialState> {
  status: "idle" | "pending";
}

declare module "./store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof blogSlice> {}
}
/**
 *
 *
 * Slice setup
 *
 */
const postsAdapter = createEntityAdapter<Post>();

const initialState: BlogState = postsAdapter.getInitialState({
  status: "idle",
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
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
  store.replaceReducer(withBlogSlice);
};
/**
 *
 *
 * Slice actions
 *
 *
 */
export const {} = blogSlice.actions;

export const fetchPosts = createAsyncThunk("blog/fetchPosts", async () => {});
/**
 *
 *
 * Slice selectors
 *
 *
 */
export const getPostIds = createSelector(
  [withBlogSlice.selector((state: RootState) => state.blog!.ids)],
  (postIds) => postIds
);
export const getPostEntities = createSelector(
  [withBlogSlice.selector((state: RootState) => state.blog!.entities)],
  (postEntities) => postEntities
);
