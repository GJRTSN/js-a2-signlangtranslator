import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {
  username: null,
  isLoggedIn: false,
};

// Updating the user state.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Initialize the user state based on stored data in local storage.
    initializeUser: (state) => {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        state.username = storedUser;
        state.isLoggedIn = true;
      }
    },
    // Set user state on login
    login: (state, action) => {
      state.username = action.payload;
      state.isLoggedIn = true;
    },
    // Reset user state on logout
    logout: (state) => {
      state.username = null;
      state.isLoggedIn = false;
    },
  },
});

// Make actions usable in components
export const { initializeUser, login, logout } = userSlice.actions;

// Make reducer usable in Redux store
export default userSlice.reducer;
