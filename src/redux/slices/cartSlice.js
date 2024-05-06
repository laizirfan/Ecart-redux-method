import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
 name:'cartSlice',
 initialState:[],
 reducers : {

    addCartItem : (state,actions)=>{
        state.push(actions.payload)

    }
   ,
    removeCartItem : (state,actions)=>{
     return state.filter((item)=>item.id!=actions.payload)

    }
    ,

    emptyCart : (state)=>{
      return  state= []
    }
 }
   
 

})

export const {addCartItem,removeCartItem,emptyCart} = cartSlice.actions

export default cartSlice.reducer