import {createSlice} from "@reduxjs/toolkit"
const initialState={
    isloggedin:false,
    userdata:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login :(state,action)=>{
             state.isloggedin=true;
             state.userdata=action.payload.user; 
        },
        logout:(state)=>{
           state.isloggedin=false
           state.userdata=null
        }
    }
})

 export const  {login,logout} =authSlice.actions
 export default authSlice.reducer