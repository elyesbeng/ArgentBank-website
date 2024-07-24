import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState : {
    userInfo: {},
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setNewUsername(state, action) {
      state.userInfo.userName = action.payload;
    },
  },
});

// Exportez les actions créées par createSlice
export const { setUserInfo, setNewUsername } = userSlice.actions;

export default userSlice.reducer;