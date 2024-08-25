import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
  WithSlice,
} from "@reduxjs/toolkit";
import { rootReducer, RootState, store } from "./store";
import { fetchVisuals } from "../lib/services/sanityService";
import { ApiStatus } from "../lib/types";
/**
 *
 * Visual Types
 *
 */
export interface Visual {
  id: string;
  name: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
}

interface VisualState
  extends ReturnType<typeof visualsAdapter.getInitialState> {
  status: ApiStatus;
  lastUpdatedTime: string | null;
  visualCurrIndex: number;
}

declare module "./store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof visualSlice> {}
}
/**
 *
 *
 * Visual Constants
 *
 */
export const VISUAL_TIME_UNTIL_NEXT_CALL = Infinity;
/**
 * Async Actions
 */
const formatVisualsResponse = (
  response: Array<Omit<Visual, "id"> & { _id: string }>
) => {
  return response.map((r) => ({ ...r, id: r._id })) as Visual[];
};
export const visualInitialFetch = createAsyncThunk(
  "visual/initialFetch",
  async () => {
    try {
      const response = await fetchVisuals();
      return formatVisualsResponse(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
/**
 *
 * Visual Slice Setup
 *
 */
const visualsAdapter = createEntityAdapter<Visual>();
const initialState: VisualState = visualsAdapter.getInitialState({
  status: "idle",
  lastUpdatedTime: null,
  visualCurrIndex: 0,
});

export const visualSlice = createSlice({
  name: "visual",
  initialState,
  reducers: {
    visualSetCurrIndex: (state, action: PayloadAction<number>) => {
      state.visualCurrIndex = action.payload;
    },
    visualNext: (state) => {
      const maxPage = state.ids.length - 1;
      if (state.visualCurrIndex < maxPage) {
        state.visualCurrIndex++;
      } else {
        console.log("There are no more visuals.");
      }
    },
    visualPrev: (state) => {
      if (state.visualCurrIndex > 0) {
        state.visualCurrIndex--;
      } else {
        console.log("There are no more visuals to go back to.");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(visualInitialFetch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(visualInitialFetch.fulfilled, (state, action) => {
      visualsAdapter.setAll(state, action.payload);
      state.lastUpdatedTime = new Date().toISOString();
      state.status = "success";
    });
    builder.addCase(visualInitialFetch.rejected, (state) => {
      state.status = "fail";
    });
  },
});
/**
 *
 * Code splitting and reducer injection
 *
 */
const withVisualSlice = rootReducer.inject(visualSlice);
export const injectVisualSlice = () => {
  if (!store.getState().visual) {
    store.replaceReducer(withVisualSlice);
  }
};
/**
 *
 * Slice actions
 *
 */
export const { visualNext, visualPrev, visualSetCurrIndex } =
  visualSlice.actions;
/**
 *
 * Slice selectors
 *
 */
export const visualGetLastUpdatedTime = withVisualSlice.selector(
  (state: RootState) => state.visual!.lastUpdatedTime
);
export const visualGetCurrIndex = withVisualSlice.selector(
  (state: RootState) => state.visual!.visualCurrIndex
);
export const visualGetCurrIndexStatus = createSelector(
  [
    withVisualSlice.selector((state: RootState) => state.visual!.ids),
    withVisualSlice.selector(
      (state: RootState) => state.visual!.visualCurrIndex
    ),
  ],
  (visualIds, visualCurrIndex) => {
    if (visualIds.length === 0) {
      return { canGoToNextVisual: false, canGoToPrevVisual: false };
    }

    return {
      canGoToNextVisual: visualCurrIndex < visualIds.length - 1,
      canGoToPrevVisual: visualCurrIndex > 0,
    };
  }
);

export const visualGetShouldFetch = createSelector(
  [visualGetLastUpdatedTime],
  (lastUpdatedTime) => {
    return lastUpdatedTime
      ? new Date().getMilliseconds() -
          new Date(lastUpdatedTime).getMilliseconds() >
          VISUAL_TIME_UNTIL_NEXT_CALL
      : true;
  }
);

export const {
  selectAll: visualGetVisuals,
  selectIds: visualGetVisualIds,
  selectEntities: visualGetVisualEntities,
} = visualsAdapter.getSelectors(
  withVisualSlice.selector((state: RootState) => state.visual!)
);
