import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "openSlidingComponent",
  initialState: {
    value: false,
    component: null,
  },
  reducers: {
    openSlidingComponent: (state, action) => {
      state.value = true;
      state.component = action.payload;
    },
    closeSlidingComponent: (state) => {
      state.value = !state.value;
      state.component = null;
    },
  },
});

export const { closeSlidingComponent, openSlidingComponent } = slic