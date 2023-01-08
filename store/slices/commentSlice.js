import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  value: [
    {
      comment: "Gojo looks nice.",
      username: "Saitama",
    },
    {
      comment: "Catoru Sensei!",
      username: "Yuji",
    },
  ],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});

export const { addComment } = commentSlice.actions;
export const selectComments = (state) => state.comments.value;
export default commentSlice.reducer;
