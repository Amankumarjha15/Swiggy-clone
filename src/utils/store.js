import{configureStore} from "@reduxjs/toolkit"
import toogleSlice from "./toogleSlice"
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";



const store = configureStore({
    reducer : {
       toogleSlice : toogleSlice,
       cartSlice : cartSlice,
       filterSlice : filterSlice
    }
})


export default store;