import{configureStore} from "@reduxjs/toolkit"
import toogleSlice from "./toogleSlice"
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer : {
        toogleSlice,
        cartSlice
    }
})


export default store;