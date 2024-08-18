import { combineSlices, configureStore, WithSlice } from "@reduxjs/toolkit";
import { viewportSlice } from "./viewportSlice";
import { blogSlice } from "./blogSlice";

export const rootReducer =
  combineSlices(viewportSlice).withLazyLoadedSlices<
    WithSlice<typeof blogSlice>
  >();

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
