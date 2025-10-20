import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { sidebarOpen: true, modalOpen: false },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const { toggleSidebar, toggleModal } = uiSlice.actions;
export default uiSlice.reducer;
