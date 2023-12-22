import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitem:[],

};
export const cartSlice=createSlice({
    name:'cartitem',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let finditem = state.cartitem.find((item)=>item.id === action.payload.id)
            if (finditem){
                finditem.quantity =1;

            }
            
            else {
                state.cartitem.push(action.payload)
            }
            // state.cartitem.push(action.payload)
        },
        incCart:(state,action)=>{
            let finditem=state.cartitem.find((item)=>item.id===action.payload.id)
            if(finditem.quantity >=1){
                finditem.quantity+=1
            }
        },
        decCart:(state,action)=>{
            let finditem=state.cartitem.find((item)=>item.id ===action.payload.id)
            if(finditem.quantity<=1){
                finditem.quantity=1
            }else {
                finditem.quantity -=1
            }
        },
        DeleteCart:(state,action)=>{
             state.cartitem=state.cartitem.filter((item)=>item.id !== action.payload)
        }
    }

})

export const{addToCart,incCart,decCart,DeleteCart}=cartSlice.actions;

export default cartSlice.reducer;