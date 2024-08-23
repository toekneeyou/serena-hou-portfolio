import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  WithSlice,
} from "@reduxjs/toolkit";
import { ApiStatus } from "../lib/types";
import { rootReducer, RootState, store } from "./store";
import { fetchProjects } from "../lib/services/sanityService";

/**
 * Project Types
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: { src: string; alt: string };
}

interface ProjectState
  extends ReturnType<typeof projectsAdapter.getInitialState> {
  status: ApiStatus;
  lastUpdatedTime: string | null;
}

declare module "./store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof projectSlice> {}
}
/**
 * Project Constants
 */
export const PROJECT_TIME_UNTIL_NEXT_CALL = 1200000;
/**
 * Async Actions
 */
const formatProjectResponse = (
  response: {
    _id: string;
    title: string;
    description: string;
    skills: string[];
    imageDescription: string;
    image: string;
  }[]
) => {
  return response.map((project) => {
    return {
      id: project._id,
      title: project.title,
      description: project.description,
      skills: project.skills,
      image: { src: project.image, alt: project.imageDescription },
    } as Project;
  });
};
export const projectInitialFetch = createAsyncThunk(
  "project/initialFetch",
  async () => {
    try {
      const response = await fetchProjects();
      return formatProjectResponse(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
/**
 * Project Slice Setup
 */
const projectsAdapter = createEntityAdapter<Project>();

const initialState: ProjectState = projectsAdapter.getInitialState({
  status: "idle",
  lastUpdatedTime: null,
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(projectInitialFetch.pending, (state) => {
      state.status = "loading";
    });
    builders.addCase(projectInitialFetch.fulfilled, (state, action) => {
      console.log(action.payload);
      projectsAdapter.setAll(state, action.payload);
      state.lastUpdatedTime = new Date().toISOString();
      state.status = "success";
    });
    builders.addCase(projectInitialFetch.rejected, (state) => {
      state.status = "fail";
    });
  },
});
/**
 * Code splitting and reducer injection
 */
const withProjectSlice = rootReducer.inject(projectSlice);
export const injectProjectSlice = () => {
  if (!store.getState().project) {
    store.replaceReducer(withProjectSlice);
  }
};
/**
 * Project actions
 */
export const {} = projectSlice.actions;
/**
 * Project selectors
 */
export const { selectAll: projectGetAllProjects } =
  projectsAdapter.getSelectors(
    withProjectSlice.selector((state: RootState) => state.project!)
  );
export const projectGetLastUpdatedTime = withProjectSlice.selector(
  (state: RootState) => state.project!.lastUpdatedTime
);
export const projectGetShouldFetch = createSelector(
  [projectGetLastUpdatedTime],
  (lastUpdatedTime) => {
    return lastUpdatedTime
      ? new Date().getMilliseconds() -
          new Date(lastUpdatedTime).getMilliseconds() >
          PROJECT_TIME_UNTIL_NEXT_CALL
      : true;
  }
);
