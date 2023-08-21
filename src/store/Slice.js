import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 userInfo:[]
}

export const travelSlice = createSlice({
  name: 'Travel',
  initialState,
  reducers: {
     setUserInfo:(state,action)=>{
      state.userInfo=action.payload
     },
     userSignOut:(state)=>{
      state.userInfo=null;
     }
  },
})

// Action creators are generated for each case reducer function
export const {setUserInfo,userSignOut } = travelSlice.actions

export default travelSlice.reducer