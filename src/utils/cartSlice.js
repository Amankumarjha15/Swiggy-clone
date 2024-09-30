import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name :"cartSlice",
    initialState :{
        cartItems : [],
        resInfo :[]
    },
    reducers :{
        addToCart : ()=>{},
        deleteItem : ()=>{},
        clearCart : ()=>{}
    }
})


export default cartSlice.reducer