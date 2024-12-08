import { store } from "@store/store";

export const prefetchVisuals = () => {
  requestIdleCallback(() => {
    import("@store/visualSlice").then((module) => {
      module.injectVisualSlice();
      if (module.visualGetShouldFetch(store.getState())) {
        store.dispatch(module.visualInitialFetch());
      }
    });
  });
};

export const prefetchVideos = () => {
  requestIdleCallback(() => {
    import("@store/video/videoSlice").then((module) => {
      module.injectVideoSlice();
      if (module.videoGetShouldFetch(store.getState())) {
        store.dispatch(module.videoInitialFetch());
      }
    });
  });
};

export const prefetchBlog = () => {
  requestIdleCallback(() => {
    import("@store/blog/blogSlice").then((module) => {
      module.injectBlogSlice();
      if (module.blogGetShouldFetch(store.getState())) {
        store.dispatch(module.blogInitialFetch());
      }
    });
  });
};
