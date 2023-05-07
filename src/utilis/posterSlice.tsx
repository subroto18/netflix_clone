import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PosterData = {
  original_title?: string;
  poster_path?: string;
  overview?: string;
  id?: number;
};

export interface postSlice {
  data: PosterData;
  loading: boolean;
  error: boolean;
  errorMsg: string;
  statusCode: number;
}

const initialState: postSlice = {
  data: {},
  loading: true,
  error: false,
  errorMsg: "",
  statusCode: 200,
};

export const posterSlice = createSlice({
  name: "poster",
  initialState,
  reducers: {
    updatePosterLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updatePosterData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    updateErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateErrorMsg: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },
    updateStatusCode: (state, action: PayloadAction<number>) => {
      state.statusCode = action.payload;
    },
  },
});

export const {
  updatePosterLoadingStatus,
  updatePosterData,
  updateErrorStatus,
  updateErrorMsg,
  updateStatusCode,
} = posterSlice.actions;

export default posterSlice.reducer;
