import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutation the state over here //We are just modifiying the current state 
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },    
    },   
});
export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;