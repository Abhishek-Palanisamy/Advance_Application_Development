import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: sessionStorage.getItem('username') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload };
      sessionStorage.setItem('username', action.payload); // Store username in sessionStorage upon login
    },
    logout: (state) => {
      state.user = { username: null };
      sessionStorage.clear(); // Remove username from sessionStorage upon logout
    },
    setUsernameFromSessionStorage: (state) => {
      const username = sessionStorage.getItem('username') || null;
      state.user.username = username;
    },
  },
});

export const { login, logout, setUsernameFromSessionStorage } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;
