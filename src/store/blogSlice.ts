import { createSlice, PayloadAction, WithSlice } from "@reduxjs/toolkit";
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
export interface BlogState {
  postIds: string[];
  posts: { [id: string]: Post };
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
const initialState: BlogState = {
  postIds: [],
  posts: {},
};
export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      const postIds: BlogState["postIds"] = [];
      const posts: BlogState["posts"] = {};
      action.payload.forEach((post) => {
        posts[post.id] = post;
        postIds.push(post.id);
      });
      state.postIds = postIds;
      state.posts = posts;
    },
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
  store.replaceReducer(withBlogSlice);
};
/**
 *
 *
 * Slice actions
 *
 *
 */
export const { setPosts } = blogSlice.actions;
/**
 *
 *
 * Slice selectors
 *
 *
 */
export const getPostIds = withBlogSlice.selector(
  (state: RootState) => state.blog!.postIds
);
