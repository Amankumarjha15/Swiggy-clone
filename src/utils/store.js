import{configureStore} from "@reduxjs/toolkit"
import toogleSlice from "./toogleSlice"



const store = configureStore({
    reducer : {
        toogleSlice : toogleSlice

    }
})


export default store;