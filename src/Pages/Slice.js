import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:"project",
    initialState:{
        cartbox:[],
        favbox:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            state.cartbox=action.payload
        },
        addtofavorite:(state,action)=>{
            state.favbox=action.payload
        },
        removecart:(state,action)=>{
            state.cartbox=action.payload
        },
        increase:(state,action)=>{
            state.cartbox=action.payload
        }
    }
})

export const {addtocart,addtofavorite,removecart,increase}=Slice.actions;
export default Slice.reducer;
