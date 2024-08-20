import {
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
  WithSlice,
} from "@reduxjs/toolkit";
import { rootReducer, RootState, store } from "./store";

const visualEntities = {
  1: {
    id: "1",
    projectName: "Ghost Writer / Season 6",
    title: "Ghost Writer S6",
    date: "05/2024",
    duties: ["BRAND EVOLUTION", "POSTER DESIGN"],
    imgSrc: "/src/assets/ghost-writer-visual-1.jpg",
  },
  2: {
    id: "2",
    projectName: "Ghost Writer / Season 5",
    title: "Ghost Writer S5",
    date: "08/2023",
    duties: ["BRAND EVOLUTION", "POSTER DESIGN"],
    imgSrc: "/src/assets/ghost-writer-visual-4.jpg",
  },
  3: {
    id: "3",
    projectName: "DoDo's City of Love",
    title: "DODO'S CITY OF LOVE",
    date: "08/2022",
    duties: ["BRAND VISUALIZATION", "GRAPHIC DESIGN"],
    imgSrc: "/src/assets/dodo-visual-1.jpg",
  },
  4: {
    id: "4",
    projectName: "Just Let Me Eat",
    title: "JUST LET ME EAT",
    date: "07/2022",
    duties: ["VIDEO THUMBNAIL DESIGN"],
    imgSrc: "/src/assets/just-let-me-eat-visual-1.jpg",
  },
  5: {
    id: "5",
    projectName: "Rogue Ouija",
    title: "ROGUE OUIJA",
    date: "05/2022",
    duties: ["FILM POSTER DESIGN"],
    imgSrc: "/src/assets/rogue-oujia-visual.jpg",
  },
  6: {
    id: "6",
    projectName: "Burn / Season 2, 3, 4",
    title: "BURN",
    date: "02/2022",
    duties: ["BRAND ANIMATION DESIGN", "VISUAL DESIGN"],
    imgSrc: "/src/assets/burn-visual.jpg",
  },
  7: {
    id: "7",
    projectName: "Burn - Mean Comments / Season 3",
    title: "BURN",
    date: "02/2022",
    duties: ["BRAND ANIMATION DESIGN", "VISUAL DESIGN"],
    imgSrc: "/src/assets/burn-visual-2.jpg",
  },
};
const visualIds = Object.keys(visualEntities);
/**
 *
 * Visual Types
 *
 */
export interface Visual {
  id: string;
  projectName: string;
  title: string;
  date: string;
  duties: string[];
  imgSrc: string;
}
interface VisualState
  extends ReturnType<typeof visualsAdapter.getInitialState> {
  currPage: number;
}

declare module "./store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LazyLoadedSlices extends WithSlice<typeof visualSlice> {}
}
/**
 *
 * Visual Slice Setup
 *
 */
const visualsAdapter = createEntityAdapter<Visual>();
const initialState: VisualState = visualsAdapter.getInitialState({
  currPage: 0,
  ids: visualIds,
  entities: visualEntities,
});
export const visualSlice = createSlice({
  name: "visual",
  initialState,
  reducers: {
    setVisuals: visualsAdapter.setAll,
    setCurrPage: (state, action: PayloadAction<number>) => {
      state.currPage = action.payload;
    },
    nextVisual: (state) => {
      const maxPage = state.ids.length - 1;
      if (state.currPage < maxPage) {
        state.currPage++;
      } else {
        console.log("There are no more visuals.");
      }
    },
    prevVisual: (state) => {
      if (state.currPage > 0) {
        state.currPage--;
      } else {
        console.log("There are no more visuals to go back to.");
      }
    },
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
export const { nextVisual, prevVisual, setVisuals, setCurrPage } =
  visualSlice.actions;
/**
 *
 * Slice selectors
 *
 */
export const getCurrPage = withVisualSlice.selector(
  (state: RootState) => state.visual!.currPage
);
export const getCurrPageStatus = createSelector(
  [
    withVisualSlice.selector((state: RootState) => state.visual!.ids),
    withVisualSlice.selector((state: RootState) => state.visual!.currPage),
  ],
  (visualIds, currPage) => {
    if (visualIds.length === 0) {
      return { canGoToNextPage: false, canGoToPrevPage: false };
    }

    return {
      canGoToNextPage: currPage < visualIds.length - 1,
      canGoToPrevPage: currPage > 0,
    };
  }
);
export const {
  selectAll: getVisuals,
  selectIds: getVisualIds,
  selectEntities: getVisualEntities,
} = visualsAdapter.getSelectors(
  withVisualSlice.selector((state: RootState) => state.visual!)
);
