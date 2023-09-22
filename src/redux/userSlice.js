import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {
  userId: null,
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
      const storedUserId = localStorage.getItem("currentUserId");
      if (storedUser && storedUserId) {
        state.username = storedUser;
        state.userId = parseInt(storedUserId, 10); // Convert string back to number
        state.isLoggedIn = true;
      }
    },
    // Set user state on login
    login: (state, action) => {
      state.username = action.payload.username;
      state.userId = action.payload.id;
      state.isLoggedIn = true;
    },
    // Reset user state on logout
    logout: (state) => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentUserId");
      state.username = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

// Make actions usable in components
export const { initializeUser, login, logout } = userSlice.actions;

// Make reducer usable in Redux store
export default userSlice.reducer;
