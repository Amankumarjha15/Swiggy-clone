import{configureStore} from "@reduxjs/toolkit"
import toogleSlice from "./toogleSlice"
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";



const store = configureStore({
    reducer : {
       toogleSlice : toogleSlice,
       cartSlice : cartSlice,
       filterSlice : filterSlice,
       authSlice : authSlice
    }
})


export default store;