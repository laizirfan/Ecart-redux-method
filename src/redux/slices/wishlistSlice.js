import { createSlice } from "@reduxjs/toolkit"


const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers: {
      //actions 1-add,2remove

        addWishlistItem:(state,actions)=>{
            state.push(actions.payload)
            



        },
        removeWishlistItem:(state,actions)=>{
           return  state.filter((item)=>item.id!=actions.payload)  

        }
    }

    

})

export const {addWishlistItem,removeWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer
