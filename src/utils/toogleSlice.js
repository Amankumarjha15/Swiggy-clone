import { createSlice } from "@reduxjs/toolkit";



const toogleSlice = createSlice({
    name : "toogleSlice",
    initialState : {
        searchBarToogle : false 
    },
    reducers : {
          toogleSearchBar : (state , action)=> {
              state.searchBarToogle = ! state.searchBarToogle
          },
    }
})


export const {toogleSearchBar} = toogleSlice.actions
export default toogleSlice.reducer