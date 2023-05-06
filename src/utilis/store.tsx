import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import posterSlice from "./posterSlice";
import searchSlice from "./searchSlice";
import videoDetailsSlice from "./videoDetailsSlice";
import videosSlice from "./videosSlice";

export const store = configureStore({
  reducer: {
    video: videosSlice,
    poster: posterSlice,
    app: appSlice,
    search: searchSlice,
    videoDetails: videoDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
