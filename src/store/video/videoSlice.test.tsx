import { describe, expect, it, Mock, vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import {
  videoGetAllVideoIds,
  videoInitialFetch,
  videoSlice,
} from "./videoSlice";
import { fetchVideosAndCategories } from "../../lib/services/sanityService";
import mockResponse from "./mockResponse.json";
import { RootState } from "../store";

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = MockResizeObserver;

vi.mock("../../lib/services/sanityService", () => ({
  fetchVideosAndCategories: vi.fn() as unknown as ReturnType<
    typeof fetchVideosAndCategories
  >,
}));

describe("data fetching", () => {
  it("should transform response and store it in the correct order", async () => {
    /**
     * Configure store
     */
    const store = configureStore({
      reducer: {
        video: videoSlice.reducer,
      },
    });
    /**
     * Mock fetchVideosAndCategories
     */
    (fetchVideosAndCategories as Mock).mockResolvedValueOnce(mockResponse);
    /**
     * Fetch mock response
     */
    await store.dispatch(videoInitialFetch());
    /**
     * Make sure status is now 'success'
     */
    const state = store.getState().video;
    expect(state.status).toBe("success");
    /**
     * Make sure category ids are stored accurately and in order
     */
    state.categoryIds.forEach((categoryId, i) => {
      expect(categoryId).toBe(mockResponse[i]._id);
    });
    const allVideoIds = videoGetAllVideoIds(store.getState() as RootState);
    /**
     * Make sure video ids are being flattend properly and in order
     */
    const mockAllVideoIds = [
      "d368a1f1-35bf-4176-b6d8-771cbc15630d",
      "4be38cbf-23fb-4da3-88e6-0e5bb6dfd6bb",
    ];
    expect(allVideoIds).toEqual(mockAllVideoIds);
  });
});
