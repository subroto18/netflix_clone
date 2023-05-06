import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface videState {
  data: string[];
  loading: boolean;
  error: boolean;
}

const initialState: videState = {
  data: [],
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    updateLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateVideoData: (state, action: PayloadAction<string[]>) => {
      state.data = action.payload;
    },
    updateErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { updateLoadingStatus, updateVideoData, updateErrorStatus } =
  videoSlice.actions;

export default videoSlice.reducer;
